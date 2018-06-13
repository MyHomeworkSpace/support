$(()=>{
    $('#nav-search').submit(function () {
        location.href = "/search?query=" + $("#nav-searchbar").val();
        return false;
    });
    $('#homepage-search').submit(function () {
        location.href = "/search?query=" + $("#home-searchbar").val();
        return false;
    });
})