const axios = require('axios')

const url= 'https://rickandmortyapi.com/api/character'

const traerPersonajes = async() => {
    try{  
        const response = await axios.get(url)
        let personajes = response.data.results

        personajes.forEach(personaje => {
            console.log("Nombre:"+personaje.name) 
            console.log("Genero::"+personaje.gender) 
            console.log("Especie:"+personaje.species) 
            console.log("-------------")
        });

    }
    catch(error){
        console.log(error)
    }
  
}

traerPersonajes()