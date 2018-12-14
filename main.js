var routes = [
    {
           'path':'/',
           'component': componenteListarAnimales
           
    },
    {
        'path': '/listar',
        'component': componenteListarAnimales
    },
    {
        'path': '/agregar/:id?',
        'component': componenteAgregar
    },
    {
        'path':'/listarTipos',
        'component': componenteListarTipos
    },
    {
        'path':'/agregarTipo/:id?',
        'component':componenteAgregarTipo
    }
   
]


var router = new VueRouter({
    routes
})


var app = new Vue({

    router
}).$mount('#app')