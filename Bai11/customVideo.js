const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button')
const playskips = document.querySelectorAll('.player__skip')
const volume = document.querySelector('.volume')
const speed = document.querySelector('.speed')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')


function playVideo(){
    if (video.paused || video.ended)
     {
         video.play();
         this.textContent = '❚ ❚'
    }
     else{
      video.pause();
      this.textContent = '►'
     }
    
}

function changeVolume(e) {
    video.volume = e.target.value;
    return ;
}

function changeSpeed(e) {
    video.playbackRate =  e.target.value;
}

function skip(e) {
    video.currentTime+=parseInt(this.dataset.skip);
}
function changeprogressBar(){
    let progress = video.currentTime/video.duration*100;
    progressBar.style.flexBasis = `${progress}%`;
}

function drag(e){
  let progr=e.offsetX/progress.offsetWidth*video.duration;
  video.currentTime = progr
}
video.addEventListener('timeupdate', changeprogressBar)
playButton.addEventListener('click', playVideo)
volume.addEventListener('change',changeVolume)
speed.addEventListener('change',changeSpeed)
playskips.forEach(playskip => playskip.addEventListener('click', skip))
progress.addEventListener('click', drag)
