export let heroTypes = {
    'voleur': {
        'strength':'faible',
        'defense':'forte',
        'initiative':'forte',
        'hitPoint':'faible',
        'type':'voleur',
        'powerName' :['attaque sournoise', 'camouflage'],
        'power': [(hero, adversary) => {
            let attack1 = hero.attack(adversary);
            let attack2 = hero.attack(adversary);
            hero.defense -= 2;
            return attack1 +' & '+attack2;
        }, (...attr)=> {
            console.log('test')
            let param = [...attr]
            param[0].defense = param[0].defenseMax;
            return `${param[0].name} se cache dans les ombres`
        }]
    }
}