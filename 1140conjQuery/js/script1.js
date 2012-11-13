$(function () {
    $("#ejemploTabs").tabs().tabs({
        fx: {
            opacity: "toggle",
            duration: "slow"
        },
        collapsible:true
    });
    $("#acordeon").accordion().accordion({ event: "mouseover" });
    $("#miDialogo").dialog({ autoOpen: false });
    $("#rojo, #verde, #azul").slider({
        min: 0,
        max: 255,
        step: 1,
        slide: cambiaMarcador
    });
    $("#fecha").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "-25:+25",
        showButtonPanel: true,
        numberOfMonths: 1,
        dateFormat: "D mm yy",
        closeText: "cerrar",
        currentText: "HOY",
        dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        firstDay: 1,
        //monthNames : ["Enero","Febrero"...
        //monthNamesShort: ["Ene","Feb"...
        nextText: "Siguiente",
        prevText: "Anterior",
   

    });
    $("#autocompleta").autocomplete({
        source:["c++","java","php","coldfusion","javascript","asp","ruby"]
    });
    var listaPalabras=["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
    $("#autocompleta2").autocomplete({
        source: function (peticion, respuesta) {
            var coincide = new RegExp("^" + $.ui.autocomplete.escapeRegex(peticion.term), "i");
            respuesta($.grep(listaPalabras, function (item) {
                return coincide.test(item);
            }));
        }
    });

    $("#radio").buttonset();
  
    $("#progreso").progressbar({
        value: 66
    });

});

function cambiaMarcador() {
    jQuery(function () {
        var rojo = $("#rojo").slider("value");
        var azul = $("#azul").slider("value");
        var verde = $("#verde").slider("value");
        var cadenaRGB = ["rgb(", rojo, ",", verde, ",", azul, ")"].join("");
        $("#cajaColor").css({
            backgroundColor: cadenaRGB
        });
        $("#deslizador").text(cadenaRGB);
        $("#progreso").progressbar({
            value: rojo
        });
    });

}
function muestraDialogo() {
    jQuery(function () {
        $("#miDialogo").dialog({
            autoOpen: true,
            buttons: {
                Ok:function () {$(this).dialog("close");}
            },
            dialogClass:"alert"
        });
    });

}

function deshabilita(numeroTab) {
    jQuery(function () {
        $("#ejemploTabs").tabs({
            disabled: [numeroTab,numeroTab+1]
        });
    });


}

function ponUnTabMas() {
    jQuery(function () {
        $("#ejemploTabs").tabs("add","","un nuevo Tab");
    });
}

function quitaUnTabMas() {
    jQuery(function () {
        $("#ejemploTabs").tabs("remove",1);
    });
}