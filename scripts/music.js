/*Audio scripts */
var audio = document.getElementById("background-music");
audio.volume = 0.2;

function mute() {
    audio.volume = 0;
    $(".volume-play").hide();
    $(".volume-mute").show();
}
function unmute() {
    $(".volume-play").show();
    $(".volume-mute").hide();
    audio.volume = 0.2;
    audio.play();
}
$(".center-img").click(function () {
    unmute()
});