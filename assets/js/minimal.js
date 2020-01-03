if (window.location.hostname.indexOf("myhomework.space") > -1 && window.location.protocol == "http:") {
    window.location.protocol = "https:";
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(() => {
    $('#nav-search').submit(function () {
        location.href = "/search?query=" + $("#nav-searchbar").val();
        return false;
    });
})
