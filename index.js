(function() {
  var codeTime, commentTime, finalStyle, isOn, openComment, skip, styles, writeStyleChar, writeStyles;

  styles = "/*\n * \"Mi regalo para una persona especial\"💕 v0.2.2\n * Authored by Yelder\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 1.0rem; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/*\n * ...\n * ...Que fuerzas\n * jajsja quen chucha con el saludo xD~\n * Wueno como es tu día te hice este regalo xD\n * Se que es un poco Nerd pero que chuca jaja\n * Lo hice escuchando salsita y canciones romanticonas \n * Tu sabe para la inspiracion\n * Wueno que sepas que lo hice con mucho amor uwu\n * Espero que le guste ❤\n * Primero agregare un marco para poner el codigo(no se asuste)\n * Wueno... Comenzemos！\n */\n\npre {\n  position: fixed;\n  top: 30px; bottom: 30px;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n/*\n * No,no，se vaya a desmayar por tanto codigo jaja\n * Solo quiero presumir JAJSJ, pero sigamos implementando codigo jaja\n * Colors based on Base16 Ocean Dark\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/*\n * Ya vez que soy un chucha en esto? jajaja！\n * Tengo que mover el codigo en el un marco\n * Para que se vea bien chevere \n */\n\n@media screen and (max-width: 768px) {\n    pre { left: 6%;right: 6%;top: 50%; }\n}\n\n@media screen and (min-width: 768px) {\n    pre { width: 48%;left: 50%;bottom: 30px; }\n}\n\n/*\n * Cuidado la kagees！\n */\n\n@media screen and (max-width: 768px) {\n    #heart, #echo {\n        position: fixed;\n        width: 300px; height: 300px;\n        margin: 30px auto;\n        left: 0; right: 0;\n        text-align: center;\n        -webkit-transform: scale(0.95);\n        transform: scale(0.95);\n    }\n}\n\n@media screen and (min-width: 768px) {\n    #heart, #echo {\n      position: fixed;\n      width: 300px; height: 300px;\n      top: calc(50% - 150px); left: calc(25% - 150px);\n      text-align: center;\n      -webkit-transform: scale(0.95);\n              transform: scale(0.95);\n    }\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 150px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n/* Agegaré detallitos pa que se va bacan csmre */\n\n#heart::after {\n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before {\n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n/*\n * Este es mi corazón porfavor ten cuidado con el \n * porque te lo quiero dar！(si quieres 🥺)\n * Y lo firmare pa que veas que es la fifi\n */\n\n#heart i::before {\n  content: 'De Manu';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 27%; left: 0;\n  font-family: 'Gloria Hallelujah', cursive;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 50px;\n  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);\n}\n\n/*\n * Pa que vea que la amo mucho\n * Haré latir ese corazón！\n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n  }\n  50% {\n    -webkit-transform: scale(1.00);\n            transform: scale(1.00);\n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   {\n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   {\n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n/*\n * Bien csmreee！preparaatee, que vas a ver como mi cora late por ti\n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function:\n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function:\n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart {\n  -webkit-animation-name: heartbeat;\n          animation-name: heartbeat;\n}\n#echo {\n  -webkit-animation-name: echo;\n          animation-name: echo;\n}\n\n/*\n * Estas listaa?！\n */\n\n#heart, #echo {\n\n/*\n * ...3...\n *\n * ...2...\n *\n * ...1...\n *\n * Espera un mini segundo xD\n *\n */\n\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n\n/*\n * ...Bieeeen csmre!\n */\n\n}\n\n/*\n * JeJeJe\n * Se ve bien chevere no? jajaj\n * Ahora, Momento cursi jaja \n * La fifi nose por donde empezar ajaja \n * Al principio cuando comenzamos a conocernos y a enamorame de ti \n * no voy a negar que senti miedo, pero igual senti tranquilidad\n * por primera vez en mucho tiempo.\n * Fue demasiado lindo saber que nos gustaban las mismas\n * canciones y que la  disfrutabamos con la misma alegria. \n * Fue lindo tener esas conversaciones re locas y interesantes que se \n * daban en la madrugada. \n * Fue lindo conocer tus anecdotas, experiencias, \n * saber que cosas te gustaba hacer en tu tiempo libre, saber tus pelis \n * favoritas, que comidas no te gustaban y que cosas te hacian feliz. \n * Fue lindo las veces que me iba a dormir con una sonrisa en \n * la cara despues de darnos las buenas noches jaja, \n * Fue lindo despertar sabiendo que aun estando lejos \n * te sentia aca a mi ado :,D.\n * Otra vaina que tambien me pasaba al principio era \n * 'No creo enamorarme tanto...' y me doy risa\n * porque si terminaste gustandome mas de los que pense,\n * que sin darme cuenta veia tu ultima conexion, ya esperaba \n * tu mensaje con ansias, te mandaba videos de parejas bailando que era re \n * 'Como quisiera estar asi contigo', te llegue a dedicar \n * mis canciones fav de salsa xD, sonreia al hablar contigo y decia\n * 'Que palta enamorarse es una perdida de tiempo...'\n * y ahora eres el motivo por el cual me madrugue\n * para hacerle algo especial xD.\n * Yyy todo es para llegar a la conlucion de que eres:\n * Como mis canciones favoritas de salsita y merengue ay ay de las que grito\n * Como la Noche estrella de Vincent van Gogh\n * Como un café expreso\n * Como el chocolate\n * Como una carta de amor al cine\n * Como una Deidad\n * Como la personificacion de flow\n * Como los sentimientos que transmite interstellar\n * Como mi bilirrubina\n * Como burbuja de las chicas super poderosas\n * Como Inspiracion\n * Como la pelicula 500 Days of summer(Es una pelicula de amor perfecta)\n * Y seguiria asi hasta que se me seque la garganta xD\n * Pero wueno\n * Querida dama de ojos encantadores y sonrisa sonrisa hipnotisante\n * hoy es un día muy especial porque cumple 17\n * csmre wow Jonny la gente es ta muy loca :0\n * y tiene que pasarla re bien divertirse y re disfrutar jajaja \n * Sabes me hubiese encantado darle mi 'Feliz cumpleaños'\n * en persona y bailar una salsita con vo \n * Pero wueno distacia de mierda JAJAJA\n * final\n * 99669999996669999996699666699666999966699666699\n * 99699999999699999999699666699669966996699666699\n * 99669999999999999996699666699699666699699666699\n * 99666699999999999966666999966699666699699666699\n * 99666666999999996666666699666699666699699666699\n * 99666666669999666666666699666669966996699666699\n * 99666666666996666666666699666666999966669999996\n * Que es esto? Escribi mal?\n * nola\n * Crtl+F y busca 99, cheka~\n * En fono no funciona 😓\n */\n\n/*\n * \"Mi regalo con mucho amooor💖\" v0.2.2 \n * Esta pagina esta dedica solo para Manuela 💕\n * Eres la mejor persona que he conocido\n */";

  finalStyle = styles;

  openComment = false;

  isOn = true;

  writeStyleChar = function(which) {
    if (which === '/' && openComment === false) {
      openComment = true;
      styles = $('#style-text').html() + which;
    } else if (which === '/' && openComment === true) {
      openComment = false;
      styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    } else if (which === ':') {
      styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    } else if (which === ';') {
      styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
    } else if (which === '{') {
      styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      styles = $('#style-text').html() + which;
    }
    $('#style-text').html(styles);
    return $('#style-tag').append(which);
  };

  writeStyles = function(message, index, interval) {
    var pre;
    if (index < message.length) {
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      if (isOn) {
        return setTimeout((function() {
          return writeStyles(message, index, openComment ? commentTime : codeTime);
        }), interval);
      }
    }
  };

  skip = function() {
    isOn = false;
    return setTimeout((function() {
      var pre;
      $('#style-text').html(finalStyle);
      $('#style-tag').html(finalStyle);
      pre = document.getElementById('style-text');
      return pre.scrollTop = pre.scrollHeight;
    }), 2 * commentTime);
  };

  $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>\n  <div style = 'position: fixed;left: 30px;bottom: 10px;'>\n    <a id='skipAnimation'>Boton para saltar</a>\n    </div>");
  commentTime = 60;

  codeTime = 20;

  $(document).on('ready page:load', function() {
    return $('#skipAnimation').click(function() {
      return skip();
    });
  });

  writeStyles(styles, 0, commentTime);

}).call(this);
