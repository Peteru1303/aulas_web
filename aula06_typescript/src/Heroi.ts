import { Type } from "typescript";

type Categoria = "Espadachim"|"Mago"|"Arqueiro"

export class Heroi{
    nome: string;
    categoria: Categoria;
    ataque: number;
    recurso: number = 0;
    custo: number;
    //arma: string;

    constructor(nome: string,
        categoria: Categoria,
        ataque: number,
        custo: number,
        //arma: string
        ){
    this.nome = nome;
    this.categoria = categoria;
    this.ataque = ataque;
    this.custo = custo;
    if(categoria = "Espadachim")
    {this.recurso = 50;}
    else if(categoria = "Mago")
    {this.recurso = 40;}
    else if(categoria = "Arqueiro")
    {this.recurso = 10;}
    //this.arma = arma;
    }

    atacar():void{
        if((this.recurso -= this.custo) >= 0){
        console.log (`Ataque de ${this.nome} bem sucedido, causando ${this.ataque} de dano e restando ${this.recurso}`);
        this.recurso -= this.custo;}
        else
        console.log (`Ataque de ${this.nome} falhou por falta de recurso`);
    }

}