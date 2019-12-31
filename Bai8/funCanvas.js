const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); 
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
 
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
function changeColor() {
    hue+=10;
    if (hue >= 360) {
        hue = 0;
      }
      console.log(hue)
    isDrawing = false
    return ;
}
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', changeColor);
canvas.addEventListener('mouseout', changeColor);