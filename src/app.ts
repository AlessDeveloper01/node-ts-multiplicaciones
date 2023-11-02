
import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

console.clear();
// console.log(yarg.b);

// ! Funcion anonima autoinvocada - IIFE
( async() => {
    await main();
})();

async function main() {
    const { b, l, s, n, d } = yarg;

    ServerApp.run({base: b, limit: l, show: s, name: n, destination: d});
}