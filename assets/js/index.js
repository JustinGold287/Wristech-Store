
// HERO SECTION
window.onblur = function(){
  document.getElementById('video-background').onpause();
}
window.onfocus = function(){
  document.getElementById('video-background').onplay();
}

let video = document.getElementById('video-background');
video.onended = function() {
  // hide the video
  video.style.display = 'none';

  // show the image
  document.querySelector(".ris-bg").style.display = 'block';
};
// ENDS HERE

let videoplayer = document.getElementById('videoplayer');
let myvideo = document.getElementById('myvideo');

function stopvideo(){
  videoplayer.style.display = 'none';
}

function playvideo(file){
  myvideo.src = file;
  videoplayer.style.display = 'block';
}