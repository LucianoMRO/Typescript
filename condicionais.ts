
let cinema: string = "Cinema";
let cliente: string = "Luciano";
let idade: number = 18;
let ingresso: boolean = true;

console.log("=== ENTRADA DO CINEMA ===");

if (idade >= 18 && ingresso === true) {
    console.log("Entrada permitida!");

} else if (idade < 18) {
    console.log("Entrada negada! Idade insuficiente.");

} else {
    console.log("Entrada negada! Ingresso inválido.");
}
