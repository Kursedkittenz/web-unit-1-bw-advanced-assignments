// most of the work here will be done with logic and a little math
// what's the usual measurement of a progress bar? you'll need to measure the same way here
// use that measurement to update the style of your inner fill element as you scroll


document.addEventListener('DOMContentLoaded',()=>{
    const progressbarinner = document.querySelector('.progressbarinner')

    window.addEventListener('scroll',()=>{
        let h = document.documentElement; // defined for easier reading
        let st = h.scrollTop || document.body.scrollTop;
        let sh = h.scrollHeight || document.body.scrollHeight;
        let percent =st/ (sh -h.clientHeight) * 100
        let rounded = Math.round(percent)
        progressbarinner.style.width = percent + '%'
        progressbarinner.innerText = rounded + '%';
    })

})


//add event listener for when DOM loads
//point towards class of div
//assign variables for document height, height scrolled
//calc % scrolled