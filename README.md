# Kao Live (Web Browser Extension)

<a href="https://chrome.google.com/webstore/detail/kao-live/idmlfgnbcajlnjnmflpaoekgdoldnmef" target="_blank" title="Kao Live Chrome"><img src="https://imgur.com/3C4iKO0.png" width="64" height="64"></a>
<a href="https://addons.mozilla.org/fr/firefox/addon/kao-live/" target="_blank" title="Kao Live Firefox"><img src="https://imgur.com/ihXsdDO.png" width="64" height="64"></a>
<a href="https://microsoftedge.microsoft.com/addons/detail/kao-live/gmebkjgfidjaibadakpalcjleccngged" target="_blank" title="Kao Live Edge"><img src="https://imgur.com/vMcaXaw.png" width="64" height="64"></a>
<a href="https://addons.opera.com/fr/extensions/details/kao-live/" target="_blank" title="Kao Live Opera"><img src="https://imgur.com/nSJ9htU.png" width="64" height="64"></a>

Kao Live extension is written in Javascript, HTML, CSS and uses Jquery.

![](https://addons.cdn.mozilla.net/user-media/previews/full/247/247745.png?modified=1605718596 "Kao Live")

# Build/Run

**Requirements**
- Chrome (preferred), Opera, Firefox or Edge browser
- Twitch [API Client Id & Token](https://dev.twitch.tv/)


**Run the extension**

Put your [API token](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth#oauth-client-credentials-flow) in config.js file
```
	...
	"clientId": "[PUT YOUR OWN TWITCH CLIENT ID HERE]",
	"clientToken": "[PUT YOUR OWN TWITCH CLIENT TOKEN HERE]",
	...
```

You can now load the extension into your browser through the browser's extension tools page:

 - Chrome/Opera:
  1. Type `chrome://extensions` in your address bar to bring up the extensions page.
  2. Enable developer mode (checkbox)
  3. Click the "Load unpacked extension" button, navigate to the root folder of your local extension instance, and click "Ok".

 - Firefox:
  1. Type `about:debugging` in your address bar to bring up the add-ons page.
  2. Click the `Load Temporary Add-on` button, navigate to the `manifest.json` file, and "Open".
