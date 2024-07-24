import { Character } from "./Character.js";

export class Hero extends Character {
    type
    power = [];
    powerName = [];

    constructor(nom, parameter) {
        
        super(nom, parameter);
        
        this.type = parameter['type'];

        this.powerName = parameter['powerName'];
        this.power = parameter['power'];

        switch (parameter['type']) {
            case 'voleur':
                this.defenseMax = this.defense;
                break;
            default :
                break;
        }
            
    }    
}