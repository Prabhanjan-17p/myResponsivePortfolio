function openSlideBar(){
    const slide = document.querySelector('.slidebar')
    slide.style.display = 'block'
    
}
function hideSlideBar(){
    const slide = document.querySelector('.slidebar')
    slide.style.display = 'none'
}

let sections= document.querySelectorAll('section')
let navlink = document.querySelectorAll('nav ul li')
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('nav ul li[href*='+id+']').classList.add('active')
            })
        }
    })
}