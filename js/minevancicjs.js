var tablero = [[], [], [], [], [], []];

var identificadores = [

    ["00", "01", "02", "03", "04", "05", "06"],
    ["10", "11", "12", "13", "14", "15", "16"],
    ["20", "21", "22", "23", "24", "25", "26"],
    ["30", "31", "32", "33", "34", "35", "36"],
    ["40", "41", "42", "43", "44", "45", "46"],
    ["50", "51", "52", "53", "54", "55", "56"]];

var identificadores2 = [

    ["00", "01", "02", "03", "04", "05", "06"],
    ["10", "11", "12", "13", "14", "15", "16"],
    ["20", "21", "22", "23", "24", "25", "26"],
    ["30", "31", "32", "33", "34", "35", "36"],
    ["40", "41", "42", "43", "44", "45", "46"],
    ["50", "51", "52", "53", "54", "55", "56"]];

for (i = 0; i < tablero.length; i++) {

    for (j = 0; j < 7; j++) {
        tablero[i].push(0);

    }

}

var minas = [[], [], [], [], [], []];

for (i = 0; i < minas.length; i++) {

    for (j = 0; j < 7; j++) {
        minas[i].push(0);

    }

}

function generarBombas() {

    do {

        var filasAleatorias1 = Math.floor(Math.random() * 6);
        var columnasAleatorias1 = Math.floor(Math.random() * 7);

        tablero[filasAleatorias1][columnasAleatorias1] = 1;


    } while (minas[filasAleatorias1][columnasAleatorias1] == tablero[filasAleatorias1][columnasAleatorias1]);

    minas[filasAleatorias1][columnasAleatorias1] = 1;

    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {

            if (i == 5 && j == 0) {
                if (tablero[i][j] == 1) {
                    tablero[i][j] = 0;
                    minas[i][j] = 0;

                }

            }

            if (i == 0 && j == 6) {
                if (tablero[i][j] == 1) {
                    tablero[i][j] = 0;
                    minas[i][j] = 0;

                }

            }

            if ((i == 5 && j == 1) && tablero[4][0] == 1) {
                tablero[i][j] = 0;
                minas[i][j] = 0;

            }

            if ((i == 1 && j == 6) && tablero[0][5] == 1) {
                tablero[i][j] = 0;
                minas[i][j] = 0;

            }
        }

    }

    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {

            switch (i) {

                case 0:
                    if (tablero[i + 1][j] == 1 || tablero[i][j + 1] == 1 || tablero[i][j - 1] == 1) {

                        tablero[i][j] = 0;
                        minas[i][j] = 0;

                    }
                    break;
                case 1:
                    if (tablero[i + 1][j] == 1 || tablero[i][j + 1] == 1 || tablero[i][j - 1] == 1 || tablero[i - 1][j] == 1) {

                        tablero[i][j] = 0;
                        minas[i][j] = 0;

                    }


                    break;
                case 2:
                    if (tablero[i + 1][j] == 1 || tablero[i][j + 1] == 1 || tablero[i][j - 1] == 1 || tablero[i - 1][j] == 1) {

                        tablero[i][j] = 0;
                        minas[i][j] = 0;

                    }
                    break;
                case 3:
                    if (tablero[i + 1][j] == 1 || tablero[i][j + 1] == 1 || tablero[i][j - 1] == 1 || tablero[i - 1][j] == 1) {

                        tablero[i][j] = 0;
                        minas[i][j] = 0;

                    }
                    break;
                case 4:
                    if (tablero[i + 1][j] == 1 || tablero[i][j + 1] == 1 || tablero[i][j - 1] == 1 || tablero[i - 1][j] == 1) {

                        tablero[i][j] = 0;
                        minas[i][j] = 0;

                    }
                    break;

                case 5:
                    if (tablero[i][j + 1] == 1 || tablero[i][j - 1] == 1 || tablero[i - 1][j] == 1) {

                        tablero[i][j] = 0;
                        minas[i][j] = 0;

                    }
                    break;

            }


        }
    }

    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {

            switch (j) {

                case j == 0:
                    if (tablero[i + 1][j] == 1 || tablero[i][j + 1] == 1) {

                        tablero[i][j] = 0;
                        minas[i][j] = 0;

                    }
                    break;
                case j == 1:
                    if (tablero[i + 1][j] == 1 || tablero[i][j + 1] == 1 || tablero[i][j - 1] == 1) {

                        tablero[i][j] = 0;
                        minas[i][j] = 0;

                    }

                    break;
                case j == 2:
                    if (tablero[i + 1][j] == 1 || tablero[i][j + 1] == 1 || tablero[i][j - 1] == 1) {

                        tablero[i][j] = 0;
                        minas[i][j] = 0;

                    }
                    break;
                case j == 3:
                    if (tablero[i + 1][j] == 1 || tablero[i][j + 1] == 1 || tablero[i][j - 1] == 1) {

                        tablero[i][j] = 0;
                        minas[i][j] = 0;

                    }
                    break;
                case j == 4:
                    if (tablero[i + 1][j] == 1 || tablero[i][j + 1] == 1 || tablero[i][j - 1] == 1) {

                        tablero[i][j] = 0;
                        minas[i][j] = 0;

                    }
                    break;

                case j == 5:
                    if (tablero[i + 1][j] == 1 || tablero[i][j + 1] == 1 || tablero[i][j - 1] == 1) {

                        tablero[i][j] = 0;
                        minas[i][j] = 0;

                    }
                    break;

            }

        }

    }


}

