var defaultClientID = "gira3VhJ08GxnsWcaAJ0pQOoHiu-2mAk_YUcUI818Dn1KP4fFJU_sHE1"

var baseurl = "https://api-v2.myhomework.space/"
var clientid = defaultClientID
var token = ""

var urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('token') || Cookies.get('token')) {
	/* USER IS SIGNED IN */

	if (!Cookies.get('token')) {
		Cookies.set('token', urlParams.get("token"), { path: '' })
		token = urlParams.get("token");
	} else {
		token = Cookies.get('token');
	}
	baseurl = Cookies.get("baseurl")
	$(".not-signed-in").hide();
	$(".signed-in").show();
	$(".tryit-container").show();

	$(".baseurl").text(baseurl)
	$(".baseurl-noapi").text(baseurl.replace("api-v2.", ""))

	fetch(baseurl + "auth/me", {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'Authorization': 'Bearer ' + token
		},
	}).then((response) => {
		return response.text();
	}).then((text) => {
		var response = JSON.parse(text)
		$(".user-name").text(response.user.name)
	}).catch((error) => {
		console.error(error)
	})
} else {
	Cookies.remove('baseurl', { path: '' })
}

$("#baseurl-select").change(() => {
	var val = $("#baseurl-select").val();
	if (val != "https://api-v2.myhomework.space/") {
		$("#client-id-select").show();
		clientid = null;
	} else {
		$("#client-id-select").hide();
		clientid = defaultClientID;
	}

	baseurl = val;

	if (val != "custom") {
		$("#baseurl-select-custom").hide();
	} else {
		$("#baseurl-select-custom").show();
		baseurl = null;
	}
})

$("#sign-in").click(() => {
	var val = $("#baseurl-select").val();
	if (val != "https://api-v2.myhomework.space/") {
		clientid = $("#client-id-select-box").val();
	} if (val == "custom") {
		baseurl = $("#baseurl-select-custom").val();
	}

	console.log({
		clientid: clientid,
		baseurl: baseurl
	})

	Cookies.set('baseurl', baseurl, { path: '' });

	window.location = baseurl + "application/requestAuth/" + clientid;
})

$("#sign-out").click(() => {
	Cookies.remove('baseurl', { path: '' });
	Cookies.remove('token', { path: '' })
	window.location = window.location.origin + window.location.pathname
})

$("form").submit(function (event) {
	var values = $(this).serialize();
	var method = $(event.target).data("method");
	var endpoint = $(event.target).attr("action")
	var slug = $(event.target).data("slug")
	$("#" + slug + "loading").show();
	event.preventDefault();

	var query = ""
	if (method == "GET") {
		query = "?" + values;
		values = undefined;
	}

	fetch(baseurl + endpoint + query, {
		method: method,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'Authorization': 'Bearer ' + token
		},
		body: (values == "" ? undefined : values),
	}).then((response) => {
		return response.text();
	}).then((text) => {
		$("#" + slug + "resultsContainer").show();
		console.log(JSON.stringify(JSON.parse(text), null, "\t"))
		$("#" + slug + "results").text(JSON.stringify(JSON.parse(text), null, "\t"));
		$("#" + slug + "loading").hide();
		document.querySelectorAll("#" + slug + "resultsContainer").forEach((block) => {
			hljs.highlightBlock(block);
		});
	}).catch((error) => {
		console.log("#" + slug + "resultsContainer")
		$("#" + slug + "resultsContainer").show();
		$("#" + slug + "results").text(error.message);
		$("#" + slug + "loading").hide();
	})
});