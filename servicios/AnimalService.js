class AnimalService {

    constructor() {

    }

    listar() {
        var url = config.url + "/animales"

        return fetch(url)
            .then(function (data) {
                return data.json()
            })
    }

    eliminar(id) {
        var url = config.url + "/animales/" + id

        return fetch(url, {
            'method': 'DELETE'
        })
            .then(function (data) {
                return data.json()
            })
    }

    guardar(nombre, peso, fechaIngreso, tipoId, generoId, fechaNacimiento, sectorId, fechaDefuncion) {

        var url = config.url + "/animales"

        var data = {

            "nombre": nombre,
            "peso": peso,
            "fechaIngreso": fechaIngreso,
            "tipo": {
                "id": tipoId
            },
            "genero": generoId,
            "fechaNacimiento": fechaNacimiento,
            "sector": {
                "id": sectorId
            },
            "fechaDefuncion": fechaDefuncion
        }

        return fetch(url,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(function(data){
            return data.json()
        })
    }

    buscar(id){
         var url = config.url + "/animal/"+id
         return fetch(url).then(function(data){
             return data.json()
         })
    }

    modificar(id,nombre, peso, fechaIngreso, tipoId, generoId, fechaNacimiento, sectorId, fechaDefuncion) {

        var url = config.url + "/animales/"+id

        var data = {

           
            "nombre": nombre,
            "peso": peso,
            "fechaIngreso": fechaIngreso,
            "tipo": {
                "id": tipoId
            },
            "genero": generoId,
            "fechaNacimiento": fechaNacimiento,
            "sector": {
                "id": sectorId
            },
            "fechaDefuncion": fechaDefuncion
        }

        return fetch(url,{
            method:'PUT',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(function(data){
            return data.json()
        })
    }


}