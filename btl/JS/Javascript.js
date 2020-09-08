$(document).ready(function(){
    /*GO TO TOP*/
        $("#Btn img").hide()
        $(window).scroll(function() {
            var t = $(this).scrollTop()
            if (t >= 100)
            {
                $("#Btn img").show(500)

                /* ẨN-HIỆN MENU */
                $("#menuId").css({
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0',
                    opacity: '0.6',
                    zIndex: '9'
                }) 
                $("#menuId").ready(function() {
                    $("#menuId").hover(function() {
                        $("#menuId").css('opacity','1')
                    })
                    $("#menuId").mouseleave(function() {
                        $("#menuId").css('opacity','0.6')
                    })
                })
            }
            else
            {
                $("#Btn img").hide(500)
                $("#menuId").css({
                    position: 'relative',
                    opacity: '1'
            })
            $("#menuId").ready(function() {
                $("#menuId").hover(function() {
                    $("#menuId").css('opacity','1')
                })
                $("#menuId").mouseleave(function() {
                    $("#menuId").css('opacity','1')
                })
            })
            
            }
            if(t>=3600)
                $(".share").hide(1000)
            else
                $(".share").show(1500)

        })
        
        $("#Btn img").click(function(){
            $('html, body').animate({
                'scrollTop': 0
            }, 2000)
        })
         
        /*HOME */
        $("#btctna").click(function() {
            $("html, body").animate({
                scrollTop: $("#ctna")[0].offsetTop + "px"
            }, 2000)
        })
        $("#bttd").click(function() {
            $("html, body").animate({
                scrollTop: $("#tdmn")[0].offsetTop + "px"
            }, 2000)
        })
        $("#btdd").click(function() {
            $("html, body").animate({
                scrollTop: $("#dd")[0].offsetTop + "px"
            }, 2000)
        })

        /*ẨM THỰC 3 MIỀN */
        $("#btdtam").click(function() {
            $("html, body").animate({
                scrollTop: $("#dtat")[0].offsetTop + "px"
            }, 2000)
        })
        $("#btbcn").click(function() {
            $("html, body").animate({
                scrollTop: $("#bcn")[0].offsetTop + "px"
            }, 2000)
        })
        $("#btct").click(function() {
            $("html, body").animate({
                scrollTop: $("#ct")[0].offsetTop + "px"
            }, 2000)
        })
        $("#btcch").click(function() {
            $("html, body").animate({
                scrollTop: $("#cch")[0].offsetTop + "px"
            }, 2000)
        })

        /* SLIDE*/
        $("#listId").hide()
        $("#btnDown").click(function(){
            $("#listId").slideDown(1000)
        })
        $("#btnUp").click(function(){
            $("#listId").slideUp(1000)
        })

        /*LÊN_XUỐNG BUTTON*/
        $("#btnUp").hide()
        $("#btnDown").click(function(){
            $("#btnUp").show()
            $(this).hide()
        })
        $("#btnUp").click(function(){
            $("#btnDown").show()
            $(this).hide()
        })
        
       /*HIỆN ẢNH (LỄ) */
        $(".thumbail img").click(function(){
            $("#mainImg").attr("src", $(this).attr('src'))
        })
        $(".btn a").click(function(){
            var c=$(this).attr('data')
            $("#mainImg").attr("src", `../images/le_${c}.jpg`)
        })  

})









