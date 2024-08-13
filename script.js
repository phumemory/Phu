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
    var audio = new Audio("https://cdn.discordapp.com/attachments/968542864235716658/1198240393330970644/One_Of_The_Girls.mp3?ex=6674c714&is=66737594&hm=bedfb9b19ebea96539824a5f894ecfcd0839bd0c8eef5f89c90658f11a19d53a&");
    audio.loop = true;
    document.addEventListener("click", function(){
      audio.play();
    });
    document.addEventListener("mousemove", function(){
      audio.play();
    });
});