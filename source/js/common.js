// JS MENU
var $open = $('.page-header__toggle');
var $menu = $('.page-header__menu');


$open.on('click', function () {
if (!$menu.hasClass('active')) {
$menu.slideDown().toggleClass('active');
$open.toggleClass('closed');
} else {
  $menu.fadeOut().removeClass('active');
  $open.removeClass('closed');
}

});
