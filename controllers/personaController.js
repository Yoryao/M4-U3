let personaService = require('../services/personaService');

module.exports = {
    guardarUnaPersona: async(persona) => {
        let personaNueva = await personaService.guardarUnaPersona(persona);
        return personaNueva;
    },
    /*
        listarPersonas: async() => {

            let listado = await personaService.listarPersonas();
            return listado;
        },
      
                traerUnaPersona: async(id) => {
                    let persona = await personaService.traerUnaPersona(id);
                    return persona;
                },

                modificarPersona: async(id, edad, mail) => {
                    let persona = null;
                    let resultado = await personaService.modificarPersona(id, mail, edad);

                    if (resultado) {
                        persona = await persona.personaService.traerUnaPersona(id);
                    }

                    return persona;
                },
            */
}