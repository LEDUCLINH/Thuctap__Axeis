const links = document.querySelectorAll('a');
const span = document.createElement('span');
let lastLink;
function followLink(e) {
    const link = this.getBoundingClientRect();
    // gắn đối tượng hiển thi trên màn hình 
    span.classList.add('highlight');
    span.style.height = `${link.height}px`;
    span.style.width = `${link.width}px`;
    document.body.appendChild(span);
    span.style.transform = `translate(${link.left}px, ${link.top+window.scrollY}px)`;
    
}

 links.forEach(link => {
     link.addEventListener('mouseover', followLink)
 })

