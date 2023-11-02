import { mkdirSync, writeFile } from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b, l, s } = yarg;

let outputMessage: string = "";
const base: number = b;
const headerMessae: string = `===============================
        Tabla del ${base}
===============================`;

for (let i = 1; i <= l; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = `${headerMessae}\n${outputMessage}`;
if (s) {
    console.log(outputMessage);
} else {
    console.log("Ingresa el parametro -s para ver la tabla en consola");
}

const outputPath: string = "outputs";
mkdirSync(outputPath, { recursive: true });
writeFile(`${outputPath}/tabla-${base}.txt`, outputMessage, (error) => {
    if (error) throw error;
    console.log("The file has been saved!");
});
