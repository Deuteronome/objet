import { Character } from "./Character.js";
import { Hero } from "./Hero.js";


export class Combat {
    room
    hero;
    character2;
    heroAction
 
    /**
     * 
     * @param {HTMLElement} room
     * @param {Hero} hero 
     * @param {Character} character2 
     */
    constructor(room, hero, character2){
        this.room = room;
        this.hero = hero;
        this.character2 = character2;
    }   

    /**
     *
     */
    display() {
        this.room.innerHTML = '';
        this.room.style.display='flex';
        this.room.style.flexDirection='column';
        this.room.style.justifyContent='space-around';
        this.room.style.alignItems='center';
        this.room.style.padding='2%';

        this.displayZone=document.createElement('div');
        this.displayZone.style.width='90%';
        this.displayZone.style.backgroundColor='grey';
        this.room.style.padding='2%';

        this.room.appendChild(this.displayZone);

        this.interfaceZone = document.createElement('div');
        this.interfaceZone.setAttribute('disabled', 'true')
        this.interfaceZone.style.marginTop = '5%';
        this.interfaceZone.style.width='90%';
        this.room.appendChild(this.interfaceZone)

        this.attackButton = document.createElement('button');
        this.attackButton.setAttribute('class', 'action-button');
        this.attackButton.setAttribute('disabled', 'true');
        this.attackButton.innerHTML = 'attaquer';
        this.attackButton.addEventListener('click', ()=>{
            
            let message = document.createElement('p');
            message.innerHTML =this.hero.attack(this.character2);;
            this.displayZone.appendChild(message);
            this.IATurn();
        })
        this.interfaceZone.appendChild(this.attackButton);
        
        

        this.powerButton = [];
        this.powerButton.push(this.attackButton);

        for(let i = 0; i<this.hero.power.length; i++) {
            let powerButton = document.createElement('button');
            this.powerButton.push(powerButton);
            powerButton.setAttribute('class', 'action-button');
            powerButton.setAttribute('disabled', 'true');
            powerButton.innerHTML = this.hero.powerName[i];
           
            
            this.interfaceZone.appendChild(powerButton);
        }



        
        
    }

    /**
     * 
     */
    heroTurn() {
        setTimeout(()=>{
            let message = document.createElement('p');
                message.innerHTML = `${this.hero.name} attaque`
                this.displayZone.appendChild(message);
            for(let i=0; i<this.powerButton.length; i++) {
                this.powerButton[i].removeAttribute('disabled');                
            }
        }, 500)
    }

    IATurn() {
        console.log(this.hero, this.character2);
        for(let i=0; i<this.powerButton.length; i++) {
            this.powerButton[i].setAttribute('disabled', 'true');          
        }
        setTimeout(()=>{
            let message = document.createElement('p');
            message.innerHTML = `${this.character2.name} attaque`
            this.displayZone.appendChild(message);
            setTimeout(()=>{
                this.character2.attack(this.hero);
                this.heroTurn();
            },1000)
        },500)
        
    }

    fight() {

        this.display();
        let firstPlayer;
        (this.hero.initiative>this.character2.initiative)?firstPlayer = this.hero:firstPlayer = this.character2;
        let message = document.createElement('p');
        message.innerHTML = `${firstPlayer.name} commence le combat`;
        this.displayZone.appendChild(message);

        this.heroTurn();

        //(this.hero.initiative>this.character2.initiative)?this.heroTurn():this.IATurn();

        /*while (this.hero.hitPoint > 0 && this.character2.hitPoint>0) {

            message = document.createElement('p');
            message.innerHTML = this.character2.attack(this.hero);
            this.displayZone.appendChild(message);
            
            if(this.hero.hitPoint>0) {

                message = document.createElement('p');
                message.innerHTML = this.hero.attack(this.character2);
                this.displayZone.appendChild(message);
                
            }
        }*/
    }

}