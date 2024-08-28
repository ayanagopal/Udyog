$(document).ready(function (){
    $("#toggle-btn").click(function(){
        //change background color
        $("body").toggleClass("change-background")
    }
    )
    
})



$(function(){
    $(".upper").on({
        click : function(){
            $("textarea").toggleClass("caps");
        },
       
    })
})



$(function(){
    $(".font").on({
click : function(){
    $("textarea").toggleClass("fonts")
}
    })
})







$(function(){
    $(".lower").on({
        click : function(){
            $("textarea").toggleClass("lows")
        }
    })
})



$(function(){
    $(".color").on({
        click : function(){
            $("textarea").toggleClass("cols")
        }
    })
})

// $(function() {
//     $(".high").on({
//         click : function(){
//             $(this).toggleClass("highlighter")
//         }
//     })
// })
// $(function() {
//     $("p").on({
//         dblclick : function(){
//             $(this).toggleClass("highlighter")
//         }
//     })
// })



$(function(){
    $(".remove").on({
        click: function(){
            $("textarea").val("");
        }
      
    })
})