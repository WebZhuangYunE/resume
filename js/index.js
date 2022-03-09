/*--
Author: ZhuangYunE
Author URL:
Date：2022-3-8
--*/ 
 
 
 $(function () {
     
     var mynavbarT=$(".my-navbar").offset().top;
     var navLength=$(".my-navbar li").length;
        $(".navbar-nav>li>a").click(function (event) {
            event.preventDefault();
            $(this).addClass("active").parent().siblings().find("a").removeClass("active");
            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
            var curTop=$(this.hash).offset().top;
             if(curTop >=mynavbarT){
                $(".my-navbar").addClass("navbar-fixed-top");
                $("#back-top").fadeIn(1000);
            }else{
                $(".my-navbar").removeClass(" navbar-fixed-top");
                $("#back-top").fadeOut(1000);
            }

        });
        //导航目标跳转路径

         $(window).scroll(function(){
              var curTop=$(this).scrollTop();
            if(curTop >=mynavbarT){
                $(".my-navbar").addClass("navbar-fixed-top");
                $("#back-top").fadeIn(1000);
            }else{
                $(".my-navbar").removeClass(" navbar-fixed-top");
                $("#back-top").fadeOut(1000);
            }
            for(let i =0;i<navLength;i++){
                var top = $('#info-details>section').eq(i).offset().top;
                var scrop = $("html,body").scrollTop();
                if(scrop>top){
                    $('nav li').eq(i).find("a").addClass("active");
                    $('nav li').eq(i).siblings().find("a").removeClass("active");
                }
            }
           
        });
       // 导航条、返顶部按钮显示与否,选中状态与否
    


        $('#back-top').click(function(){
            $("html,body").animate({scrollTop: $('header').offset().top}, 1000);
            return false;
        });
        // 返回页面顶部
        
       
});

		
