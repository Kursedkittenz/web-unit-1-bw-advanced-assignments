// you need to create DOM selectors to grab the correct HTML elements and update their styles to the opposite theme's css classes when you want to toggle the theme off and on

const checkbox = document.getElementById("checkbox")

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

//declare variable to point to input checkbox
//addEventListener, 'change' to reassign class for body to .dark which is defined in CSS
