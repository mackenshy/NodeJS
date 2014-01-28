var querystring = require("querystring");

function iniciar(response, postData) {
  console.log("Manipulador de peticiones 'iniciar' fue llamado.");

  var body = '<html>'+
    '<head>'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function subir(response, postData) {
  console.log("Manipulador de Peticion 'subir' fue llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Tu enviaste: " + postData);
  response.write("Tu enviaste el texto: : " + querystring.parse(postData)["text"]);
  response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;