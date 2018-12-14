class TipoAnimalService {
    constructor() {

    }

    listar() {
        var url = config.url + "/tipo"
        return fetch(url).then(function (data) {
            return data.json()
        })
    }

    eliminar(id) {
        var url = config.url + "/tipos/" + id

        return fetch(url, {
            'method': 'DELETE'
        })
            .then(function (data) {
                return data.json()
            })
    }

    guardar(nombre, descripcion) {

        var url = config.url + "/tipos"

        var data = {

            "nombre": nombre,
            "descripcion": descripcion           
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

    modificar(id,nombre,descripcion) {

        var url = config.url + "/tipos/" + id

        var data = {

            "nombre": nombre,
            "descripcion": descripcion        
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

    buscar(id){
        var url = config.url + "/tipo/"+id
        return fetch(url).then(function(data){
            return data.json()
        })
   }
}