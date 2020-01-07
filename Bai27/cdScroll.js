const items = document.querySelector('.items');
const listItem = document.querySelectorAll('.item');
let isDown = false;
let start;
function run(e) {
  if (!isDown) return;
  const end = e.pageX - items.offsetLeft; // lấy vị trí cuối cùng của hành động mousemove.
  items.scrollLeft = items.scrollLeft + (start - end); // cập nhật thanh scroll  

}
 
items.addEventListener('mousemove', run)

items.addEventListener('mousedown', (e) =>{
    start = e.pageX - items.offsetLeft;  // lấy vị trí chuột lúc nhấn xuống.
    items.classList.add('active');
      isDown = true
});
items.addEventListener('mouseup', () => { 
    items.classList.remove('active');
   return isDown = false
});
items.addEventListener('mouseleave', () => {
    items.classList.remove('active');
    return  isDown = false
});


   