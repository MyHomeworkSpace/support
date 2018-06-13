$(() => {
    $('#nav-search').submit(function () {
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
        instantsearch.widgets.infiniteHits({
            container: '#hits',
            templates: {
                empty: 'No results could be found.',
                item: '<h3><a href="{{url}}">{{{_highlightResult.title.value}}}</a></h3><p>{{{_highlightResult.description.value}}}'
            },
            escapeHits: true,
        })
    );

    search.addWidget(
        instantsearch.widgets.searchBox({
            container: '#search-box',
            placeholder: 'Search for articles',
            cssClasses: {
                root: "searchbar"
            }
        })
    );

    search.start();
})