// const spacing = document.querySelector('input[name="spacing"]');
const blur = document.querySelector('input[name="blur"]');
const spacing = document.querySelector('input[name="spacing"]');
const base = document.querySelector('input[name="base"]');

blur.addEventListener('change', function(e){
    document.querySelector('img').style.filter = `blur(${e.target.value}px)`
})
spacing.addEventListener('change', function(e){
    document.querySelector('img').style.padding = `${e.target.value}px`
})
base.addEventListener('mousemove', function(e){
    document.querySelector('img').style.background = `${e.target.value}`
})