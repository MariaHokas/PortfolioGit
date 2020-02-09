$(function () {
    $(document).scroll(function () {
      var $nav = $(".topnav, .topnav p, .navcontent");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });