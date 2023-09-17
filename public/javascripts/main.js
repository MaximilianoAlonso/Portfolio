const $ = (id) => document.querySelector(id)
/* Open Menu */

$(".menuBars").addEventListener("click", () => {
    $(".menu").classList.toggle("verMenu");
    $(".one").classList.toggle("verItemsOne");
    $(".two").classList.toggle("verItemsTwo");
    $(".three").classList.toggle("verItemsThree");
    $(".four").classList.toggle("verItemsFour");
});
/* Close Menu */
$(".closeIcon").addEventListener("click", () => {
    $(".menu").classList.toggle("verMenu");
    $(".one").classList.toggle("verItemsOne");
    $(".two").classList.toggle("verItemsTwo");
    $(".three").classList.toggle("verItemsThree");
    $(".four").classList.toggle("verItemsFour");
})


/* agrega efecto al tituo de la seccion y cierra el menu */
function clickItem(id, id2){
    $(id).addEventListener("click", () => {
        $(id2).classList.toggle("itemClick");
        $(".menu").classList.toggle("verMenu");
        $(".one").classList.toggle("verItemsOne");
        $(".two").classList.toggle("verItemsTwo");
        $(".three").classList.toggle("verItemsThree");
        $(".four").classList.toggle("verItemsFour")
        
    })
}

clickItem(".one", ".aboutTitle")
clickItem(".two", ".skillsTitle")
clickItem(".three", ".projectsTitle")
clickItem(".four", ".contactTitle")



/* Funcion para retrasar el ancla 800ms */
function preventLink(id, time){
    $(id).addEventListener('click', function(event) {
    event.preventDefault();
    setTimeout(function() {
      
        window.location.href = event.target.getAttribute('href');
    }, time);
});
}
preventLink(".one", 800)
preventLink(".two", 800)
preventLink(".three", 800)
preventLink(".four", 800)


/* Sweet Alert */
$("#buttonForm").addEventListener('click', function(event) {
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Estaremos en contacto!!',
  showConfirmButton: false,
  timer: 1500
})
})