var x = 0;
var y = 5;

var contadorNivel = 1;

function nivel() {

    switch (contadorNivel) {
        case 1:


            tiempo = 500;
            cronometro(tiempo);
            

            document.getElementById("nivel").textContent = "Level: " + contadorNivel;
            puntuaciones();
            do {
                generarBombas();
            } while (contarMinas() < 2);

            document.getElementById("minasActuales").textContent = "Mines: " + contarMinas();

            recorrerTablero();

            inicio = document.getElementById("05");
            inicio.style.backgroundColor = "green";
            identificadores[y][x] = 9;
            identificadores[0][6] = 9;

            break;
        case 2:



            tiempo = 300;
            cronometro();
            puntuacion += 50;

            y = 5;
            x = 0;
            document.getElementById("nivel").textContent = "Level: " + contadorNivel;

            do {
                generarBombas();
            } while (contarMinas() < 4);
            document.getElementById("minasActuales").textContent = "Mines: " + contarMinas();
            recorrerTablero();

            inicio = document.getElementById("05");
            inicio.style.backgroundColor = "green";
            identificadores[y][x] = 9;
            identificadores[0][6] = 9;

            break;
        case 3:

            tiempo = 200;
            cronometro();
            puntuacion += 50;
            y = 5;
            x = 0;
            document.getElementById("nivel").textContent = "Level: " + contadorNivel;

            do {
                generarBombas();
            } while (contarMinas() < 6);

            document.getElementById("minasActuales").textContent = "Mines: " + contarMinas();
            recorrerTablero();

            inicio = document.getElementById("05");
            inicio.style.backgroundColor = "green";
            identificadores[y][x] = 9;
            identificadores[0][6] = 9;

            break;
        case 4:

            tiempo = 100;
            cronometro();
            puntuacion += 50;
            y = 5;
            x = 0;

            document.getElementById("nivel").textContent = "Level: " + contadorNivel;
            do {
                generarBombas();
            } while (contarMinas() < 8);
            document.getElementById("minasActuales").textContent = "Mines: " + contarMinas();
            recorrerTablero();

            inicio = document.getElementById("05");
            inicio.style.backgroundColor = "green";
            identificadores[y][x] = 9;
            identificadores[0][6] = 9;

            break;
        case 5:
            ganar();

            break;

    }


}

function contarMinas() {

    var contadorBombas = 0;
    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {

            if (tablero[i][j] == 1) {

                contadorBombas++;
            }

        }
    }
    console.log("contador:" + contadorBombas);

    return contadorBombas;

}

function mostrarMinas() {

    for (i = 0; i < minas.length; i++) {
        for (j = 0; j < minas[i].length; j++) {
            console.log(minas[i][j]);

        }
    }


}

function mostrarIdentificador() {
    for (i = 0; i < identificadores.length; i++) {
        for (j = 0; j < identificadores[i].length; j++) {

            console.log(identificadores[i][j]);
        }
    }


}

function mostrararray() {


    for (var i = 0; i < tablero.length; i++) {
        for (var j = 0; j < tablero[i].length; j++) {

            console.log(tablero[i][j]);



        }
    }


}

var x = 0;
var y = 5;

