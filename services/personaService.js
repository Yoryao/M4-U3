//requiere de models persona y lo adopta en personamodel, con esto puede usar las funciones de persona (guardaUnaPersona)
let personaModel = require('../model/personaModel');

//const { guardarUnaPersona } = require('../controllers/personaController.js');
//const { listarPersonas } = require('../controllers/personaController.js');
//const db = require('./db.js');


//exporta a su vez una persona con el ID, obtenido en el controller (result.insertid)
module.exports = {
    guardarUnaPersona: async(persona) => {
        let id = await personaModel.guardarUnaPersona(persona);
        persona.id = id;
        console.log('Id que traigo de model: ' + id);
        console.log('Id que le pongo a la persona: ' + persona.id);
        return persona;
    },

    /*
    listarPersonas: async() => {
        let listaDePersonas = await personaModel.traerTodaslasPersonas();
        return listaDePersonas;
    },

    traerUnaPersona: async() => {
        let persona = await personaModel.traerUnaPersona(id);
        return persona;
    },

    modificarPersona: async(id, edad, email) => {
        let resultado = await personaModel.modificarPersona(id, edad, email);

        if (resultado == 1) {
            return true;
        } else {
            return false;
        }
    },

    borrarUnapersona: async(id) => {
        let resultado = await personaModel.borrarPersona(id);

        if (resultado == 1) {
            return true;
        } else {
            return false
        }
    }*/
}