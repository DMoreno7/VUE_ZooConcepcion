var templateAgregar = `
<div>
<br>
<br>
<hr>
<h2> Agregar Animal</h2>
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
                    <label for="">Peso</label>
                </td>

                <td>
                    <input type="number" style="width: 200px" v-model="peso">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="">Fecha Ingreso</label>
                </td>
                <td>
                    <input type="date" style="width: 200px" v-model="fechaIngreso">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="">Tipo Animal</label></td>
                <td>
                    <select v-model="tipoId" style="width: 200px">
                        <option value="">Seleccionar</option>
                        <option v-for="r in tipos" v-bind:value="r.id">{{ r.nombre }}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="">Genero</label>
                </td>
                <td>
                    <select v-model="generoId">
                        <option value="">Seleccionar</option>
                        <option value="0" >Hembra</option>
                        <option value="1" >Macho</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="">Fecha de Nacimiento</label>
                </td>
                <td>
                    <input type="date" v-model="fechaNacimiento">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="">Sector</label>
                </td>
                <td>
                    <select v-model="sectorId">

                        <option value="">Seleccionar</option>
                        <option v-for="r in sectores" v-bind:value="r.id">{{ r.nombre }}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="">Fecha de Defuncion</label>
                </td>
                <td>
                    <input type="date" v-model="fechaDefuncion">
                </td>
            </tr>
        </table>
        <input type="button" value="Guardar" @click="guardar">
        <input type="button" value="Limpiar" @click="limpiar">
    </form>

    <div v-if="mensaje">
        <h3> {{ mensaje }}</h3>
    </div>
</div>
`

var componenteAgregar = Vue.component('agregar-animal', {
    template: templateAgregar,
    data: function () {
        return {
            nombre: "",
            peso: "",
            fechaIngreso: "",
            tipoId: "",
            generoId: "",
            fechaNacimiento: "",
            sectorId: "",
            fechaDefuncion: "",
            mensaje: "",
            'tipos': null,
            'sectores': null
        }
    },
    created:function () {

        var self = this
        var servicioAnimal = new AnimalService()
        if (this.$route.params.id) {

            servicioAnimal.buscar(this.$route.params.id)
                .then(function (data) {
                    self.nombre = data.nombre
                    self.peso = data.peso
                    self.tipoId = data.tipo.id
                    self.generoId = data.generoId
                    self.fechaNacimiento = data.fechaNacimiento
                    self.sectorId = data.sector.id
                    self.fechaIngreso = data.fechaIngreso
                    self.fechaDefuncion = data.fechaDefuncion
                })

        }



        var serviceTipos = new TipoAnimalService()
        serviceTipos.listar().then(function (data) {
            self.tipos = data
        })

        var servicioSector = new SectorAnimalService()
        servicioSector.listar().then(function (data) {
            self.sectores = data
        })



    },
    methods: {
        guardar() {
            var self = this
            var service = new AnimalService()
            var id = this.$route.params.id
            if (this.$route.params.id) {
                service.modificar(
                    id,
                    self.nombre,
                    self.peso,
                    self.fechaIngreso,
                    self.tipoId,
                    self.generoId,
                    self.fechaNacimiento,
                    self.sectorId,
                    self.fechaDefuncion
                ).then(function (data) {

                    self.mensaje = "Modificado Correctamente"
                    self.limpiar()

                })
            }
            else {
                service.guardar(
                    self.nombre,
                    self.peso,
                    self.fechaIngreso,
                    self.tipoId,
                    self.generoId,
                    self.fechaNacimiento,
                    self.sectorId,
                    self.fechaDefuncion
                ).then(function (data) {

                    self.mensaje = "Guardado Correctamente"
                    self.limpiar()
                })
            }
        },

        limpiar() {
            this.nombre = "",
                this.peso = "",
                this.fechaIngreso = "",
                this.tipoId = "",
                this.generoId = "",
                this.fechaNacimiento = "",
                this.sectorId = "",
                this.fechaDefuncion = ""

        }
       
    }
})