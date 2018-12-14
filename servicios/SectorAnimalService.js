class SectorAnimalService{
    constructor(){

    }

    listar(){
        var url = config.url + "/sector"
        return fetch(url).then(function(data){
            return data.json()
        })
    }
}