function arriba() {

    id = document.getElementById(x + "" + y);

    id.style.backgroundColor = "#E1DCDB";
    y--;

    if (y < 0) {

        setTimeout(function () {

            document.getElementById(x + "" + y).style.background = "green";
        }, 200);

        y = 0;

    } else {

        id = document.getElementById(x + "" + y);

        id.style.backgroundColor = "green";


        if (identificadores[y][x] == "D") {

            id.style.backgroundColor = "red";

        }

        if (identificadores[y][x] == "M") {
            id.style.backgroundColor = "black";

            perder();

        }
        if (y != 0) {

            if (identificadores[y - 1][x] == "D" && identificadores[y][x] != "M" && identificadores[y - 1][x] != 9 && identificadores[y][x] != "D") {

                id.style.backgroundColor = "yellow";

            }
        }

        if (minas[y][x] == 8) {
            volveratras();

        }
        minas[y][x] = 8;
    }

    if (y == 0 && x == 6) {

        limpiarTablero();
        limpiaridentificadores();
        limpiarcolores();
        id = document.getElementById(x + "" + y);
        id.style.backgroundColor = "white";
        contadorNivel++;
        clearInterval(tiempocronometro);
        nivel();
    }
}

function abajo() {

    id = document.getElementById(x + "" + y);
    id.style.backgroundColor = "#E1DCDB";

    y++;

    if (y > 5) {

        setTimeout(function () {
            document.getElementById(x + '' + y).style.background = "green";
        }, 200);
        y = 5;
    }

    else {

        id = document.getElementById(x + "" + y);
        id.style.backgroundColor = "green";
        if (identificadores[y][x] == "D") {

            id.style.backgroundColor = "red";
        }

        if (identificadores[y][x] == "M") {
            id.style.backgroundColor = "black";
            perder();

        }

        if (identificadores[y - 1][x] == "D" && identificadores[y][x] != "M" && !(identificadores[y][x] == "D" && identificadores[y - 1][x] == "D")) {
            id.style.backgroundColor = "yellow";

        }
        if (minas[y][x] == 8) {

            volveratras();

        }
        minas[y][x] = 8;

    }

}

function derecha() {

    id = document.getElementById(x + "" + y);
    id.style.backgroundColor = "#E1DCDB";
    x++;

    if (x > 6) {

        setTimeout(function () {
            document.getElementById(x + '' + y).style.background = "green";
        }, 200);
        x = 6;
    } else {

        id = document.getElementById(x + "" + y);
        id.style.backgroundColor = "green";

        if (identificadores[y][x] == "D") {

            id.style.backgroundColor = "red";
        }

        if (identificadores[y][x] == "M") {
            id.style.backgroundColor = "black";
            perder();

        }

        if (identificadores[y][x + 1] == "D" && identificadores[y][x] != "M" && identificadores[y][x + 1] != 9) {
            if (identificadores[y][x] != "D") {

                id.style.backgroundColor = "yellow";
            }
        }


        if (minas[y][x] == 8) {
            volveratras();

        }
        minas[y][x] = 8;


    }

    if (y == 0 && x == 6) {

        limpiarTablero();
        limpiaridentificadores();
        limpiarcolores();

        id = document.getElementById(x + "" + y);
        id.style.backgroundColor = "white";
        clearInterval(tiempocronometro);
        contadorNivel++;
        nivel();


    }

}

function izquierda() {

    id = document.getElementById(x + "" + y);
    id.style.backgroundColor = "#E1DCDB";

    x--;
    if (x < 0) {

        setTimeout(function () {
            document.getElementById(x + '' + y).style.background = "green";
        }, 200);
        x = 0;

    } else {

        id = document.getElementById(x + "" + y);
        id.style.backgroundColor = "green";

        if (identificadores[y][x] == "D") {
            id.style.backgroundColor = "red";
        }


        if (identificadores[y][x] == "M") {
            id.style.backgroundColor = "black";
            perder();

        }

        if (identificadores[y][x - 1] == "D" && identificadores[y][x] != "M"
            && !(identificadores[y][x] == "D" && identificadores[y][x - 1] == "D")) {
            id.style.backgroundColor = "yellow";

        }




        if (minas[y][x] == 8) {
            volveratras();



        }
        minas[y][x] = 8;

    }
}

function empezar() {

    nivel();
    document.getElementById("inicio").style.visibility = "hidden";
    document.getElementById("instrucciones").style.visibility = "hidden";
    document.getElementById("botones").style.visibility = "visible";
    document.getElementById("crono").style.visibility = "visible";
    document.getElementById("puntuacion").style.visibility = "visible";
    document.getElementById("minasActuales").style.visibility = "visible";
    document.getElementById("nivel").style.visibility = "visible";
    document.getElementById("tablero").style.visibility = "visible";

}
var tiempocronometro = 0;

function cronometro() {
    tiempocronometro = setInterval(
        function () {

            tiempo--;
            document.getElementById("crono").textContent = "Time left: " + tiempo;
            if (tiempo <= 0) {
                clearInterval(tiempocronometro);
                timeover();
            }
        }, 1000);
}

var puntuacion = 600;

