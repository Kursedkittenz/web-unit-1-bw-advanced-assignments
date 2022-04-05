// you will need to toggle the visibility off and on with DOM selectors
const open = document.getElementById('open')
const unfolding_container = document.getElementById('unfoldingContainer')
const close = document.getElementById('close')


open.addEventListener('click',()=>{
    unfolding_container.classList.add('show');
})


close.addEventListener('click',()=>{
    unfolding_container.classList.remove('show');
})