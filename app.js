$(document).ready(function(){
    $.mobile.defaultDialogTransition = 'none';
    $.mobile.defaultPageTransition = 'none';
});
$.mobile.page.prototype.options.headerTheme = "a";
$.mobile.page.prototype.options.contentTheme = "a";
$.mobile.page.prototype.options.footerTheme = "a";
$("div[data-role='page']").live('pagecreate', function (event) {
    $("a[data-rel='back']").remove();
});
