let texto1 = document.getElementById("texto1");
texto1.onclick = function () {
  texto1.style.display = "none";
};
let texto2 = document.getElementById("texto2");
texto2.onclick = function () {
  texto2.style.display = "none";
};
let texto3 = document.getElementById("texto3");
texto3.onclick = function () {
  texto3.style.display = "none";
};
let texto4 = document.getElementById("texto4");
texto4.onclick = function () {
  texto4.style.display = "none";
};
Ia = document.getElementById("Ia");
let piedra = document.getElementById("Piedra");
piedra.onclick = () => {
  usado("Piedra");
};
let papel = document.getElementById("Papel");
papel.onclick = () => {
  usado("Papel");
};
let tijera = document.getElementById("Tijera");
tijera.onclick = () => {
  usado("Tijera");
};
let tuVictorias = document.getElementById("tuVictorias");
let IaVictorias = document.getElementById("iaVictorias");
let opcionUsuario = null;

var si = document.getElementById("si");
si.innerHTML = `<img src="imagenes/¿.png" width="300" height="300">`;
function usado(PPT) {
  if (PPT == "Tijera") {
    animacion(
      `<img src="imagenes/Tijera.jpg" width="300" height="300">`,
      si
    );
    opcionUsuario = 2;
  } else if (PPT == "Papel") {
    animacion(`<img src="imagenes/Papel.jpg" width="300" height="300">`, si);
    opcionUsuario = 1;
  } else if (PPT == "Piedra") {
    animacion(
      `<img src="imagenes/Piedra.jpg" width="300" height="300">`,
      si
    );
    opcionUsuario = 0;
  }
}
Ia.innerHTML = `<img src="imagenes/¿.png" width="300" height="300">`;
batalla = document.getElementById("batalla");
batalla.onclick = () => {
  texto1.style.display = "none";
  texto2.style.display = "none";
  texto3.style.display = "none";
  texto4.style.display = "none";

  if (opcionUsuario == null) {
    setTimeout(() => {
      texto1.style.display = "none";
      si.innerHTML = `<img src="imagenes/¿.png" width="300" height="300">`;
      Ia.innerHTML = `<img src="imagenes/¿.png" width="300" height="300">`;
    }, 1000);
    return (texto1.style.display = "block");
  }
  let iaRamdom = Math.floor(Math.random() * 3);
  if (iaRamdom == 0) {
    animacion(
      `<img src="imagenes/Piedra.jpg" width="300" height="300">`,
      Ia
    );
  } else if (iaRamdom == 1) {
    animacion(`<img src="imagenes/Papel.jpg" width="300" height="300">`, Ia);
  } else if (iaRamdom == 2) {
    animacion(
      `<img src="imagenes/Tijera.jpg" width="300" height="300">`,
      Ia
    );
  }
  if (iaRamdom == opcionUsuario) {
    setTimeout(() => {
      texto2.style.display = "none";
      si.innerHTML = `<img src="imagenes/¿.png" width="300" height="300">`;
      Ia.innerHTML = `<img src="imagenes/¿.png" width="300" height="300">`;
    }, 1000);
    texto2.style.display = "block";
    return (opcionUsuario = null);
  } else if (
    (iaRamdom == 0 && opcionUsuario == 1) ||
    (iaRamdom == 1 && opcionUsuario == 2) ||
    (iaRamdom == 2 && opcionUsuario == 0)
  ) {
    tuVictorias.innerHTML++;
    setTimeout(() => {
      texto3.style.display = "none";
      si.innerHTML = `<img src="imagenes/¿.png" width="300" height="300">`;
      Ia.innerHTML = `<img src="imagenes/¿.png" width="300" height="300">`;
    }, 1000);
    texto3.style.display = "block";
    return (opcionUsuario = null);
  } else {
    IaVictorias.innerHTML++;
    setTimeout(() => {
      texto4.style.display = "none";
      si.innerHTML = `<img src="imagenes/¿.png" width="300" height="300">`;
      Ia.innerHTML = `<img src="imagenes/¿.png" width="300" height="300">`;
    }, 1000);
    texto4.style.display = "block";
    return (opcionUsuario = null);
  }
};
function animacion(vea, aja) {
  aja.style.opacity = 0.7;
  aja.style.transition = "1s";
  setTimeout(() => {
    aja.innerHTML = vea;
    aja.style.opacity = 1;
  }, 250);
}
