document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("myAudio");
    let button = document.getElementById("playPauseButton");

    button.addEventListener("click", function () {
      if (audio.paused) {
        audio.play();
        button.innerText = "Pause Music";
      } else {
        audio.pause();
        button.innerText = "Guess My Favorite Song!";
      }
    });
  });