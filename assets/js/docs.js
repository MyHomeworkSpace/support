if (window.location.hostname.indexOf("myhomework.space") > -1 && window.location.protocol == "http:") {
	window.location.protocol = "https:";
}

$(()=>{
    $("#suggest").attr("href", $("#url").text().replace(".html", ".md"));

    $('#nav-search').submit(function () {
        location.href = "/search?query=" + $("#nav-searchbar").val();
        return false;
    });
    
    $("h2, h3, h4, h5, h6").each(function(index) {
        if($(this).attr('id') != "title") {
            var level = $(this).prop('nodeName').replace("H","")-2
            var name = "";
            for (let i = 0; i < level; i++) {
                name+="<i class=\"fas fa-angle-right\"></i>"
            }
            if (level>0) {
                name+=" "
            }
            name+=$(this).text();
            // var wrapper = $("<li class=\"nav-item\"></li>")
            // var element = wrapper.append($("<a class=\"nav-link\" href=\"#" + $(this).attr('id') + "\">" + name + "</a>"))
            var element = $("<a href=\"#" + $(this).attr('id') + "\">" + name + "</a>")
            if(level==0) {
                var strong = $("<strong></strong>")
                element = strong.append(element);
            }
            $("#tableOfContents").append(element);
        }
    });
    $("#helpful-icon-yes").click(()=>{
        $(".helpful").text("Thank you for your feedback!")
    })
    $("#helpful-icon-no").click(()=>{
        $.post(
            "https://hooks.slack.com/services/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",
            'payload={"text": "Someone didn\'t like the support page at <' + location.href + '>"}'
        );
        $(".helpful").text("We'll get a teammate over here as soon as possible to get this issue resolved.\n");
        link = $("<a>Suggest changes with GitHub</a>");
        link.attr("href", $("#url").text().replace(".html", ".md"));
        $(".helpful").append(link);
    })

    $(window).scroll(()=>{
        if($(window).scrollTop() > $("#content").position().top) {
            $(".title-bar").fadeIn();
        } else {
            $(".title-bar").fadeOut();
        }
        $("#read-progress").css("width", ($(window).scrollTop()/($("#bottom").position().top-$(window).height()))*100 + "%")
        $("#read-progress-percent").text(Math.round($(window).scrollTop()/($("#bottom").position().top-$(window).height())*100) + "%")
        if(($(window).scrollTop()/($("#bottom").position().top-$(window).height()))*100 >= 100){
            $("#title-bar-nav").css("background-color", "#2097ff");
            $("#read-progress-percent").fadeOut(0.5);
            $(".page-title").css("color", "white");
            $(".page-title").text("You just finished reading " + $("#title").text() + ".");
            $("#read-progress").css("opacity", "0");
        }
    })
})
