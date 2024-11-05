

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');


let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 4000);
function reloadSlider(){

     slider.style.left = -items[active].offsetLeft + 'px';
    
     let last_active_dot = document.querySelector('.slider .dots li.active');
     last_active_dot.classList.remove('active');
     dots[active].classList.add('active');
 
     items.forEach((item, index) => {
         let content = item.querySelector('.content');
         if (content) {
             content.classList.remove('animate');  
             content.style.display = index === active ? 'flex' : 'none'; 
         }
     });

     let activeContent = items[active].querySelector('.content');
     if (activeContent) {
         activeContent.style.display = 'flex'; 
         setTimeout(() => {
             activeContent.classList.add('animate'); 
         }, 50); 
     }

     clearInterval(refreshInterval);
     refreshInterval = setInterval(()=> {next.click()}, 4000);

}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

window.onload = function(event){
    reloadSlider();
};