import promptSync from "prompt-sync";

const prompt = promptSync();

const nome: string = prompt("digite seu nome");
const idade: number = Number(prompt("digite sua idade: "));

console.log(`Olá, $(nome)! Você tem $(idade) anos.`);