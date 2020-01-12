const holes = Array.from(document.querySelectorAll('.hole'));
 const positions = holes.map(hole => hole.dataset.index)
                        .map(index => parseInt(index))
 let lastPosition=-1;
  function startGame(){
    holes.forEach(hole => {
        hole.classList.remove('active')
    }) 
     const position = positions[Math.floor(Math.random()*(positions.length-1))]
    if (position == lastPosition)
      setTimeout(()=> holes.forEach(hole =>{
        if (hole.dataset.index == position)
         {
             hole.classList.add('active');
             lastPosition = hole.dataset.index;
        }
    }),500)
    else {
        holes.forEach(hole =>{
            if (hole.dataset.index == position)
             {
                 hole.classList.add('active');
                 lastPosition = hole.dataset.index;
            }
        })
    }
    setTimeout(() => startGame(),1000)
  }                     
// let reset = setInterval(() => randomMouse(),1000)
const start = document.querySelector('#start');
start.addEventListener('click', startGame)
function countPoint(e){
  let count = score.textContent;
  if (e.isTrusted)
   {
      count++;
      score.textContent = count;
    }
  }
const gameBoard = document.querySelectorAll('.mouse');
gameBoard.forEach(mouse =>{ 
  console.dir(mouse)
  mouse.addEventListener('click', countPoint)
})

const score = document.querySelector('.score');
