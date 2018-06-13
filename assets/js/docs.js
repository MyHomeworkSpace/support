$(()=>{
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
        $(".helpful").text("We'll get a teammate over here as soon as possible to get this issue resolved.");
        $.post(
            "https://hooks.slack.com/services/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",
            'payload={"text": "Someone didn\'t like the support page at <' + location.href + '>"}'
        );
    })
})