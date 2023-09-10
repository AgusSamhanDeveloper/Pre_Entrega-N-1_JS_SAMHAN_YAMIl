//PROYECTO CALCULADORA FUTBOLERA

//Declaracion de funciones

//FUNCION CALCULADORA DE PUNTOS
    function consul_datos(){
        let nombre_jugador = prompt("Ingrese el nombre del jugador")
        let nombre_equipo = prompt(`Ingrese el nombre del equipo en el cual ${nombre_jugador} juega`)
        let partidos_jugados = prompt(`Ingrese la cantidad de partidos que jugo ${nombre_jugador} esta temporada en el ${nombre_equipo}`)
        let goles = prompt(`Ingrese la cantidad de goles que ${nombre_jugador} anoto esta temporada en ${partidos_jugados} partidos jugados para el ${nombre_equipo}`)
        let promedio = goles/partidos_jugados
        alert(`El promedio de goles por partido de ${nombre_jugador} esta temporada es de ${promedio}`)
                //Casos posibles que se le mostraran al usuario segun el promedio que haya sacado
        //Promedio menor a 0.5
        alert(`El promedio de gol de ${nombre_jugador} del ${nombre_equipo}, que anoto ${goles} goles en ${partidos_jugados} partidos jugados, es de ${promedio} goles por partido`)
        if(promedio < 0.5){
            alert(`La temporada de ${nombre_jugador} ha sido irregular`)
        }
        //Promedio mayor o igual a 0.5 y menor o igual a 1
        if(promedio >= 0.5 && promedio <= 1){
            alert(`La temporada de ${nombre_jugador} ha sido regular`)
        }
        //Promedio mayor a 1
        if(promedio > 1){
            alert(`La temporada de ${nombre_jugador} ha sido sobresaliente, probablemente sera candidato a la bota de oro`)
        }
    }

//FUNCION CALCULADORA DE PUNTOS
    function calc_pts(){
        let nombre_equipo = prompt("Ingrese el nombre del equipo del cual desea calcular su cantidad de puntos conseguidos esta temporada")
        let victorias = parseInt(prompt(`Ingrese la cantidad de victorias conseguidas por ${nombre_equipo}`))
        let empates = parseInt(prompt(`Ingrese la cantidad de empates conseguidos por ${nombre_equipo}`))
        let derrotas = parseInt(prompt(`Ingrese la cantidad de derrotas conseguidas por ${nombre_equipo}`))
        let pts_vic = victorias*3
        console.log(pts_vic)
        let pts_emp = empates*1
        console.log(pts_emp)
        let pts_derr = derrotas*0
        console.log(pts_derr)
        let part_totales= victorias + derrotas + empates
        let pts_totales = parseInt (pts_vic + pts_emp + pts_derr)
        console.log(pts_totales)
        if(part_totales != 38){
            alert("Usted ingreso una cantidad total de partidos erronea, la cantidad total correcta es de 38 partidos")
        }
        else if(part_totales == 38){
        alert(`La cantidad de puntos conseguidos por el ${nombre_equipo} es de ${pts_totales} puntos`)
        }
                //Diferentes casos que se le muestran al usuario, segun los datos que haya ingresado
        //Cantidad de puntos finales menor o igual a 15
        if(pts_totales <= 15){
            alert(`Que mala temporada, el ${nombre_equipo} tiene muchas posibilidades de descender`)
        }
        //Cantidad de puntos finales mayor a 15 y menor o igual a 30
        else if(pts_totales > 15 && pts_totales <=30){
            alert(`Una temporada bastante mala pero el ${nombre_equipo} se salva del descenso`)
        }
        //Cantidad de puntos finales mayor a 30 y menor o igual a 50
        else if(pts_totales > 30 && pts_totales <=50){
            alert(`Temporada regular del ${nombre_equipo} pero no alcanza para entrar a la competiciones europeas`)
        }
        //Cantidad de puntos finales mayor a 50 y menor o igual a 70
        else if(pts_totales > 50 && pts_totales <=70){
            alert(`Buena temporada del ${nombre_equipo} formara parte de las competiciones europeas el año que viene`)
        }
        //Cantidad de puntos finales mayor a 70
        else{ 
            alert(`Gran temporada del ${nombre_equipo}, tiene todas las posibilidades de ser campeon de su liga`)
        }
    }
    

//FUNCION CONSTRUCTORA PLAYER

class Player{
    constructor(id, nombre, club, goles, asistencias, partidos){
    //Propiedades
        this._id = id;
        this._nombre = nombre;
        this._club = club; 
        this._goles = goles;
        this._asistencias = asistencias;
        this._partidos = partidos;
    }
    //METODOS
    mostrarinfoJugador(){
        return `${this._nombre} cuenta con ${this._goles} goles y ${this._asistencias} asistencias en ${this._partidos} partidos. `
    }
    max_gole(){}
    max_prom_gol(){}
    max_prom_asist(){}
}

//OBJETOS PREDETERMINADOS

let player1 = new Player(1,`Jude Bellingham`,`Real Madrid`, 25, 15, 20);
let player2 = new Player(2,`Erling Halland`,`Man. City`, 50, 10, 30);
let player3 = new Player(3,`Kylian Mbappe`,`Paris Saint Germain`, 35, 5, 36);
let player4 = new Player(4,`Lionel Messi`,`Inter Miami`, 30, 5, 36);
let player5 = new Player(5,`Kevin De Bruyne`,`Man. City`, 32, 10, 30);

