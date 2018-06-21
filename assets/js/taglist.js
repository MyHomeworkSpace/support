var get = function(url, callback) {
	var request = new XMLHttpRequest();
	request.withCredentials = true;
	request.open("GET", url, true);
	request.onload = function() {
		callback(JSON.parse(request.responseText), request);
	};
	request.onerror = function() {
		callback(null, request);
	};
	request.send();
};

var baseURL = "https://api-v2.myhomework.space/";

window.onload = function() {
	var tagList = document.querySelector("#tagList");
	get(baseURL + "auth/csrf", function(data) {
		get(baseURL + "prefixes/getDefaultList?csrfToken=" + encodeURIComponent(data.token), function(data) {
			tagList.innerText = "";

			for (var prefixIndex in data.prefixes) {
				var prefixGroup = data.prefixes[prefixIndex];
				var prefixGroupElement = document.createElement("div");

				if (prefixGroup.words.indexOf("Hex") > -1) {
					// shhhhhhhhhhhh
					continue;
				}

				prefixGroupElement.classList.add("tagListPrefixGroup");
				for (var wordIndex in prefixGroup.words) {
					var word = prefixGroup.words[wordIndex];
					var prefixElement = document.createElement("div");
					
					prefixElement.classList.add("tagListPrefix");
					prefixElement.style.backgroundColor = "#" + prefixGroup.background;
					prefixElement.style.color = "#" + prefixGroup.color;
					prefixElement.innerText = word;

					prefixGroupElement.appendChild(prefixElement);
				}

				tagList.appendChild(prefixGroupElement);
			}
		});
	});
};