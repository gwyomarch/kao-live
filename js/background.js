let check = 0
const xhr = new XMLHttpRequest()
const id = config.clientId
const token = config.clientToken
const streamer = config.channel

stream()
setInterval(function(){
	stream()
}, 60000)

async function stream() {
	xhr.open("GET", "https://api.twitch.tv/helix/streams?user_login=" + streamer, true)
	xhr.setRequestHeader("Authorization", "Bearer " + token)
	xhr.setRequestHeader("Client-ID", id)
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			const response = JSON.parse(xhr.responseText)
			if(response["data"] == 0) {
				chrome.browserAction.setIcon({path: "img/logo-128-nb.png"})
				check = 0
			} else {
				if (check === 0) {
					chrome.browserAction.setIcon({path: "img/logo-128.png"})
					Notification.requestPermission(() => {
						if(Notification.permission === "default"){
							Notification.requestPermission()
						} else if (Notification.permission == "granted") {
							const game = response["data"][0].game_name
							const notifConfig = {
								type: "basic",
								title: game,
								message: "Rejoins le live de Kao ! \nhttps://www.twitch.tv/" + streamer,
								iconUrl: "./img/logo-256.png"
							}
							chrome.notifications.create('', notifConfig, (id) => {
								console.log('notification')
							})
							chrome.notifications.onClicked.addListener(() => {
								chrome.tabs.create({
									url: "https://www.twitch.tv/" + streamer
								})
							})
						}
					})
				}
				check = 1
			}
		}
	}
	xhr.send()
}

// By Gwyomarch
