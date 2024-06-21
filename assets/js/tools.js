//screen loader
let loader = document.querySelector('.preloader');
window.addEventListener("load", () =>{
loader.classList.add("preloader-hidden");

loader.addEventListener('transitionend',()=>{
document.body.removeChild("preloader")
})
} )

// Scrolltop
let calcScrollValue = () => {
  let scrollProgress = document.getElementById
    ("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  console.log(pos);
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
if(pos>120){
  scrollProgress.style.display= 'grid';
}
else{
  scrollProgress.style.display = 'none';
}
scrollProgress.addEventListener('click', () =>{
  document.documentElement.scrollTop = 0;
} );
scrollProgress.style.background = `conic-gradient(#c80606 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
