var templateListarTipos = `
<div>
<br>
<br>
<hr>
<h2>Listar Tipos</h2>
<div v-if="tipos">  
    <table class="table table-claro table-striped table-hover table-bordered">
        <tr>
            <th><h3>Nombre</h3></th>
            <th><h3>Descripción</h3></th>
            <th></th>
            <th></th>
        </tr>
        <tr v-for="a in tipos">
            <td>{{ a.nombre }}</td>
            <td>{{ a.descripcion }}</td>
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

var componenteListarTipos = Vue.component('listar-tipos', {

    template: templateListarTipos,
    data: function () {

        return {
            tipos: null
        }
    },
    created: function () {

        this.listar()

    },
    methods: {
        eliminar(id) {
            var self = this
            var service = new TipoAnimalService()
            service.eliminar(id)
                .then(function(data) {
                    self.listar()
                    console.log("eliminado correctamente")
                })
        },
        listar() {
            var service = new TipoAnimalService()
            var self = this

            service.listar().then(function (data) {
                self.tipos = data
            })
        },
        redirect(id){
            this.$router.push({'path':'/agregarTipo/'+id})
        }

    }
})