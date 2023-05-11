window.addEventListener('load', function() {
  const maquina4 = document.getElementById('text');
  let escribirInterval = null;

  const maquinaEscribir4 = (text = '', tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('');
    etiqueta.innerHTML = '';
    let i = 0;
    escribirInterval = setInterval(function(){
      if (arrayCaracteres[i] === '*') {
        etiqueta.innerHTML += '</br>';
      } else {
        etiqueta.innerHTML += arrayCaracteres[i];
      }
      if (i === arrayCaracteres.length - 1) {
        clearInterval(escribirInterval);
      }
      i++;
    }, tiempo);
  };

  maquinaEscribir4("El taekwondo ITF es una forma de arte marcial centrada en la práctica de técnicas de patada, puñetazo y bloqueo, así como en la realización de formas, sparring y técnicas de autodefensa. Sus principales fortalezas incluyen la promoción de valores como la disciplina, la perseverancia, el respeto y la autoconfianza, así como el énfasis en la meditación y la filosofía detrás de las técnicas. Además de los beneficios físicos, el taekwondo ITF también puede mejorar la salud mental y emocional de los estudiantes, reducir el estrés y la ansiedad, y mejorar las relaciones con los demás. ", 100, maquina4);

  document.getElementById("whatsapp-btn").onclick = function() {
    window.location.href = "https://wa.me/3512343686?text=Hola,%20quiero%20info%20sobre%20las%20clases%20de%20taekwondo";
  };
});
