window.addEventListener('keydown', playSound);

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(key)
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
     key.addEventListener('transitionend', removeTransition);
  }
  function removeTransition(e) {
    e.target.classList.remove('playing');
  }
  
