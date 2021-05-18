let check = 0
const xhr = new XMLHttpRequest()

const id = config.clientId
const token = config.clientToken

const streamer = config.channel
const ytChannel = config.youtube
const merchURL = config.merch
const twitProfile = config.twitter
const instProfile = config.instagram

stream()
setInterval(function(){
	stream()
}, 60000)
window.onload = () => {
	const twit = document.getElementById('twit')
	twit.addEventListener('click', () => {
		chrome.tabs.create({ url: "https://www.twitter.com/" + twitProfile })
	})
	const inst = document.getElementById('inst')
	inst.addEventListener('click', () => {
		chrome.tabs.create({ url: "https://www.instagram.com/" + instProfile })
	})
	const yt = document.getElementById('yt')
	yt.addEventListener('click', () => {
		chrome.tabs.create({ url: "https://www.youtube.com/c/" + ytChannel })
	})
	const header = document.getElementById('header')
	header.addEventListener('click', () => {
		chrome.tabs.create({ url: "https://www.twitch.tv/" + streamer })
	})
	const onlive = document.getElementById('onlive')
	onlive.addEventListener('click', () => {
		chrome.tabs.create({ url: "https://www.twitch.tv/" + streamer })
	})
	const gameTitle = document.getElementById('game-title')
	gameTitle.addEventListener('click', () => {
		chrome.tabs.create({ url: "https://www.twitch.tv/" + streamer })
	})
}
async function stream() {
	xhr.open("GET", "https://api.twitch.tv/helix/streams?user_login=" + streamer, true)
	xhr.setRequestHeader("Authorization", "Bearer " + token)
	xhr.setRequestHeader("Client-ID", id)
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			const response = JSON.parse(xhr.responseText)
			if(response["data"] == 0) {

			//	STREAM OFFLINE
				chrome.browserAction.setIcon({path: "img/logo-128-nb.png"})
				$('#accueil').attr('src', 'img/KaoOff.jpg')
				$('#title').removeClass("big")
				$('#off-status').removeClass("hidden")
				$('#socials').removeClass("small")
				$('#footer').addClass('hidden')
				$('#overlay').css('z-index', '-10')

				check = 0
			} else {
				if (check === 0) {

				//	STREAM ONLINE
					$('#accueil').attr('src', 'img/KaoOn.jpg')
					$('#title').addClass("big")
					$('#off-status').addClass("hidden")
					$('#socials').addClass("small")
					$('#footer').removeClass('hidden')
					console.log(response['data'][0])
					let game = response['data'][0].game_name
					if(game.length > 24) {
						game = game.substring(0, 25)
					}
					$('#game h2').text(game.toLowerCase())
					$('#overlay').css('z-index', '-10')
				}
			}
		}
	}
	xhr.send()
}

// By Gwyomarch
