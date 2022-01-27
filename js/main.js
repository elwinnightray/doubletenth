// 滑動下滑
$(function () {
	// $('.trangel').click(function() {
    //     $('html, body').animate({ scrollTop: $("#tab1 .part").offset().top}, 600);
	// });
	$('.top').click(function() {

		$('html, body').animate({ scrollTop: $(".part").offset().top}, 600);
	});
});



 //tab
 $(document).ready(function() {
    $(".myTabs").each(function() {

        var $myTabs = $(this);

        $myTabs.find(".tab_content").hide().first().show();
        $myTabs.find("ul.tabs li:first .tab-btn-n").addClass("active").show();

        $myTabs.find("ul.tabs li").click(function() {
            var $this = $(this);

            $myTabs.find(".tab_content").hide();
            //
            $(".tab-btn-n").removeClass("active");
            $this.find(".tab-btn-n").addClass("active");
     

            var activeTab = $this.find("a").attr("href");
            $(activeTab).fadeIn();

            return false;
        });
    });
});


