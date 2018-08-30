var screenshot = {
	content : document.createElement("canvas"),
	data : '',

	init : function() {
		chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.2} );
		this.initEvents();
	},

	saveScreenshot : function(tab_url) {
		var image = new Image();
		image.onload = function() {
			var canvas = screenshot.content;
			canvas.width = image.width;
			canvas.height = image.height;
			var context = canvas.getContext("2d");
			context.drawImage(image, 0, 0);

			// save the image
			var link = document.createElement('a');
			link.download = "download.png";
			link.href = screenshot.content.toDataURL();

			var url = "http://localhost:3000/add_screenshot";
			var data = {
				name: tab_url,
				photo: link.href
			}

			fetch(url, {
			    method: 'POST',
					headers: {
	            "Content-Type": "application/json; charset=utf-8",
	        },
			    body: JSON.stringify(data)
		  	})
			.then(response => response.json())
			.then(data => {
				console.log('Success')
			})

			screenshot.data = '';
		};
		image.src = screenshot.data;
	},

	initEvents : function() {
		chrome.alarms.onAlarm.addListener(function(alarm) {
			chrome.tabs.captureVisibleTab(null, {
				format : "png",
				quality : 100
			}, function(data) {
				screenshot.data = data;

				// send an alert message to webpage
				chrome.tabs.query({
					active : true,
					currentWindow : true
				}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {ready : "ready"}, function(response) {
							screenshot.saveScreenshot(tabs[0].url);
					});
				});

			});
		});
	}
};

screenshot.init();
