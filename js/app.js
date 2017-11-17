$(document).ready(function(){

    $(document).foundation();
    $('#lightgallery').lightGallery({
      pager: true
    });
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
