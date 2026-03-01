import { Project, SyntaxKind, Type, Symbol } from "ts-morph";
import * as fs from "fs";
import * as path from "path";

const blocksDir = path.join(__dirname, "../src/components/blocks");
const outputFile = path.join(__dirname, "../src/app/puck/blocks/shadcn-blocks.tsx");

const project = new Project({
  tsConfigFilePath: path.join(__dirname, "../tsconfig.json"),
});

project.addSourceFilesAtPaths(`${blocksDir}/**/*.tsx`);

let exportsContent = `// Auto-generated Puck components for Shadcn Blocks\nimport { ComponentConfig } from "@measured/puck";\n`;
let configContent = `\nexport const shadcnBlocksConfig: Record<string, ComponentConfig<any>> = {\n`;

const files = fs.readdirSync(blocksDir).filter(f => f.endsWith(".tsx"));

files.forEach(file => {
  const componentName = file.replace(".tsx", "");
  const pascalName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  const sourceFile = project.getSourceFile(path.join(blocksDir, file));
  
  if (!sourceFile) return;

  exportsContent += `import { ${pascalName} } from "@/components/blocks/${componentName}";\n`;

  const propsInterface = sourceFile.getInterface(`${pascalName}Props`) || sourceFile.getTypeAlias(`${pascalName}Props`);
  
  let fieldsStr = "{}";
  let defaultPropsStr = "{}";

  if (propsInterface) {
    const type = propsInterface.getType();
    const props = type.getProperties();
    
    const fields: any = {};
    const defaultProps: any = {};

    props.forEach(prop => {
      const propName = prop.getName();
      const propType = prop.getValueDeclaration()?.getType();
      
      if (!propType) return;
      
      const typeText = propType.getText();
      
      // Heuristics for basic fields
      if (typeText.includes("string")) {
        fields[propName] = { type: "text" };
        defaultProps[propName] = typeText.includes("url") || propName.toLowerCase().includes("image") || propName.toLowerCase().includes("src") 
            ? "https://shadcnblocks.com/placeholder-1.svg" 
            : `${propName} text`;
      } else if (typeText.includes("boolean")) {
        fields[propName] = { 
          type: "radio", 
          options: [{ label: "Yes", value: true }, { label: "No", value: false }] 
        };
        defaultProps[propName] = true;
      } else if (propType.isArray()) {
        fields[propName] = {
           type: "array",
           arrayFields: { title: { type: "text" } } // Simplified
        };
        defaultProps[propName] = [];
      } else if (propType.isObject()) {
        fields[propName] = {
           type: "object",
           objectFields: { text: { type: "text" } } // Simplified
        };
        defaultProps[propName] = {};
      } else {
        fields[propName] = { type: "text" };
        defaultProps[propName] = "";
      }
    });

    fieldsStr = JSON.stringify(fields, null, 2);
    defaultPropsStr = JSON.stringify(defaultProps, null, 2);
  }

  configContent += `
  ${pascalName}: {
    label: "${pascalName}",
    fields: ${fieldsStr},
    defaultProps: ${defaultPropsStr},
    render: (props) => <${pascalName} {...props} />
  },
`;
});

configContent += `};\n`;

fs.writeFileSync(outputFile, exportsContent + configContent);
console.log("Successfully generated configuration.");
