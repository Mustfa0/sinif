$(".ertangizli").slideUp();
$(".ertansizgizli").slideUp();
$(".sss").slideUp();


var ertangizli=false;
$(".ertanbuton").on("click",function(){
    if(!ertangizli){
        $(".ertangizli").slideDown();
        ertangizli=true;
    }else{
        $(".ertangizli").slideUp();
        ertangizli=false;
    }
});

var ertansizgizli=false;
$(".ertansizbuton").on("click",function(){
    if(!ertangizli){
        $(".ertansizgizli").slideDown();
        ertangizli=true;
    }else{
        $(".ertansizgizli").slideUp();
        ertangizli=false;
    }
});

var sss=false;
$(".sssbuton").on("click",function(){
    if(!sss){
        $(".sss").slideDown();
        sss=true;
    }else{
        $(".sss").slideUp();
        sss=false;
    }
});
