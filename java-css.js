$(document).ready(function()
{
    $("#Crear").click(function()
    {

        $("body").append("<div class=container></div>"); 
        $(".container").css({"margin": "0 auto"});

        for(i=0; i<25; i++)
        {
            $(".container").append("<div class=x></div>"); 
        }

        $(".x").css
        ({
            "background-color": "cyan","width":"100px","border": "1px solid black","height":"100"
        });

});
});