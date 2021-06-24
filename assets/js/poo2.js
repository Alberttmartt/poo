class pokemon {
    #name="";
    #type="";
    #evolutions= [];
   
    constructor (name, type, evolutions){
        this.name = name;
        this.name = type;
        this.evolutions = evolutions;
    }
    
    set name(value){
        this.#name = value;
    }

    set type(value) {
        this.#type = value;
    }
    
    set evolutions(value) {
        this.#evolutions = value;
    }

    get name() {
        return this.#name
    }

    get type() {
        return this.#type
    }

    get evolution() {
        return this.#evolutions
    }

    attack() {
        return `${this.#name}, esta atacando`;
    }

    evolve( evolution = 0) {
        const EVOLVE = this.#evolutions[evolution] || "";
        let message = "No puede evolucionar";

        
        
        if(EVOLVE) {

         message = `${this.#name} esta evolucionando a ${EVOLVE}`;
         this.#name=EVOLVE;
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
charmander.name= `pikachu`;
console.log(charmander.name);

/* 
const animales = [`perro`,`gatos`, `Lobos`];

    animales.forEach(animal => {
        console.log(animal);
    }) */