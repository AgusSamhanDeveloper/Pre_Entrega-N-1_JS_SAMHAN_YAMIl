    let salirMenu = false

    alert("!Hola Compañero! Disfruta de esta herramienta diseñada para amantes del futbol que desean saber acerca de su jugador o equipo favorito")
    do{
    let opcionIngresada = parseInt(prompt(`Ingresa la opcion que deseas
       1 -  Calcular promedio de goles por partido (jugador)
       2 -  Calcular puntos por temporada (club)
       0 - Salir del menu`))
       switch(opcionIngresada){
          case 1:
            function calc_prom(){
                let promedio = goles/partidos_jugados
                alert(`El promedio de gol de ${nombre_jugador} del ${nombre_equipo}, que anoto ${goles} goles en ${partidos_jugados} partidos jugados, es de ${promedio} goles por partido`)
                if(promedio < 0.5){
                    alert(`La temporada de ${nombre_jugador} ha sido irregular`)
                }
                if(promedio >= 0.5 && promedio <= 1){
                    alert(`La temporada de ${nombre_jugador} ha sido regular`)
                }
                if(promedio >= 1){
                    alert(`La temporada de ${nombre_jugador} ha sido sobresaliente, probablemente sera candidato a la bota de oro`)
                }
            }

            alert("Bienvenido a la calculadora de promedio de gol por partido")
            let nombre_jugador = prompt("Ingrese nombre del jugador del cual desea calcular su promedio de gol")
            console.log(nombre_jugador)
            let nombre_equipo = prompt(`Ingrese el nombre del equipo de ${nombre_jugador}`)
            console.log(nombre_equipo)
            let partidos_jugados = prompt(`Ingrese la cantidad de partidos jugados por ${nombre_jugador} del ${nombre_equipo}`)
            console.log(partidos_jugados)
            let goles = prompt(`Ingrese la cantidad de goles anotados por ${nombre_jugador} del ${nombre_equipo} en ${partidos_jugados} partidos`)
            console.log(goles)
            calc_prom()
          
             
          break
          case 2:
            function pts_conseguidos(){
                let pts_victorias = victorias*3
                let pts_empates = empates*1
                let pts_derrotas = derrotas*0
                let pts_totales = pts_victorias + pts_empates + pts_derrotas
                alert(`Habiendo conseguido un total de ${victorias} victorias, ${empates} empates y ${derrotas} derrotas.La cantidad de puntos conseguidos por el ${nombre_club} es de ${pts_totales} puntos`)
                if(pts_totales <= 15){
                    alert(`Que mala temporada, el ${nombre_club} tiene muchas posibilidades de descender`)
                }
                if(pts_totales > 15 && pts_totales <=30){
                    alert(`Una temporada bastante mala pero el ${nombre_club} se salva del descenso`)
                }
                if(pts_totales >30 && pts_totales <=50){
                    alert(`Temporada regular del ${nombre_club} pero no alcanza para entrar a la competiciones europeas`)
                }
                if(pts_totales >50 && pts_totales <=70){
                    alert(`Buena temporada del ${nombre_club} formara parte de las competiciones europeas el año que viene`)
                }
                if(pts_totales >70){
                    alert(`Gran temporada del ${nombre_club}, tiene todas las posibilidades de ser campeon de su liga`)
                }
            }
            alert("Bienvenido a la calculadora de puntos por temporada de tu equipo favorito")
            let nombre_club = prompt("Ingrese nombre del equipo, del cual desea saber sus puntos conseguidos")
    let victorias = parseInt(prompt(`Ingrese la cantidad de victorias del ${nombre_club}`))
    let empates = parseInt(prompt(`Ingrese la cantidad de empates del ${nombre_club}`))
    let derrotas = parseInt(prompt(`Ingrese la cantidad de derrotas del ${nombre_club}`))
    console.log(`El club ${nombre_club} ha conseguido un total de ${victorias} victorias, ${empates} empates y ${derrotas} derrotas`)
        let total_partidos = victorias + derrotas + empates
        if (total_partidos < 38){
            alert("Usted a ingresado una cantidad de partidos menor a la minima. Ingrese los datos de nuevo, teniendo en cuenta que la cantidad minima de partidos es 38")
        }
        if (total_partidos > 38){
            alert("Usted a ingresado una cantidad de partidos mayor a la minima. Ingrese los datos de nuevo, teniendo en cuenta que la cantidad maxima de partidos es 38")
        }
        if (total_partidos = 38){
            pts_conseguidos()
        }
          break
          case 0:
             console.log(`Gracias por utilizar nuestra calculadora futbolera. Hasta la proxima!`)
             salirMenu = true
          break   
          default:
             console.log("Opción no válida, ingrese alguna presente en el menu")
          break
       }
    }while(!salirMenu)


