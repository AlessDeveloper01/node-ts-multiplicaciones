import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(process.argv)
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Base de la tabla de multiplicar",
    })
    .option("l", {
        alias: "limit",
        type: "number",
        default: 10,
        describe: "Limite de la tabla de multiplicar",
    })
    .option("s", {
        alias: "show",
        type: "boolean",
        default: false,
        describe: "Muestra la tabla de multiplicar en consola",
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'Nombre del archivo'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'Directorio donde se guardara el archivo'
    })
    .check((argv, options) => {
        if (argv.b < 1) throw "Error: La base debe ser mayor a 0";
        return true;
    })
    .parseSync();