function puntuaciones() {


    var puntuacioncontador = setInterval(
        function () {
            puntuacion -= 2;


            document.getElementById("puntuacion").textContent = "Score: " + puntuacion;


            if (puntuacion == 0) {
                clearInterval(puntuacioncontador);

                perderpuntos();

            }



        }, 1000);

    return puntuacion;


}

function limpiaridentificadores() {
    for (i = 0; i < identificadores.length; i++) {
        for (j = 0; j < identificadores[i].length; j++) {
            identificadores[i][j] = identificadores2[i][j];

        }
    }


}

function limpiarTablero() {

    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {
            tablero[i][j] = 0;
            minas[i][j] = 0;

        }
    }


}

function limpiarcolores() {

    for (i = 0; i < minas.length; i++) {
        for (j = 0; j < minas[i].length; j++) {

            document.getElementById(j + "" + i).style.backgroundColor = "white";

        }
    }

}

function recorrerTablero() {

    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {

            if (tablero[i][j] == 1) {
                identificadores[i][j] = "M";

                if (i == 4 && j == 0) {
                    identificadores[i - 1][j] = "D";
                    identificadores[i][j + 1] = "D";

                } else if (i == 5 && j == 1) {
                    identificadores[i - 1][j] = "D";
                    identificadores[i][j + 1] = "D";

                }


                if (i == 0 && j == 5) {
                    identificadores[i + 1][j] = "D";
                    identificadores[i][j - 1] = "D";

                } else if (i == 1 && j == 6) {
                    identificadores[i + 1][j] = "D";
                    identificadores[i][j - 1] = "D";

                }

                if (i == 0 && j == 0) {
                    identificadores[i + 1][j] = "D";
                    identificadores[i][j + 1] = "D";

                }
                if (i == 5 && j == 6) {
                    identificadores[i - 1][j] = "D";
                    identificadores[i][j - 1] = "D";

                }

                if (j == 0 && (i > 0 && i <= 3)) {
                    identificadores[i + 1][j] = "D";
                    identificadores[i][j + 1] = "D";
                    identificadores[i - 1][j] = "D";


                }

                if (j == 6 && (i > 1 && i < 5)) {
                    identificadores[i + 1][j] = "D";
                    identificadores[i][j - 1] = "D";
                    identificadores[i - 1][j] = "D";


                }

                if (i == 0 && (j > 0 && j < 6)) {
                    identificadores[i + 1][j] = "D";
                    identificadores[i][j - 1] = "D";
                    if (identificadores[i][j + 1] != 9) {
                        identificadores[i][j + 1] = "D";
                    }


                }

                if (i == 5 && (j > 1 && j < 6)) {
                    identificadores[i - 1][j] = "D";
                    identificadores[i][j + 1] = "D";
                    if (identificadores[i][j + 1] != 9) {
                        identificadores[i][j - 1] = "D";

                    }


                }


                if ((j > 0 && j < 6) && (identificadores[i][j + 1] != 1 || identificadores[i][j - 1] != 1) && (identificadores[i][j + 1] != 9 && identificadores[i][j - 1] != 9)) {

                    identificadores[i][j - 1] = "D";
                    identificadores[i][j + 1] = "D";

                }

                if ((i > 0 && i < 5) && (identificadores[i + 1][j] != 1 || identificadores[i - 1][j] != 1) && (identificadores[i - 1][j] != 9 && identificadores[i + 1][j] != 9)) {

                    identificadores[i - 1][j] = "D";
                    identificadores[i + 1][j] = "D";

                }

            }

        }
    }



}

function perder() {


    $(function () {
        $('#over').modal('show');
    })

    setTimeout('location.reload()', 2800);


}

function ganar() {

    $(function () {
        $('#listado').modal('show');
    })

    document.getElementById("puntostotales").innerHTML = "Total points: " + puntuacion;
    document.getElementById("tiempototal").innerHTML = "Time left: " + tiempo;

    setTimeout('location.reload()', 4000);

}

function timeover() {

    $(function () {
        $('#overtime').modal('show');
    })

    setTimeout('location.reload()', 2800);
}

function volveratras() {

    puntuacion = puntuacion - 20;
    $(function () {
        $('#return').modal('show');
    })
}

function perderpuntos() {
    $(function () {
        $('#overpoint').modal('show');
    })
    setTimeout('location.reload()', 2800);

}

function pista() {
    puntuacion = puntuacion - 100;
    if (puntuacion <= 0) {
        perderpuntos();
    }
    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] == 1) {
                id = document.getElementById(j + "" + i);
            }
        }
    }
    id.style.background = "black";
    setTimeout(function () {
        id.style.background = "white";
    }, 200);


}


