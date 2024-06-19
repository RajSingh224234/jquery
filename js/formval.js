$(document).ready(function(){
    $("#inp1").focus(function(){
        $(this).val("Raj Singh");
    });
    $("#inp1").blur(function(){
        $(this).val("");
    });

    $("#inp2").focus(function(){
        $(this).val("Mr. Jang Bahadur Singh");
    });
    $("#inp2").blur(function(){
        $(this).val("");
    });

    $("#inp3").focus(function(){
        $(this).val("Mrs. Rajeshwari Singh");
    });
    $("#inp3").blur(function(){
        $(this).val("");
    });

    $("#inp4").focus(function(){
        $(this).val("Khaira");
    });
    $("#inp4").blur(function(){
        $(this).val("");
    });

    $("#inp5").focus(function(){
        $(this).val("224234");
    });
    $("#inp5").blur(function(){
        $(this).val("");
    });

    $("#inp6").focus(function(){
        $(this).val("Dr. Ashok Kumar Smarak PG College");
    });
    $("#inp6").blur(function(){
        $(this).val("");
    });


    $("#inp7").focus(function(){
        $(this).val("Bachelor Of Commerce");
    });
    $("#inp7").blur(function(){
        $(this).val("");
    });

    $("#inp8").focus(function(){
        $(this).val("Ayodhya");
    });
    $("#inp8").blur(function(){
        $(this).val("");
    });
    
    $("#btn").click(function(){
       alert("Are You Sure To Submit it!!!")
    });
    $("input").select(function(){
        $(this).css("background","skyblue");
    })
    $("input").blur(function(){
        $(this).css("background","#fff");
    })
})