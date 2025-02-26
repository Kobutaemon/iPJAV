$(function() {

    // スライドショー
    $(".slide-show").bxSlider({
        easing: "ease",
        auto: true,
        controls: false,
        speed: 1000,
    });

    // スクロールフェードイン
    $(window).scroll(function (){
        $(".fade-out").each(function(){
            var imgPos = $(this).offset().top; //documentから見た要素の位置
            var scroll = $(window).scrollTop(); //現在の画面スクロールの位置取得、$()の中に入れたもののスクロール位置を取得するらしい。
            var windowHeight = $(window).height(); //ウィンドウの高さ取得
            if (scroll > imgPos - windowHeight + windowHeight/5){ //scroll > imgPosだけだと画面の一番上に来た時にフェードインしてしまうので、遅い。そこで基準となるimgPosの数値を小さくすることで、画面の一番上から少し下に要素が来たときにフェードインするようになる。
            $(this).addClass("fade-in");
            } else {
            $(this).removeClass("fade-in");
            }
        });
    });
})