const submit = document.querySelector('.add-items')
const text = document.querySelector('input[type="text"]');
const plates = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function add(e){
    e.preventDefault(); 
    let item = {
      text: text.value
    };
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    text.value ='';
    platesFunc(items, plates)

}
function platesFunc(itemss, platess){
    platess.innerHTML = itemss.map(item => 
        `<li>
        <input type="checkbox"></input>
        <lable>${item.text}</lable>
        </li>`
       ).join('')
}
 platesFunc(items, plates);
submit.addEventListener('submit', add)