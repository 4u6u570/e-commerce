//variables
const menuOn= document.getElementById("menu-on");



/*menu*/
menuOn.addEventListener('click', function(){
document.body.classList.toggle('visible_menu')
});

var flicking = new eg.Flicking(".flicking", {
    circular: true,
    renderOnlyVisible: true,
    gap: 10,
});

flicking.addPlugins(new eg.Flicking.plugins.Fade());

