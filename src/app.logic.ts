import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const { b: base, l: limit, s: showTable } = yarg;

let outputMessage = '';
const headerMessage = `
=========================================
             Table of ${base}
=========================================\n
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

if (showTable) {
  outputMessage = headerMessage + outputMessage;
  console.log(outputMessage);
}

const outputPath = 'outputs';

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage);
console.log('File created!');
