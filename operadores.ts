
let produto1: string = "Arroz";
let preco1: number = 25;
let quantidade1: number = 2;

let produto2: string = "Feijão";
let preco2: number = 8;
let quantidade2: number = 3;

let produto3: string = "Leite";
let preco3: number = 5;
let quantidade3: number = 4;

// calcular valor de cada produto
let total1: number = preco1 * quantidade1;
let total2: number = preco2 * quantidade2;
let total3: number = preco3 * quantidade3;

// calcular total da compra
let totalCompra: number = total1 + total2 + total3;

// aplicar desconto de 10%
let desconto: number = totalCompra * 0.10;

// calcular valor final
let valorFinal: number = totalCompra - desconto;

// exibir resultados
console.log("===== SUPERMERCADO =====");

console.log(`Total da compra: R$ ${totalCompra.toFixed(2)}`);
console.log(`Desconto de 10%: R$ ${desconto.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