const tabla = []
tabla.push(player1,player2,player3,player4,player5)

//FUNCION AGREGAR JUGADOR

    function agregarJugador(){
        let _nombre = prompt("Ingrese el nombre del jugador")
        let _club = prompt("Ingrese el nombre del club")
        let _goles = parseInt(prompt(`Ingrese la cantidad de goles anotados por ${_nombre}`))
        let _asistencias = parseInt(prompt(`Ingrese la cantidad de asistencias dadas por el jugador ${_nombre}`))
        let _partidos = parseInt(prompt(`Ingrese la cantidad de partidos jugados por ${_nombre}`))
        const agregarJugador = new Player(tabla.length+1,_nombre, _club, _goles, _asistencias, _partidos)
        tabla.push(agregarJugador)
    }

//FUNCION ELIMINAR JUGADOR

function borrarJugador(array){
    listaJugadores(array)
    let idEliminar = parseInt(prompt("Observa la lista de jugadores y selecciona ID a eliminar"))
    let coincidencia = false
    for(let elem of array){
        if(elem._id == idEliminar){
           let indice = array.indexOf(elem)
                array.splice(indice, 1)
                listaJugadores(array)
        }
    }
    if(!coincidencia){
        console.log(`El id ${idEliminar} no coincide con ningun jugador de nuestra lista, por lo tanto, no se ha podido eliminar`)
    }
}

//FUNCION VER LISTA DE JUGADORES

function listaJugadores(array){
    console.log("Lista de Jugadores:")
    for(let player of array){
        console.log(player._id, player._nombre, player._club, player._goles, player._asistencias, player._partidos)
    }
}

//FUNCION PARA BUSCAR POR NOMBRE DE JUGADOR
function buscarJugador(array){
    let jugadorBuscado = prompt("Ingresa el nombre del jugador que buscas")
    let buscador = array.find(
        (jugador) =>{ return jugador._nombre.toLowerCase() == jugadorBuscado.toLowerCase()}
        )
        if(buscador == undefined){
            console.log(`El jugador ${jugadorBuscado} no se ha encontrado`)
        }else{
            console.log(buscador)
        }
}

//FUNCION PARA BUSCAR JUGADORES POR EQUIPO

function buscarPorEquipo(array){
    let equipoBuscado = prompt("Ingrese el nombre del club de los jugadores que desea buscar")
    let buscador = array.filter(
        (jugador) => jugador._club.toLowerCase() == equipoBuscado.toLowerCase()
    )
    if(buscador.length == 0){
        console.log(`No hay jugadores del ${equipoBuscado} registrados`)
    }else{
    listaJugadores(buscador) 
}
}

//FUNCION PARA ORDENAR DE MAYOR A MENOR CANT DE GOLES
function maximoGoleador(array){
    let arraymaximoGoleador = array.concat()
    arraymaximoGoleador.sort(
        (par1,par2) => par1._goles - par2._goles
    )
    listaJugadores(arraymaximoGoleador)
}

//FUNCION PARA ORDENAR DE MAYOR A MENOR CANT DE ASISTENCIAS
function maximoAsistente(array){
    let arraymaximoAsistente = array.concat()
    arraymaximoAsistente.sort(
        (par1,par2) => par1._asistencias - par2._asistencias
    )
    listaJugadores(arraymaximoAsistente)
}

//FUNCION PARA ORDENAR DE MAYOR A MENOR CANT DE PARTIDOS
function masPartidosJugados(array){
    let arraymasPartidosJugados = array.concat()
    arraymasPartidosJugados.sort(
        (par1,par2) => par1._partidos - par2._partidos
    )
    listaJugadores(arraymasPartidosJugados)
}


        //MENU do while y switch 
let salirMenu = false

do{
let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
   1 - Promedio de goles por partido
   2 - Calcular puntos
   3 - Maximos Goleadores
   4 - Maximos Asistidores
   5 - Mas Partidos Jugados
   6 - Agregar Jugador
   7 - Borrar Jugador
   8 - Ver lista de jugadores
   9 - Buscar Jugador por Nombre
   10 - Buscar Jugadores por Equipo
   0 - Salir del menu`))
   switch(opcionIngresada){
      case 1:
      consul_datos()
         
      break
      case 2:
        calc_pts()
      break
      case 3:
        maximoGoleador(tabla)
      break         
      case 4:
        maximoAsistente(tabla)
      break         
      case 5:
        masPartidosJugados(tabla)
      break         
      case 6:
        agregarJugador()
      break         
      case 7:
          borrarJugador(tabla)
          break         
          case 8:
              listaJugadores(tabla)
              break         
          case 9:
              buscarJugador(tabla)
              break         
          case 10:
            buscarPorEquipo(tabla)
              break         
      case 0:
         console.log(`Gracias por utilizar nuestra app. Saludos!`)
         salirMenu = true
      break   
      default:
         console.log("Opción no válida, ingrese alguna presente en el menu")
      break
   }
}while(!salirMenu)
