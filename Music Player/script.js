let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("control-icon");
let skipForwardIcon = document.getElementById("skip-forward-icon");
let skipBackwardIcon = document.getElementById("skip-backward-icon");
let pTag = document.querySelector(".music-player p");


song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = 0; 
}


song.ontimeupdate = function () {
    progress.value = song.currentTime;
    if (song.currentTime >= song.duration) {
        progress.value = song.duration; 
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
}


function replay() {
    song.currentTime = 0;
    song.play();
    controlIcon.classList.remove("fa-play");
    controlIcon.classList.add("fa-pause");
}


function playPause() {
    if (controlIcon.classList.contains("fa-pause")) {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    } else {
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    }
}


function skipForward() {
    song.currentTime += 5; 
    pTag.innerText = "--⏩ 5s-->";
    setTimeout(function () {
        pTag.innerText = "Band: One Direction";
    }, 500);
}


function skipBackward() {
    song.currentTime -= 5; 
    pTag.innerText = "<--⏮️ 5s--";
    setTimeout(function () {
        pTag.innerText =" Band: One Direction";
    }, 500);
}


if (song.played && !song.paused) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}


progress.oninput = function () {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    }
}


function showCredits() {
    alert("Song: What makes you Beautiful\nWritten by: Savan Kotecha and Carl Falk\nPerformed by: One Direction\nSource: VEVO");
}