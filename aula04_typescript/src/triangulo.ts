function trianguloCentralizado (n: number): void {
    let linha = "   "
    let um = "1";
    let frase = um
    for (let i = 1; i <= n; i++) {
        console.log(`${frase}`);
        frase = um+linha+frase+linha+um
    }
}
let n = 5
trianguloCentralizado(n);