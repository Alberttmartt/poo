class pokemon {
    /////atributos////
    name="";
    type="";
    evolutions= [];
    ////rellenar propiedades /// se puede definir las propiedades??
    constructor (name, type, evolutions){
        this.name = name;
        this.name = type;
        this.evolutions = evolutions;
    }

    attack() {
        return `${this.name}, esta atacando`;
    }

    evolve( evolution = 0) {
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puede evolucionar";

        if(EVOLVE) {

         message = `${this.name} esta evolucionando a ${EVOLVE}`;
         this.name=EVOLVE;
        }
    
        return message;
    }
}

const charmander = new pokemon(`charmander`,`fuego`,[`charmaleon`, `charizad`]); 
const squirtle = new pokemon (`squirtle`,`agua`,[`wartotle`, `blastoise`]); 
console.log(charmander.name);
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.name);


