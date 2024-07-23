import { Character } from "./script/Character.js";

let brutos = new Character('Brutos', 'forte', 'faible', 'moyenne');
let xena = new Character('Xena','faible', 'moyenne', 'forte');

console.log(brutos, xena)
while (brutos.hitPoint > 0 && xena.hitPoint>0) {
    console.log(xena.attack(brutos));
    if(brutos.hitPoint>0) {
        console.log(brutos.attack(xena));
    }
}

