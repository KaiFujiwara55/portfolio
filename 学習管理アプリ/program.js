var m=0;
var e=0;
var p=0;
var g=0;
var x=0;
var s=0;
var n=0;
var hyou="a1";
//変数の初期値

$(function(){

  $(".mpush").click(function(){
   //数学ボタンのクリック時の機能
    m = m + 0.25
    g = g + 0.25
    n = n + 1
　　//変数の加算処理
    switch(m%1){
　　//数学の合計時間処理
      case 0:$(".mgoukei").html(m+"時間");　　//余りが0の時の表示
      break;
      case 0.25:$(".mgoukei").html(m-0.25+"時間15分");　　//余りが0.25の時は〇時間15分となる
      break;
      case 0.5:$(".mgoukei").html(m-0.5+"時間30分");　　//余りが0.50の時は〇時間30分となる
      break;
      case 0.75:$(".mgoukei").html(m-0.75+"時間45分");　　//余りが0.75の時は〇時間45分となる
      break;
    }


    hyou = "a" + n;　　//class名の指定を変数nによって変化させる
    $("."+hyou).css("background-color","blue");　//表の色を青色に変える
  });

  $(".epush").click(function(){
   //英語ボタンのクリック時の処理
    e = e + 0.25
    g = g + 0.25
    n = n + 1
　　//変数の加算処理
    switch(e%1){
　　//英語の合計時間処理
      case 0:$(".egoukei").html(e+"時間");　　//余りが0の時の表示
      break;
      case 0.25:$(".egoukei").html(e-0.25+"時間15分");　　//余りが0.25の時は〇時間15分となる
      break;
      case 0.5:$(".egoukei").html(e-0.5+"時間30分");　　//余りが0.50の時は〇時間30分となる
      break;
      case 0.75:$(".egoukei").html(e-0.75+"時間45分");　　//余りが0.75の時は〇時間45分となる
      break;
    }

    hyou = "a" + n;　　
    $("."+hyou).css("background-color","orange");
　　//表の処理
  });

  $(".ppush").click(function(){
　　//物理ボタンのクリック時の処理
    p = p + 0.25;
    g = g + 0.25;
    n = n + 1;
   //変数の加算処理
    switch(p%1){
　　//表示方法の処理
      case 0:$(".pgoukei").html(p+"時間");
      break;
      case 0.25:$(".pgoukei").html(p-0.25+"時間15分");
      break;
      case 0.5:$(".pgoukei").html(p-0.5+"時間30分");
      break;
      case 0.75:$(".pgoukei").html(p-0.75+"時間45分");
      break;
    }

    hyou = "a" + n;
    $("."+hyou).css("background-color","purple");
　　//表の処理
  });

  $("button").click(function(){
　　//どのボタンがクリックされても起こる処理
    switch(g%1){
　　　//合計時間の処理
      case 0:$(".goukei").html(g+"時間");
      break;
      case 0.25:$(".goukei").html(g-0.25+"時間15分");
      break;
      case 0.5:$(".goukei").html(g-0.5+"時間30分");
      break;
      case 0.75:$(".goukei").html(g-0.75+"時間45分");
      break;

    }
  });

  $(".riset").click(function(){　　
  //リセットボタンが押された時の処理
    n = 0;
　//マス目のクラス指定をまた最初から始める　
    $("th").css("background-color","white");
　//すべてのマス目の背景を白にする

  })

  $(".random").click(function(){
　//ランダムボタンのクリック時の処理
    x=Math.round(Math.random()*10);　　
//ランダムな数字（0.○）作り、それを１０倍し変数xを定めた
      if(x<=3){　 //xが３以下の時、変数ｓを数学とする
        s="数学";　
      }else if(x<=7){　　//xが４以上７以下の時、変数sを英語とする
        s="英語";
      }else{　　//xが８以上１０以下の時、変数sを物理とする
        s="物理";
      }

    $(".ruret").html(s)  //html上のclass ruretを変数sに書き換える

  });



  });
