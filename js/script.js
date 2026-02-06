// Encabezado
const ap1 = Vue.createApp({
    data(){
        return {
            titulo: 'Museo Warren',
            nombre: 'Oscar.', 
            subtitulo: 'Objetos más Malditos'    
        }
    }
});
ap1.mount('#encabezado');

// Nivel de riesgo por tocar
const ap2 = Vue.createApp({
  data() {
    return {
      minimo: 5,
      objetos: [
        {nombre: "Desconocido", tipo: "Maldito", puntuacion: 7, descripcion: "Objeto de riesgo moderado, se recomienda precaución"},
        {nombre: "Robert", tipo: "Maldito", puntuacion: 8, descripcion: "Puede causar sucesos y dar mala vibra, pero todo bien"},
        {nombre: "Vestido", tipo: "Maldito", puntuacion: 9, descripcion: "Bonito vestido, pero no lo quieres para tu boda, ni para ningun lugar"},
        {nombre: "Anabelle", tipo: "Maldito", puntuacion: 10, descripcion: "Si lo tocas ya valiste"}
      ]
    };
  },
  computed: {
    peoresObjetos() {
      return this.objetos.filter(objeto => objeto.puntuacion >= this.minimo);
    }
  }
});
ap2.mount('#articulo1');

// Validación de las cadenas
const ap3 = Vue.createApp({
    data(){
      return{
        objetos:[
          {nombre:"Desconocido", tipo:"Maldito", puntuacion:7, fecha:'Desconocido'},
          {nombre:"Robert", tipo:"Maldito", puntuacion:8, fecha:'1904'},
          {nombre:"Vestido", tipo:"Maldito", puntuacion:9, fecha:'1914'},
          {nombre:"Anabelle", tipo:"Maldito", puntuacion:10, fecha:'1970'}
        ],
        buscar:'',
      }
    },
    computed:{
      objetosEncontrados(){
        return this.objetos.filter(objeto => objeto.nombre.includes(this.buscar))
      },
      objetosCoinciden(){
        return this.objetosEncontrados.length;
      },
      objetosOrdenadas(){
        return this.objetos.sort((a,b)=>b.fecha.localeCompare(a.fecha))
      }
    }
});
ap3.mount('#articulo2');

// El footer
const ap4 = Vue.createApp({
  data(){
     return {        
         nombre: 'Alejandro.',
         mensaje:'Hoy es: '+new Date().toLocaleString(),
         bandera:true, 
         contador:0,
    }
  },
  methods: {
      incremento() {
        this.contador++;
        return this.contador;
      }
  },
});
ap4.mount('#divfooter');
