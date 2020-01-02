const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; 
const { offsetWidth: width, offsetHeight: height } = hero;
function shadow(e) {
  let { offsetX: x, offsetY: y } = e;
  // lay vi tri cua chuot khi mousemove
  // khi mouse di chuyển vào vung test thì e cũng thay đổi context theo.
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  } 
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  // đổ bóng max là một nữa của walk
  console.log(yWalk)
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${-xWalk}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${-xWalk}px 0 rgba(0,255,0,0.7),
    ${-yWalk}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}
hero.addEventListener('mousemove', shadow);