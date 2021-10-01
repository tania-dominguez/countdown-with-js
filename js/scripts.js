var dSegundos = document.getElementsByClassName("countdown__seconds")[0].getElementsByClassName("countdown__numbers")[0].getElementsByTagName("span")[0];
var uSegundos = document.getElementsByClassName("countdown__seconds")[0].getElementsByClassName("countdown__numbers")[0].getElementsByTagName("span")[1];
var dMinutos = document.getElementsByClassName("countdown__minutes")[0].getElementsByClassName("countdown__numbers")[0].getElementsByTagName("span")[0];
var uMinutos = document.getElementsByClassName("countdown__minutes")[0].getElementsByClassName("countdown__numbers")[0].getElementsByTagName("span")[1];
var dHoras = document.getElementsByClassName("countdown__hours")[0].getElementsByClassName("countdown__numbers")[0].getElementsByTagName("span")[0];
var uHoras = document.getElementsByClassName("countdown__hours")[0].getElementsByClassName("countdown__numbers")[0].getElementsByTagName("span")[1];
var dDias = document.getElementsByClassName("countdown__days")[0].getElementsByClassName("countdown__numbers")[0].getElementsByTagName("span")[0];
var uDias = document.getElementsByClassName("countdown__days")[0].getElementsByClassName("countdown__numbers")[0].getElementsByTagName("span")[1];

function cuentaAtras() {
  if (uSegundos.innerHTML == "0" && dSegundos.innerHTML == "0") {
    if (dDias.innerHTML == "0" && uDias.innerHTML == "0" && dHoras.innerHTML == "0" && uHoras.innerHTML == "0" && dMinutos.innerHTML == "0" && uMinutos.innerHTML == "0") {
      clearInterval(intervalo);
    } else {
      actualizarMinutos();
      dSegundos.innerHTML = "5";
      uSegundos.innerHTML = "9";
    }
  } else if (uSegundos.innerHTML == "0") {
    dSegundos.innerHTML = (parseInt(dSegundos.innerHTML) - 1).toString();
    uSegundos.innerHTML = "9";
  } else if (uSegundos.innerHTML != "0") uSegundos.innerHTML = (parseInt(uSegundos.innerHTML) - 1).toString();
}

function actualizarMinutos() {
  if (uMinutos.innerHTML == "0" && dMinutos.innerHTML == "0") {
    if (dDias.innerHTML == "0" && uDias.innerHTML == "0" && dHoras.innerHTML == "0" && uHoras.innerHTML == "0") {} else {
      actualizarHoras()
      dMinutos.innerHTML = "5";
      uMinutos.innerHTML = "9";
    }
  } else if (uMinutos.innerHTML == "0") {
    dMinutos.innerHTML = (parseInt(dMinutos.innerHTML) - 1).toString();
    uMinutos.innerHTML = "9";
  } else if (uMinutos.innerHTML != "0") uMinutos.innerHTML = (parseInt(uMinutos.innerHTML) - 1).toString();
}

function actualizarHoras() {
  if (uHoras.innerHTML == "0" && dHoras.innerHTML == "0") {
    if (dDias.innerHTML == "0" && uDias.innerHTML == "0") {} else {
      actualizarDias();
      dHoras.innerHTML = "2";
      uHoras.innerHTML = "3";
    }
  } else if (uHoras.innerHTML == "0") {
    dHoras.innerHTML = (parseInt(dHoras.innerHTML) - 1).toString();
    uHoras.innerHTML = "9";
  } else if (uHoras.innerHTML != "0") uHoras.innerHTML = (parseInt(uHoras.innerHTML) - 1).toString();
}

function actualizarDias() {
  if (uDias.innerHTML == "0" && dDias.innerHTML == "0") {}
  if (uDias.innerHTML == "0") {
    dDias.innerHTML = (parseInt(dDias.innerHTML) - 1).toString();
    uDias.innerHTML = "9";
  } else if (uDias.innerHTML != "0") uDias.innerHTML = (parseInt(uDias.innerHTML) - 1).toString();
}

function calcularTiempoRestante() {
  //Dentro de Date: Anyo, mes, dia, hora, minuto, segundo. OJO el mes empieza por 0! 0->11
  var fechaSalida = new Date(2021, 9, 11, 20, 0, 0);

  var distancia = fechaSalida.getTime() - new Date().getTime();

  if(distancia <= 0)
  {
      var dias = 0;
      var horas = 0;
      var minutos = 0;
      var segundos = 0;
  }
  else
  {
    var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  }

  if (dias <= 9) {
    uDias.innerHTML = dias.toString()[0];
  } else {
    dDias.innerHTML = dias.toString()[0];
    uDias.innerHTML = dias.toString()[1];
  }

  if (horas <= 9) {
    uHoras.innerHTML = horas.toString()[0];
  } else {
    dHoras.innerHTML = horas.toString()[0];
    uHoras.innerHTML = horas.toString()[1];
  }

  if (minutos <= 9) {
    uMinutos.innerHTML = minutos.toString()[0];
  } else {
    dMinutos.innerHTML = minutos.toString()[0];
    uMinutos.innerHTML = minutos.toString()[1];
  }

  if (segundos <= 9) {
    uSegundos.innerHTML = segundos.toString()[0];
  } else {
    dSegundos.innerHTML = segundos.toString()[0];
    uSegundos.innerHTML = segundos.toString()[1];
  }
}

calcularTiempoRestante();
var intervalo = setInterval(cuentaAtras, 1000);
// swiper
var swiper = new Swiper(".swiper", {
  // Optional parameters
  grabCursor: true,
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      }
    }, 
    1024: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      }
    },
    1440: {
      slidesPerView: 3,
      grid: {
        rows: 2,
    },
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
