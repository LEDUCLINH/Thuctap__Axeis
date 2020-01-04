const triggers = document.querySelectorAll('.cool >li');
const backgroundDrop = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function dropDown(e) {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'),150);
    backgroundDrop.classList.add('open');
    const dropdown = this.querySelector('.dropdown');
    const position = dropdown.getBoundingClientRect();
    console.log(nav.offsetTop)
    console.log(position.top)
    backgroundDrop.style.setProperty('width', `${position.width}px`);
    backgroundDrop.style.setProperty('height', `${position.height}px`);
    backgroundDrop.style.setProperty('transform', `translate(${position.left-nav.offsetLeft}px, ${position.top-nav.offsetTop}px)`);

}

function nodropDown(e) {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    backgroundDrop.classList.remove('open');
}
triggers.forEach( trigger => trigger.addEventListener('mouseenter', dropDown))
triggers.forEach( trigger => trigger.addEventListener('mouseleave', nodropDown))