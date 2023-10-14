$(() => {

    $(window).scroll(() => {
        $(".algolia-logo").fadeOut();
    });

    $('#nav-search').submit(() => {
        location.href = "/search?query=" + $("#nav-searchbar").val();
        return false;
    });

    const search = instantsearch({
        appId: 'QF9EIEIPVJ',
        apiKey: '850274baea92c3bf75c0f515e519bbf2',
        indexName: 'site',
        routing: true
    });

    search.addWidget(
        instantsearch.widgets.hits({
            container: '#hits',
            templates: {
                empty: 'No results could be found.',
                item: '<h3><a href="{{url}}">{{{_highlightResult.title.value}}}</a></h3><p>{{{description}}}</p>'
            },
            escapeHits: true,
        })
    );

    search.addWidget(
        instantsearch.widgets.searchBox({
            container: '#search-box',
            placeholder: 'Search for articles',
            cssClasses: {
                root: "searchbar",
                showmore: "btn btn-default"
            }
        })
    );

    search.addWidget(
        instantsearch.widgets.searchBox({
            container: '#search-sidebar',
            placeholder: 'Search for articles',
            cssClasses: {
                root: "searchbar",
                showmore: "btn btn-default"
            }
        })
    );

    search.addWidget(
        instantsearch.widgets.hitsPerPageSelector({
            container: '#hits-per-page-container',
            items: [
                { value: 9999999999999, label: 'Default', default: true },
            ]
        })
    );

    search.start();
})