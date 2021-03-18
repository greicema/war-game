function start() {
    $("#inicio").hide();

    $("#fundogame").append("<div id='jogador' class='anima1'></div>");
    $("#fundogame").append("<div id='inimigo1' class='anima2'></div>");
    $("#fundogame").append("<div id='inimigo2'></div>");
    $("#fundogame").append("<div id='amigo' class='anima3'></div>");

    var jogo = {};
    //Game loop
    jogo.timer = setInterval(loop, 30);

    function loop() {
        movefundo();
    }

    function movefundo() {
        esquerda = parseInt($("#fundogame").css("background-position"));
        $("#fundogame").css("background-position", esquerda - 1);
    }
}

//teste