var templateListarAnimales = `
<div>
<br>
<br>
<hr>
<h2>Listadar Animales</h2>
<div v-if="animales">  
    <table class="table table-claro table-striped table-hover table-bordered">
        <tr>
            <th><h3>Nombre Animal</h3></th>
            <th></th>
            <th></th>
        </tr>
        <tr v-for="a in animales">
            <td>{{ a.nombre }}</td>
            <td><a href="#" @click.prevent="eliminar(a.id)">Eliminar</a></td>
            <td><a href="#" @click.prevent="redirect(a.id)">Modificar</a></td>
        </tr>        
    </table>
  </div>  
  <div v-else>
  <img src="Styles/UbTh.gif" alt="">
  </div>
</div>
`

var componenteListarAnimales = Vue.component('listar-animales', {

    template: templateListarAnimales,
    data: function () {

        return {
            animales: null
        }
    },
    created: function () {

        this.listar()

    },
    methods: {
        eliminar(id) {
            var self = this
            var service = new AnimalService()
            service.eliminar(id)
                .then(function(data) {
                    self.listar()
                    console.log("eliminado correctamente")
                })
        },
        listar() {
            var service = new AnimalService()
            var self = this

            service.listar().then(function (data) {
                self.animales = data
            })
        },
        redirect(id){
            this.$router.push({'path':'/agregar/'+id})
        }

    }
})