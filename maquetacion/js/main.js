//variables
const menuOn= document.getElementById("menu-on");



/*menu*/
menuOn.addEventListener('click', function(){
document.body.classList.toggle('visible_menu')
});

var flicking = new eg.Flicking("#wrapper", {
    gap: 10,
    circular: true,
  });

