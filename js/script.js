$(function () {

    let rovnice = {
        amplituda: 0,
        uRychlost: 0,
        cas: 0,
        odchylka: 0,
        faze: function () {
            return Math.sin(this.cas * (this.uRychlost*Math.PI/180));
        },
        vypocetOdchylky: function () {
            return this.amplituda * this.faze();
        },
        vypocetAmplitudy: function () {
            return this.odchylka / this.faze();
        },
        vypocetCasu: function () {
            return ((Math.asin(this.odchylka/this.amplituda))/(this.uRychlost*Math.PI/180));
        },
        vypocetURychlosti: function () {
            return ((Math.asin(this.odchylka/this.amplituda))/this.cas)/Math.PI*180
        }

    }

    $("input").change(function(){
        this.value = Number(this.value) 
    });

    $("#reset").on("click", function () {
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = 0;
        }
    });

    $('.form-check').on('change', function() {
        var i = ($('input:checked').val()); 
        var options = [".odchylka", ".amplituda", ".urychlost", ".cas"];
        $(":input").prop('disabled', false);
        console.log(options[i]);
        $(options[i]).prop('disabled', true);
    });

    $("#vypocet").on("click", function () {
        rovnice.amplituda = $(".amplituda").val();
        rovnice.uRychlost = $(".urychlost").val();
        rovnice.cas = $(".cas").val();
        rovnice.odchylka = $(".odchylka").val();
        console.log($('input:checked').val())
        console.log(rovnice);
        switch (Number($('input:checked').val())) {
            case 0:
                $(".odchylka").val(rovnice.vypocetOdchylky());
                break;
            case 1:
                $(".amplituda").val(rovnice.vypocetAmplitudy());
                break;
            case 2:
                $(".urychlost").val(rovnice.vypocetURychlosti());
                break;
            case 3:
                $(".cas").val(rovnice.vypocetCasu());
                break;     
        }
    });
});