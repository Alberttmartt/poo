class pokedex {
   
    getinfo(name) {
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then(data => {
            const [DATA = null] = data;
            const MESSAGE = DATA || `El pokemón ${name} no existe`;           
            
             console.log(MESSAGE);         
        })
    }
}

const POKEDEX =new pokedex();
POKEDEX.getinfo("charmander");
alert("se bienvenido papi chulo");
    ////desestructuración
/* const lista = [`dragon ball`,`code geass`,`sailor moon`];
const [anime1, anime2, anime3] = lista;
console.log(anime2, anime3);
            
             */
            
/* const dragon= lista[0,1];
 const dragon1= lista[1];
 const dragon2= lista[2];
 const dragon3= lista[3];
 const dragon4= lista[4]; */

            
/*  const dragon=lista [0];
 const dragon=lista [1];
 const dragon=lista [2]; */
            
/* console.log(dragon, code); */
/* console.log(data); */
/* const [DATA = null] = data;
const MESSAGE = DATA || `El pokemón ${name} no existe`;
 */
            
            /* console.log(MESSAGE); */
 /*        })
    }
}
 */
/* const POKEDEX =new pokedex();
POKEDEX.getinfo("charmander") */