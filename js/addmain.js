$(document).ready(function() {

	'use strict';
// ========================================================================= //
//  Get markerposition
// ========================================================================= //
$(window).scroll(function (){
	$(".marker-animation").each(function(){
	  var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
	  var scroll = $(window).scrollTop(); //スクロールの位置を取得
	  var windowHeight = $(window).height(); //ウインドウの高さを取得
	  if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
	    $(this).addClass('markeractive'); //クラス「active」を与える
	  }
	});
});

// ========================================================================= //
//  Get fadeInposition ：うまく動かない。１箇所すぎたら全てfadeInしてしまう。addclassは検証ツールで確認したところ、それぞれの位置でaddclassしてるようです。なぜだー。
// ========================================================================= //
$(window).scroll(function (){
	$(".fadeIn-animation").each(function(){
	  var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
	  var scroll = $(window).scrollTop(); //スクロールの位置を取得
	  var windowHeight = $(window).height(); //ウインドウの高さを取得
	  if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
		//$(this).fadeIn(3000); //fadeInする
		$(this).addClass('fadeInactive') //クラス「FadeInactive」を与える
	  }
	});
});

// ========================================================================= //
//  Typed Js 上書き処理
// ========================================================================= //
  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["絶対になります！", "エンジニアに！", "倒置法を使ってみました。", "だから何だって？", "すみませんw"],
      typeSpeed: 100,
      loop: true,
    });
  });

});
