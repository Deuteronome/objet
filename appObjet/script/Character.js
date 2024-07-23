export class Character {
    name;
    strength;
    defense;
    hitPoint;

    constructor(name="Jean-Jacques", strength="moyenne", defense="moyenne", hitPoint="moyenne") {
        this.name = name;

        switch(strength) {
            case 'faible':
                this.strength = 4 + Math.floor(Math.random()*4 +1);
                break;
            case 'moyenne':
                this.strength = 6 + Math.floor(Math.random()*6 +1);
                break;
            case 'forte':
                this.strength = 8 + Math.floor(Math.random()*8 +1);
                break;
            default :
                this.strength = 0;

        }

        switch(defense) {
            case 'faible':
                this.defense = 3 + Math.floor(Math.random()*3);
                break;
            case 'moyenne':
                this.defense = 5 + Math.floor(Math.random()*5);
                break;
            case 'forte':
                this.defense = 7 + Math.floor(Math.random()*7);
                break;
            default :
                this.defense = 0;
        }

        switch(hitPoint) {
            case 'faible':
                this.hitPoint = 6 + Math.floor(Math.random()*5);
                break;
            case 'moyenne':
                this.hitPoint = 8 + Math.floor(Math.random()*10);
                break;
            case 'forte':
                this.hitPoint = 10 + Math.floor(Math.random()*15);
                break;
            default : 
            this.hitPoint = 1;
        }
    }   
        /**
         * 
         * @param {Character} adversary 
         */
        attack(adversary) {
            let attackStrength = this.strength - adversary.defense;
            (attackStrength<0)?attackStrength=0:null;

            return adversary.getHurt(attackStrength);
        }

        /**
         * 
         * @param {number} attackStrength - défini par la fonction attack d'un autre Character 
         */
        getHurt(attackStrength) {
            if(attackStrength == 0) {
                return `${this.name} arrète le coup en ricanant!`
            } else {
                
                this.hitPoint = this.hitPoint - attackStrength;
                if (this.hitPoint>0) {
                    return `${this.name} se mange une mandale mais se relève et retourne au combat` 
                } else {
                    return `c'était le coup de trop, ${this.name} s'écroule pitoyablement`
                }
            }
        }
       
}
