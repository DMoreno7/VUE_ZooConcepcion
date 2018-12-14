var templateAgregarTipo = `
<div>
<br>
<br>
<hr>
<h2> Agregar Tipo de Animal</h2>
    <form>
        <table class="table table-claro table-striped table-hover table-bordered">
            <tr>
                <td>
                    <label for="">Nombre</label>
                </td>
                <td>
                    <input type="text" style="width: 200px" v-model="nombre">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="">Descripción</label>
                </td>

                <td>
                    <input type="text" style="width: 200px" v-model="descripcion">
                </td>
            </tr>
        </table>
        <input type="button" value="Guardar" @click="guardar">
    </form>

    <div v-id="mensaje">
        <h3> {{ mensaje }}</h3>
    </div>
</div>
`
var componenteAgregarTipo = Vue.component('agregar-tipo', {

    template: templateAgregarTipo,
    data: function () {
        return {
            nombre: "",
            descripcion: "",
            mensaje: ""
        }
    },
    created: function () {
        var self = this
        var servicioTipo = new TipoAnimalService()

        if (this.$route.params.id) {
            servicioTipo.buscar(this.$route.params.id)
                .then(function (data) {
                    self.nombre = data.nombre
                    self.descripcion = data.descripcion

                })
        }

    },
    methods:
    {
        guardar() {
            var self = this
            var service = new TipoAnimalService()
            var id = this.$route.params.id
            if (this.$route.params.id) {

                service.modificar(id,self.nombre, self.descripcion)
                    .then(function (data) {
                        self.mensaje = "Modificado Correctamente"
                        self.limpiar()
                    })

            }
            else {
                service.guardar(self.nombre, self.descripcion)
                    .then(function (data) {
                        self.mensaje = "Guardado Correctamente"
                        self.limpiar()
                    })

            }


        },

        limpiar() {
            this.nombre = "",
                this.descripcion = ""
        }
    }

})
