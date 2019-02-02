$(window).scroll(function(){             // عند حدث تحريك الصفحة صعودا أو نزولا
    if($(this).scrollTop()>=500){              // اذا كانت قيمة نزول الصفحة أكثر من 500 (يعني ترفع الصفحة للأعلى 
        $("#navBar").addClass("noTransparrent"); // يطبق صنف تنسيقات جديد واضافته الى الأي دي
    }
    else{                                   // والا اذا قمنا بالصعود مسافة اقل من 500
        $("#navBar").removeClass("noTransparrent"); // يقوم بإزالة الصنف 
    }
});

$(document).ready(function(){
    $("a.scroll").on('click', function(event){  //عند حدث النقر على اي رابط تشعبي يمتلك صنف التنسيقات سكرول
                                            // يتم تنفيذ الشيفرة التالية
        var hash = this.hash;  // تعريف هاش والتي تعني القيمة ضمن الخاصية (اتش ريف )وهي الروابط التنقل ,, الحصول على هذي القيم
                 // ثم تحريك الصفحة الى هذي القيمة
        $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){}); // كل قفزة 800 مل ثانية
    });

    $('.timer').countTo();

    $(function () {
        $("#commentForm").validate(); // يقوم بالتحقق من جميع الـ required ضمن الأي دي commentForm
    });

});