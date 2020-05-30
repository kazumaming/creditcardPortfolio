$(function(){
  // JCB CARD W 表示矢印
  $('.cardframe-one').hover(
    function(){
      $('#desr').slideDown();
    },
    function(){
      $('#desr').slideUp();
    }
  );
  $('.cardframe-one, .cardframe-two').hover(function(){
    if($('#goii').hasClass('oki')){
      $('#goii').removeClass('oki');
      $('#goii').removeClass('oki');
      $('#goii').addClass('oku');
    } else{
      $('#goii').removeClass('oku');
      $('#goii').addClass('oki');
    }
  });

  // 三井住友カード表示矢印
  $('.cardframe-two').hover(
    function(){
      $('#desh').slideDown();
    },
    function(){
      $('#desh').slideUp();
    }
  );
  $('.cardframe-two').hover(function(){
    if($('#jty').hasClass('hj')){
      $('#jty').removeClass('hj');
      $('#jty').addClass('jh');
    } else{
      $('#jty').removeClass('jh');
      $('#jty').addClass('hj');
    }
  });
  // 楽天カード表示矢印
  $('.cardframe-three').hover(
    function(){
      $('#dehh').slideDown();
    },
    function(){
      $('#dehh').slideUp();
    }
  );
  $('.cardframe-three').hover(function(){
    if($('#fji').hasClass('lo')){
      $('#fji').removeClass('lo');
      $('#fji').addClass('ol');
    } else{
      $('#fji').removeClass('ol');
      $('#fji').addClass('lo');
    }
  });
  // headerスライドショー
  var loop = setInterval(function() {
    // li先頭要素のクローンを作成
    var clone = $(".slide li:first").clone(true);
    // li先頭要素のマージンレフトにマイナスを指定しアニメーションさせる
    $(".slide li:first").animate({
    marginLeft : "-200%"
    },{
    duration : 4000,    
    complete : function() {
        // 処理完了時に先頭要素を削除
        $(".slide li:first").remove();
        // クローンをliの最後に追加
        clone.clone(true).insertAfter($(".slide li:last"));
        $('.slide li:first').removeClass('non-active');
        $('.slide li:last').addClass('non-active');
    }
    });
}, 0);

    
  
  // header自動スライド（動作せず）
//   var loop = setInterval(function() {
//   var clone = $(".slide li:first").clone(true);
//   $('.slide li:first').animate({
//     marginLeft : "-200%"
//   }, 3000,
//   function(){
//     $('.slide li:last').removeClass('active');
//     $('.slide li:first').addClass('active');
//     $('.slide li:last').animate({
//       marginLeft : "-200%"
//     }, 3000);
//   });
// },0);

///  検索ボタンクリック時検索機能動作せず
// $('#kensaku').click(function(){
//   var url = $('input, label').click(function(){
//     $(this).attr('class');
//   });
//   var url = $('input').attr('class');
//   $('input').removeClass(url);
//   if($('.card-choice').hasClass(url)){
//     $(url).css('background-color', 'red');
//   } else{
//     $('.card-choice').not(url).css('background-color', 'blue');
//   }
//   $(url).css('background-color', 'red');
//   $('.card-choice').not(url).css('background-color', 'blue');
// });

// inputボタン押した時のheader背景画像切り替え
$('.visa-choice').click(function(){
    // css({
    //   'background-image':'url(vbm_blugrad01.jpg)',
    //   'background-size':'80px',
    //   'background-repeat':'no-repeat',
    //   'background-position':'center'
    //   })
    $('.main-bg').animate({
     'opacity':'0'
    }, 1000,
    'linear',
    function(){
      $('.main-bg').css({
        'background-image':'url(vbm_blugrad01.jpg)',
        'background-size':'224px',
        'background-repeat':'no-repeat',
        'background-position':'center 215px',
        'opacity':'1',
        'transition':'1s'
      });
      $('header h1').css({
        'color':'#333',
        'transition':'3s'
      });
    });
  });

  $('.mastercard-choice').click(function(){
    $('.main-bg').animate({
     'opacity':'0'
    }, 1000,
    'linear',
    function(){
      $('.main-bg').css({
        'background-image':'url(https://bitdays.jp/wp-content/uploads/2019/01/mastercard.gif)',
        'background-size':'300px',
        'background-repeat':'no-repeat',
        'background-position':'center 185px',
        'opacity':'1',
        'transition':'1s'
      });
      $('header h1').css({
        'color':'#333',
        'transition':'3s'
      });
    });
  });

  $('.jcb-choice').click(function(){
    $('.main-bg').animate({
     'opacity':'0'
    }, 1000,
    'linear',
    function(){
      $('.main-bg').css({
        'background-image':'url(header-logo.png)',
        'background-size':'170px',
        'background-repeat':'no-repeat',
        'background-position':'center 185px',
        'opacity':'1',
        'transition':'1s'
      });
      $('header h1').css({
        'color':'#333',
        'transition':'3s'
      });
    });
  });

  $('.amex-choice').click(function(){
    $('.main-bg').animate({
     'opacity':'0'
    }, 1000,
    'linear',
    function(){
      $('.main-bg').css({
        'background-image':'url(Amex_logo.jpg)',
        'background-size':'150px',
        'background-repeat':'no-repeat',
        'background-position':'center 170px',
        'opacity':'1',
        'transition':'1s'
      });
      $('header h1').css({
        'color':'#333',
        'transition':'3s'
      });
     
    });
  });

  
//  検索ボタンクリック時検索機能動作せず
  // var searchBox = '.search-box'; // 絞り込む項目を選択するエリア
  // var listItem = '.list_item';   // 絞り込み対象のアイテム
  // var hideClass = '.non-active';     // 絞り込み対象外の場合に付与されるclass名
  //     // 絞り込み項目を変更した時
  //     $(document).on('change', searchBox + ' input', function() {
  //         search_filter();
  //     });
  // // $('input label').click(function(){
  // //   search_filter();
  // // });
  // /**
  //  * リストの絞り込みを行う
  //  */
  // function search_filter() {
  //     // 非表示状態を解除
  //     $(listItem).removeClass(hideClass);
  //     for (var i = 0; i < $(searchBox).length; i++) {
  //         var name = $(searchBox).eq(i).find('input').attr('name');
  //         // 選択されている項目を取得
  //         var searchData = get_selected_input_items(name);
  //         // 選択されている項目がない、またはALLを選択している場合は飛ばす
  //         if(searchData.length === 0 || searchData[0] === '') {
  //             continue;
  //         }
  //         // リスト内の各アイテムをチェック
  //         for (var j = 0; j < $(listItem).length; j++) {
  //             // アイテムに設定している項目を取得
  //             var itemData = $(listItem).eq(j).data(name);
  //             // 絞り込み対象かどうかを調べる
  //             if(searchData.indexOf(itemData) === -1) {
  //                 $(listItem).eq(j).addClass(hideClass);
  //              }
  //           }
  //       }
  //   }
  // /**
  //  * inputで選択されている値の一覧を取得する
  // //  * @param  {String} name 対象にするinputのname属性の値
  // //  * @return {Array}       選択されているinputのvalue属性の値
  // //  */
  // // function get_selected_input_items(name) {
  // //     var searchData = [];
  // //     $('[name=' + name + ']:checked').each(function() {
  // //         searchData.push($(this).val());
  // //     });
  // //     return searchData;
  //  }
  
  //  検索ボタンクリック時検索機能動作せず
//   $('#kensaku').click(function(){
//     $('.list-item').removeClass('non-active');
//     var result = $('input:checked').val();
//     var $kind = $('.list-item').data('kind');
//     if(result === $kind){
//     $('.list-item').css({'background-color': 'red'});
//     } else{
//     $('.list-item').addClass('non-active');
//     }
//  });

//  検索ボタンクリック時検索機能動作せず
  // $('#kensaku').click(function(){
  //   var kind = $(this).data('kind');
  //   search_filter(kind);
  // });
  // function search_filter(kind) {
  //   // 非表示状態を解除
  //   $('.list-item').removeClass('non-active');
  //   // 値が空の場合はすべて表示
  //   if(group === '') {
  //       return;
  //   }
  //   // リスト内の各アイテムをチェック
  //   for (var i = 0; i < $('.list-item').length; i++) {
  //       // アイテムに設定している項目を取得
  //       var itemData = $('.list-item').eq(i).data('kind');
  //       // 絞り込み対象かどうかを調べる
  //       if(itemData !== kind) {
  //           $('.list-item').eq(i).addClass('.non-active');
  //       }
  //    } 
  // }

  //  カードブランド検索機能
     $('input[name="kind"]:radio').change(function(){
      if($('[id=jcb]').prop('checked')){
        $('.list-item').fadeOut();
        $('.jcb-item').fadeIn(1800);
      } else if($('[id=visa]').prop('checked')){
        $('.list-item').fadeOut();
        $('.visa-item').fadeIn(1800);
      } else if($('[id=mastercard]').prop('checked')){
        $('.list-item').fadeOut();
        $('.mastercard-item').fadeIn(1800);
      } else if($('[id=amex]').prop('checked')){
        $('.list-item').fadeOut();
        $('.amex-item').fadeIn(1800);
      }
      
      
     });



    //  pagetop機能
    // 失敗
    // $('#page-top').hide();
    // $('.list').mouseover(function(){
    //   $('#page-top').show();
    // });

    // 失敗
    //  $('.list').hover(
    //   function(){
    //   var $position = $('.list').offset().top;
    //   var $top = $('header').offset().top;
    //   $('#page-top').show();
    //  },
    //  function(){
    //   $('#page-top').hide();
    //  });

   // 失敗
    // var $position = $('.list').offset().top;
    // var $top = $('header').offset().top;
    //   if($position){
    //     $('#page-top').show();
    //   } else if($top === 0){
    //     $('#page-top').hide();
    //   }
    
    // 成功(pagetop出現)
    var $pageTop = $('#page-top');
    $pageTop.hide();
    $(window).scroll(function(){
      if($(this).scrollTop() > 500){
        $pageTop.fadeIn();
      } else{
        $pageTop.fadeOut();
      }
    });

    // pagetopクリック時topへ
    $pageTop.click(function(){
      var html = $('html').attr('href', '#osusumeTemplate');
      var position = $(html).offset().top;
      $('html, body').animate({
        'scrollTop' : position
      }, 500)
    });

    



    
    
     
  
    
  
  

});



