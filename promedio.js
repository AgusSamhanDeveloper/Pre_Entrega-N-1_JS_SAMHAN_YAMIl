    let salirMenu = false

//Saludo al usuario. Presentacion de la herramienta
    alert("!Hola Compañero! Disfruta de esta herramienta diseñada para amantes del futbol que desean saber acerca de su jugador o equipo favorito")
    //Menu Interactivo
    do{
    let opcionIngresada = parseInt(prompt(`Ingresa la opcion que deseas
       1 -  Calcular promedio de goles por partido (jugador)
       2 -  Calcular puntos por temporada (club)
       0 - Salir del menu`))
       //Casos posibles del menu
       switch(opcionIngresada){
          case 1:
            //Se le da la bienvenida, al usuario, a la herramienta especifica
            alert("Bienvenido a la calculadora de promedio de gol por partido")
            //Se solicitan las variables necesarias
            //Nombre del jugador
            let nombre_jugador = prompt("Ingrese nombre del jugador del cual desea calcular su promedio de gol")
            console.log(nombre_jugador)
            //Nombre del equipo
            let nombre_equipo = prompt(`Ingrese el nombre del equipo de ${nombre_jugador}`)
            console.log(nombre_equipo)
            //Cantidad de partidos jugados
            let partidos_jugados = prompt(`Ingrese la cantidad de partidos jugados por ${nombre_jugador} del ${nombre_equipo}`)
            console.log(partidos_jugados)
            //Cantidad de goles anotados
            let goles = prompt(`Ingrese la cantidad de goles anotados por ${nombre_jugador} del ${nombre_equipo} en ${partidos_jugados} partidos`)
            console.log(goles)
            //Invocacion de funcion calculadora de promedio
            calc_prom()


            //Declaracion de funciones
    //Funcion calculadora de promedio de gol
    function calc_prom(){
        //Se declara la variable promedio y sus valores
        let promedio = goles/partidos_jugados
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
          
             
          break
          case 2:
            //Bienvenida al usuario a la funcion especifica
            alert("Bienvenido a la calculadora de puntos por temporada de tu equipo favorito")
            //Se le solicitan las variables necesarias
            //Nombre del club
            let nombre_club = prompt("Ingrese nombre del equipo, del cual desea saber sus puntos conseguidos")
            //Cantidad de victorias
    let victorias = parseInt(prompt(`Ingrese la cantidad de victorias del ${nombre_club}`))
    //Cantidad de empates
    let empates = parseInt(prompt(`Ingrese la cantidad de empates del ${nombre_club}`))
    //Cantidad de derrotas
    let derrotas = parseInt(prompt(`Ingrese la cantidad de derrotas del ${nombre_club}`))
    //Devolucion de datos
    console.log(`El club ${nombre_club} ha conseguido un total de ${victorias} victorias, ${empates} empates y ${derrotas} derrotas`)
        //En esta seccion se calcula la cantidad de partidos que ingreso el usuario para asi controlar que la misma sea correcta, se establece como unico valor permitido 38 partidos
        let total_partidos = victorias + derrotas + empates
        //Casos Posibles
        //Caso: Ingreso una cantidad de partidos incorrecta
        if (total_partidos < 38 || total_partidos >38){
            alert("Usted a ingresado una cantidad de partidos incorrecta a la minima. Ingrese los datos de nuevo, teniendo en cuenta que la cantidad minima de partidos es 38")
        }
        //Caso: Ingresa la cantidad de partidos correcta
        else (total_partidos == 38);{
            pts_conseguidos()
            //Funcion calculadora de puntos conseguidos por el equipo elegido
    function pts_conseguidos(){
        //Declaracion de variables y sus valores
        let pts_victorias = victorias*3
        let pts_empates = empates*1
        let pts_derrotas = derrotas*0
        let pts_totales = pts_victorias + pts_empates + pts_derrotas
        //Diferentes casos que se le muestran al usuario, segun los datos que haya ingresado
        //Cantidad de puntos finales menor o igual a 15
        alert(`Habiendo conseguido un total de ${victorias} victorias, ${empates} empates y ${derrotas} derrotas.La cantidad de puntos conseguidos por el ${nombre_club} es de ${pts_totales} puntos`)
        if(pts_totales <= 15){
            alert(`Que mala temporada, el ${nombre_club} tiene muchas posibilidades de descender`)
        }
        //Cantidad de puntos finales mayor a 15 y menor o igual a 30
        if(pts_totales > 15 && pts_totales <=30){
            alert(`Una temporada bastante mala pero el ${nombre_club} se salva del descenso`)
        }
        //Cantidad de puntos finales mayor a 30 y menor o igual a 50
        if(pts_totales >30 && pts_totales <=50){
            alert(`Temporada regular del ${nombre_club} pero no alcanza para entrar a la competiciones europeas`)
        }
        //Cantidad de puntos finales mayor a 50 y menor o igual a 70
        if(pts_totales >50 && pts_totales <=70){
            alert(`Buena temporada del ${nombre_club} formara parte de las competiciones europeas el año que viene`)
        }
        //Cantidad de puntos finales mayor a 70
        if(pts_totales >70){
            alert(`Gran temporada del ${nombre_club}, tiene todas las posibilidades de ser campeon de su liga`)
        }
    }
        }
          break
        //En esta opcion el usuario sale del menu
          case 0:
             console.log(`Gracias por utilizar nuestra calculadora futbolera. Hasta la proxima!`)
             salirMenu = true
          break 
        //En este caso ingreso una opcion incorrecta  
          default:
             console.log("Opción no válida, ingrese alguna presente en el menu")
          break
       }
    }while(!salirMenu)