/**
 *
 * User: zx
 * Date: 13-11
 */
(function ($) {
    var Index={
        /**
         * 初始化方法,用于功能函数的入口
         * @param {string}
         * @example
         **/
        init:function(){
            //绑定事件
            this.reSize();
        },
        /**
         * 窗体变化
         * @param {string}
         * @example
         **/
        reSize:function(){
            var _this = this;
            var winH=$(window).height();
            $('.main').height(winH - $('.header').height());
        }
    };

    $(document).ready(function ($) {
        if($('body').hasClass('home_page')) {
            Index.init();
        }
    });
    $(window).resize(function(){
        if($('body').hasClass('home_page')) {
            Index.reSize();
        }
    });
    $(window).scroll(function(){
        if($('.pho_picCon').length > 0) {
            var top = $(window).scrollTop() - ($('.pho_picCon').height())/2;
            $('.pho_picCon').css({'marginTop':top});
        }
    });
})(jQuery);
