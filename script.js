document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {

    // disable F12 key
    if(e.keyCode == 123) {
        return false;
    }
 
    // disable I key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        return false;
    }
 
    // disable J key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }
 
    // disable U key
    if(e.ctrlKey && e.keyCode == 85) {
        return false;
    }

    // disable S key
    if(e.ctrlKey && e.keyCode == 83) {
        return false;
     }
}

// Audio Autoloop
document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio("https://cdn.discordapp.com/attachments/968542864235716658/1198611583018991709/noyou.mp3?ex=66684906&is=6666f786&hm=41cdaaa2d653e300d4c11547c1d2c0152c11f5c3f17e803d71f57e6ce3bb6380&");
    audio.loop = true;
    document.addEventListener("click", function(){
      audio.play();
    });
    document.addEventListener("mousemove", function(){
      audio.play();
    });
});
