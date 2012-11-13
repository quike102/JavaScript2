$(function () {
    $("#ejemploTabs").tabs().tabs({
        fx: {
            opacity: "toggle",
            duration: "slow"
        },
        collapsible:true


    });
    $("#acordeon").accordion().accordion({event:"mouseover"});

    $("#miDialogo").dialog({ autoOpen: false });

    $("#rojo, #verde, #azul").slider({
        min: 0,
        max: 255,
        step: 1,
             
        slide: cambiaMarcador

    });

    $("#fecha").datepicker({
        minDate: new Date(),
        maxDate: +40,
        changeMonth: true


    });

    $("#autocompletador").autocomplete({
        source:
        ["c++",
        "java",
        "php",
        "coldfusion",
        "javascript",
        "asp",
        "ruby"]
    });

    var listaPalabras=["c++",
        "java",
        "php",
        "coldfusion",
        "javascript",
        "asp",
        "ruby"]
    

$("#autocompletador2").autocomplete({

        source: function (peticion, respuesta) {
            var coincide = new RegExp("^" + $.ui.autocomplete.escape.Regex(peticion.term), "i");
            respuesta($.grep(listaPalabras, function(item){
                return coincide.test(item);
            }));
        }        
});

$("#radio").buttonset();
$("#Button5").button();
$("#Checkbox1").button({
    icons: {
        primary: "ui-icon-gear",
        secondary:"ui-icon-triangle-1-s"

    }


});


});



function cambiaMarcador() {
    jQuery(function () {
        $("#deslizador").text(
            $("#miDeslizador").slider("value")
            );

        var rojo = $("#rojo").slider("value");
        var azul = $("#azul").slider("value");
        var verde = $("#verde").slider("value");
        var cadenaRGB = ["rgb(", rojo, ",", verde, ",", azul, ")"].join("");
        $("#cajaColor").css({
            backgroundColor: cadenaRGB
        });
        $("#deslizador").text(cadenaRGB);
    });
}

function muestraDialogo() {
    jQuery(function () {
        $("#miDialogo").dialog({
            

            buttons:{
                Ok: function () { $(this).dialog({
                    autoOpen:true, 
                    
                },
                

        });
    });
}

function deshabilita(numeroTab) {
    jQuery(function () {
        $("#ejemploTabs").tabs({disabled:[numeroTab]});
    });
    
}

function sumaUnTabMas(){
    jQuery(function () {
        $("#ejemploTabs").tabs("add","","un nuevo Tab");
    });
}


function quitaUnTab() {
    jQuery(function () {
        $("#ejemploTabs").tabs("remove", "", "un nuevo Tab");
    });
}
