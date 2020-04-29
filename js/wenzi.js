/* 鼠标点击文字特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        // var a = new Array("❤富强❤","❤民主❤","❤文明❤","❤和谐❤","❤自由❤","❤平等❤","❤公正❤","❤法治❤","❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤");
        var a = new Array("富强","❤KJ❤KJ","民主","❤KJ❤KJ","文明","❤KJ❤KJ","和谐","❤KJ❤KJ","自由","❤KJ❤KJ","平等","❤KJ❤KJ","公正","❤KJ❤KJ","法治","❤KJ❤KJ","爱国","❤KJ❤KJ","敬业","❤KJ❤KJ","诚信","❤KJ❤KJ","友善","❤KJ❤KJ");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
