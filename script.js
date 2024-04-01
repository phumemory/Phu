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
    var audio = new Audio("https://cdn.discordapp.com/attachments/968542864235716658/1224214086620020736/Thaisub_Sunflower_x_Sunflower_-_Pose_Malone_ft.Swae_Lee.mp3?ex=661cad37&is=660a3837&hm=ad3ee20ec512e29108eb0ad5c378ecf34131e04ebf73a7da5bdfef87f1d26736&");
    audio.loop = true;
    document.addEventListener("click", function(){
      audio.play();
    });
    document.addEventListener("mousemove", function(){
      audio.play();
    });
});
