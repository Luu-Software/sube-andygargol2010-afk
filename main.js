/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/


function calcularTarifa() {

    let registrada = document.getElementById("registrada").value;
    let distancia = parseFloat(document.getElementById("distancia").value);
    let region = document.getElementById("region").value;

    let tarifa = NaN;

    if (registrada === "si") {

        if (region === "caba") {
            if (distancia >= 0 && distancia <= 3) {
                tarifa = 715.24;

            } else if (distancia > 3 && distancia <= 6) {
                tarifa = 794.74;

            } else if (distancia > 6 && distancia <= 12) {
                tarifa = 855.97;

            } else if (distancia > 12 && distancia <= 27) {
                tarifa = 917.24;
            }
        }
        else if (region === "bsas") {
            if (distancia >= 0 && distancia <= 3) {
                tarifa = 968.57;

            } else if (distancia > 3 && distancia <= 6) {
                tarifa = 1089.64;

            } else if (distancia > 6 && distancia <= 12) {
                tarifa = 1210.71;

            } else if (distancia > 12 && distancia <= 27) {
                tarifa = 1452.85;

            } else if (distancia > 27) {
                tarifa = 1708.07;
            }
        }
        else if (region === "nacional") {
            if (distancia >= 0 && distancia <= 3) {
                tarifa = 714.00;

            } else if (distancia > 3 && distancia <= 6) {
                tarifa = 807.07;

            } else if (distancia > 6 && distancia <= 12) {
                tarifa = 894.17;

            } else if (distancia > 12 && distancia <= 27) {
                tarifa = 983.78;

            } else if (distancia > 27) {
                tarifa = 1085.49;
            }
        }
    }
    else if (registrada === "no") {
        if (region === "caba") {
            if (distancia >= 0 && distancia <= 3) {
                tarifa = 1137.23;

            } else if (distancia > 3 && distancia <= 6) {
                tarifa = 1263.64;

            } else if (distancia > 6 && distancia <= 12) {
                tarifa = 1360.99;

            } else if (distancia > 12 && distancia <= 27) {
                tarifa = 1458.41;
            }
        }
        else if (region === "bsas") {
            if (distancia >= 0 && distancia <= 3) {
                tarifa = 1937.14;

            } else if (distancia > 3 && distancia <= 6) {
                tarifa = 2179.28;

            } else if (distancia > 6 && distancia <= 12) {
                tarifa = 2421.42;

            } else if (distancia > 12 && distancia <= 27) {
                tarifa = 2905.70;

            } else if (distancia > 27) {
                tarifa = 3416.14;
            }
        }
        else if (region === "nacional") {
            if (distancia >= 0 && distancia <= 3) {
                tarifa = 1428.00;

            } else if (distancia > 3 && distancia <= 6) {
                tarifa = 1614.14;

            } else if (distancia > 6 && distancia <= 12) {
                tarifa = 1788.34;

            } else if (distancia > 12 && distancia <= 27) {
                tarifa = 1967.56;

            } else if (distancia > 27) {
                tarifa = 2170.98;
            }
        }
    }
    else if (registrada === "social") {

        if (region === "caba") {

            if (distancia >= 0 && distancia <= 3) {
                tarifa = 339.18;

            } else if (distancia > 3 && distancia <= 6) {
                tarifa = 376.88;

            } else if (distancia > 6 && distancia <= 12) {
                tarifa = 405.91;

            } else if (distancia > 12 && distancia <= 27) {
                tarifa = 434.97;
            }
        }
        else if (region === "bsas") {

            if (distancia >= 0 && distancia <= 3) {
                tarifa = 435.85;

            } else if (distancia > 3 && distancia <= 6) {
                tarifa = 490.33;

            } else if (distancia > 6 && distancia <= 12) {
                tarifa = 544.81;

            } else if (distancia > 12 && distancia <= 27) {
                tarifa = 653.78;

            } else if (distancia > 27) {
                tarifa = 768.63;
            }
        }
        else if (region === "nacional") {

            if (distancia >= 0 && distancia <= 3) {
                tarifa = 321.30;

            } else if (distancia > 3 && distancia <= 6) {
                tarifa = 363.18;

            } else if (distancia > 6 && distancia <= 12) {
                tarifa = 402.37;

            } else if (distancia > 12 && distancia <= 27) {
                tarifa = 442.70;

            } else if (distancia > 27) {
                tarifa = 488.47;
            }
        }

    }

    if (!tarifa) {
        document.getElementById("tarifa").textContent =
            "No se pudo calcular la tarifa.";
    } else {

        document.getElementById("tarifa").textContent =
            "Tarifa: $" + tarifa;
    }
}