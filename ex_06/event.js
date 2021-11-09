
function buttonP(){

    $(document).ready(function () {

        $("p").show();
    
        $("#btn1").click(function(){
             $("p").toggle();
        });

    });
}

buttonP()