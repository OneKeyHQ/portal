const fs = require('fs');

const scriptPath = (p) => path.join(__dirname, p);
const path = require('path');

async function main() {
  const IconComponentPath = '../src/components/base/Icon';

  // read all icon files from './src/components/base/Icon/images
  const files = fs.readdirSync(
    scriptPath('../src/components/base/Icon/images'),
  );

  // create these component from svg files
  // export { ReactComponent as MenuIcon } from './MenuIcon.svg';
  // export { default as MenuIconInline } from './MenuIcon.svg';

  const codes = [];
  const componentNames = [];

  files.forEach((filePath) => {
    const fileName = filePath.split('.')[0];
    const fileExt = filePath.split('.')[1];

    if (fileExt === 'svg') {
      // remove all svg file #101111 color, replace with `currentColor`
      const fileContent = fs.readFileSync(
        scriptPath(`${IconComponentPath}/images/${filePath}`),
        'utf8',
      );

      const newFileContent = fileContent.replace(/#101111/g, 'currentColor');

      // save to file
      fs.writeFileSync(
        scriptPath(`${IconComponentPath}/images/${filePath}`),
        newFileContent,
      );

      // format the file name to PascalCase and add 'Icon' to the end
      const componentName = fileName
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
        .concat('Icon');

      componentNames.push(componentName);

      const componentNameInline = componentName.replace('Icon', 'IconInline');

      codes.push(
        `export { ReactComponent as ${componentName} } from './images/${filePath}';`,
      );

      codes.push(
        `export { default as ${componentNameInline} } from './images/${filePath}';`,
      );
    }
  });

  // write the codes to './src/components/base/Icon/IconAutoGenerate.ts'
  fs.writeFileSync(
    scriptPath(`${IconComponentPath}/IconAutoGenerate.ts`),
    `${codes.join('\n')}\n`,
  );

  // write the component names to './src/components/base/Icon/IconTypes.ts'
  fs.writeFileSync(
    scriptPath(`${IconComponentPath}/IconTypes.ts`),
    `export type IconTypes =\n  ${componentNames
      .map((name) => `| '${name}'`)
      .join('\n  ')};\n`,
  );
}

try {
  main();
} catch (e) {
  console.log(e);
}
