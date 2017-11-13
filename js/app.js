$(document).ready(function(){

    $(document).foundation();
    // $(".lazy").slick({
    //   infinite: true,
    //   autoplay: true,
    //   dots: true,
    // });
});

var s = skrollr.init({
  edgeStrategy: 'set',
  easing: {
    WTF: Math.random,
    inverted: function(p) {
      return 1-p;
    }
  }
});
