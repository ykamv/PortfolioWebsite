function playAudio1() {

    var x = document.getElementById("op1");
    if (document.getElementById("play1")) {
        x.play();
        document.getElementById("play1").src = "../assets/images/Icons/pause.png";
        document.getElementById("play1").id = "pause1";
    }
    else {
        x.pause();
        document.getElementById("pause1").src = "../assets/images/Icons/play.png";
        document.getElementById("pause1").id = "play1";
    }
}

function playAudio2() {
    var x = document.getElementById("op2");
    if (document.getElementById("play2")) {
        x.play();
        document.getElementById("play2").src = "../assets/images/Icons/pause.png";
        document.getElementById("play2").id = "pause2";
    }
    else {
        x.pause();
        document.getElementById("pause2").src = "../assets/images/Icons/play.png";
        document.getElementById("pause2").id = "play2";
    }
}

function playAudio3() {
    var x = document.getElementById("op3");
    if (document.getElementById("play3")) {
        x.play();
        document.getElementById("play3").src = "../assets/images/Icons/pause.png";
        document.getElementById("play3").id = "pause3";
    }
    else {
        x.pause();
        document.getElementById("pause3").src = "../assets/images/Icons/play.png";
        document.getElementById("pause3").id = "play3";
    }
}
function playAudio4() {
    var x = document.getElementById("op4");
    if (document.getElementById("play4")) {
        x.play();
        document.getElementById("play4").src = "../assets/images/Icons/pause.png";
        document.getElementById("play4").id = "pause4";
    }
    else {
        x.pause();
        document.getElementById("pause4").src = "../assets/images/Icons/play.png";
        document.getElementById("pause4").id = "play4";
    }
}

function stop() {
    console.log("hello");

    a = document.getElementById("op1");
    b = document.getElementById("op2");
    c = document.getElementById("op3");
    d = document.getElementById("op4");

    a.pause();
    b.pause();
    c.pause();
    d.pause();

    if (document.getElementById("pause1")) {

        console.log("audio1");
        document.getElementById("pause1").src = "../assets/images/Icons/play.png";
        // document.getElementById("pause1").id = "play1";
    }
    if (document.getElementById("pause2")) {
        console.log("audio2");
        document.getElementById("pause2").src = "../assets/images/Icons/play.png";
        // document.getElementById("pause2").id = "play2";
    }
    if (document.getElementById("pause3")) {
        console.log("audio3");
        document.getElementById("pause3").src = "../assets/images/Icons/play.png";
        // document.getElementById("pause3").id = "play3";
    }
    if (document.getElementById("pause4")) {
        console.log("audio4");
        document.getElementById("pause4").src = "../assets/images/Icons/play.png";
        // document.getElementById("pause4").id = "play4";
    }
}

