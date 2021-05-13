//Función para designar al # que con un click se traslade a la seccion señalada
//Además se le indica que se realicepaulatinamente asignandole en este caso 900 milisegundos
$(document).ready(()=>{  
    $("#").click(function(event){
        event.preventDefault()
    let numeral = this.hush;
    $("html").animate({
        scrollTop: $(numeral).offset().top
        }, 
        900
        );
    });
});

//componente de boostrap para utilizar tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//componente de boostrap para utilizar popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


