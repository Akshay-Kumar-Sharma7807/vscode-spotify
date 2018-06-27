# vscode-spotify
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat)](#contributors)

Use Spotify inside vscode.
Provides integration with Spotify Desktop client. 

Note that some of functionality only available on macOS (see [How it works section](#how-it-works) )

## How it works
On macOS this extension uses https://github.com/andrehaveman/spotify-node-applescript (basically a wrapper for https://developer.spotify.com/applescript-api/)
to communicate with Spotify. 

On Windows, it uses https://github.com/ShyykoSerhiy/spotilocal to communicate with Spotify's local web server. 

On Linux, it uses a combination of https://github.com/ShyykoSerhiy/spotilocal, dbus, and pactl to communicate with Spotify's local web server, along with command line based commands.

It's undocumented approach and sadly it doesn't provide all the functionality that is available on macOS.

## Features
* Shows the currently playing song in status bar of vscode.
![status bar](media/screenshot.png)
* Provides [commands](#commands) for controlling Spotify from vscode. 
* Provides [hotkeys](#hotkeys) of commands.
* Provides [buttons](#buttons) for controlling Spotify from vscode.

## Compatibility table

| Feature                      | macOS         | Linux                        | Windows                      |
| ---------------------------- |:-------------:| :--------------------------- | :--------------------------- |
| Show current song            | ✅            | ✅                            | ✅                            |
| Play Next Song               | ✅            | ✅                            | ❌                            |
| Play Previous Song           | ✅            | ✅                            | ❌                            |
| Play                         | ✅            | ✅                            | ✅                            |
| Pause                        | ✅            | ✅                            | ✅                            |
| Play Pause                   | ✅            | ✅                            | ✅                            |
| Mute Volume                  | ✅            | ✅                            | (shows muted state) ⭕        |
| Unmute Volume                | ✅            | ✅                            | (shows unmuted state)  ⭕     |
| Mute Unmute Volume           | ✅            | ✅                            | (shows muted unmuted state)⭕ |
| Volume Up                    | ✅            | ✅                            | ❌                             |
| Volume Down                  | ✅            | ✅                            | ❌                             |
| Toggle Repeating             | ✅            | (shows repeating state)  ⭕   | (shows repeating state)  ⭕   |
| Toggle Shuffling             | ✅            | (shows shuffling state)  ⭕   | (shows shuffling state)  ⭕   |
| Lyrics                       | ✅            | ✅                            | ✅                             |

## Contributing 
This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind are welcome, any contributions you make you will be recognised for in the README.

A list of contributors to this project
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/1106995?v=4" width="100px;"/><br /><sub><b>shyyko.serhiy</b></sub>](https://github.com/ShyykoSerhiy)<br />[💻](https://github.com/ShyykoSerhiy/vscode-spotify/commits?author=ShyykoSerhiy "Code") [🎨](#design-ShyykoSerhiy "Design") [📖](https://github.com/ShyykoSerhiy/vscode-spotify/commits?author=ShyykoSerhiy "Documentation") [🤔](#ideas-ShyykoSerhiy "Ideas, Planning, & Feedback") [👀](#review-ShyykoSerhiy "Reviewed Pull Requests") | [<img src="https://avatars3.githubusercontent.com/u/9491603?v=4" width="100px;"/><br /><sub><b>Levin Rickert</b></sub>](https://www.levrik.io)<br />[🐛](https://github.com/ShyykoSerhiy/vscode-spotify/issues?q=author%3Alevrik "Bug reports") [💻](https://github.com/ShyykoSerhiy/vscode-spotify/commits?author=levrik "Code") | [<img src="https://avatars3.githubusercontent.com/u/491891?v=4" width="100px;"/><br /><sub><b>Marc Riera</b></sub>](https://github.com/mrcasals)<br />[💻](https://github.com/ShyykoSerhiy/vscode-spotify/commits?author=mrcasals "Code") | [<img src="https://avatars2.githubusercontent.com/u/1844664?v=4" width="100px;"/><br /><sub><b>Evan Brodie</b></sub>](https://github.com/ecbrodie)<br />[💻](https://github.com/ShyykoSerhiy/vscode-spotify/commits?author=ecbrodie "Code") [🐛](https://github.com/ShyykoSerhiy/vscode-spotify/issues?q=author%3Aecbrodie "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/5939522?v=4" width="100px;"/><br /><sub><b>Stéphane</b></sub>](https://github.com/Stephanyan)<br />[📖](https://github.com/ShyykoSerhiy/vscode-spotify/commits?author=Stephanyan "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/11082710?v=4" width="100px;"/><br /><sub><b>Ryan Gordon</b></sub>](https://github.com/Ryan-Gordon)<br />[📖](https://github.com/ShyykoSerhiy/vscode-spotify/commits?author=Ryan-Gordon "Documentation") [🤔](#ideas-Ryan-Gordon "Ideas, Planning, & Feedback") |
| :---: | :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->
## Commands
List of commands:
```json
"commands": [
	{
		"command": "spotify.next",
		"title": "Spotify Play Next Song"
	},
	{
		"command": "spotify.previous",
		"title": "Spotify Play Previous Song"
	},
	{
		"command": "spotify.play",
		"title": "Spotify Play"
	},
	{
		"command": "spotify.pause",
		"title": "Spotify Pause"
	},
	{
		"command": "spotify.playPause",
		"title": "Spotify Play|Pause"
	},            
	{
		"command": "spotify.muteVolume",
		"title": "Spotify Mute Volume"
	},
	{
		"command": "spotify.unmuteVolume",
		"title": "Spotify Unmute Volume"
	},
	{
		"command": "spotify.muteUnmuteVolume",
		"title": "Spotify Mute|Unmute Volume"
	},
	{
		"command": "spotify.volumeUp",
		"title": "Spotify Volume Up"
	},
	{
		"command": "spotify.volumeDown",
		"title": "Spotify Volume Down"
	},
	{
		"command": "spotify.toggleRepeating",
		"title": "Spotify Toggle Repeating"
	},
	{
		"command": "spotify.toggleShuffling",
		"title": "Spotify Toggle Shuffling"
	}
]
```

## Hotkeys
```json
"keybindings": [
	{
		"command": "spotify.next",
		"key": "ctrl+shift+]",
		"mac": "cmd+shift+]"
	},
	{
		"command": "spotify.previous",
		"key": "ctrl+shift+[",
		"mac": "cmd+shift+["
	},
	{
		"command": "spotify.volumeUp",
		"key": "ctrl+shift+'",
		"mac": "cmd+shift+'"
	},
	{
		"command": "spotify.volumeDown",
		"key": "ctrl+shift+;",
		"mac": "cmd+shift+;"
	}
]
```
Note that out of the box hotkeys are only provided for those four commands. If you want to assign hotkeys to  other commands(or change existing) look at
[Adding or changing hotkeys](#adding-or-changing-hotkeys) section below.

## Adding or changing hotkeys:
All keyboard shortcuts in VS Code can be customized via the User/keybindings.json file.

To configure keyboard shortcuts the way you want, go to the menu under File , Preferences , Keyboard Shortcuts.
This will open the Default Keyboard Shortcuts on the left and your User/keybindings.json file where you can overwrite the default bindings on the right.

Example :
```json
{
		"command": "spotify.volumeDown",
		"key": "cmd+shift+g"
}
```

For more info on hotkeys please look at https://code.visualstudio.com/docs/customization/keybindings

## Buttons
This extension provides variety of buttons to controll spotify from status bar. By default 4 buttons are enabled:
1. Previous track
2. Play|pause
3. Next track
4. Mute|unmute

You can change what buttons to show by changing parameters([go here to find out how](https://code.visualstudio.com/docs/customization/userandworkspace)):
```json
"spotify.showNextButton": {
	"type": "boolean",
	"default": true,
	"description": "Whether to show next button."
},
"spotify.showPreviousButton": {
	"type": "boolean",
	"default": true,
	"description": "Whether to show previous button."
},
"spotify.showPlayButton": {
	"type": "boolean",
	"default": false,
	"description": "Whether to show play button."
},
"spotify.showPauseButton": {
	"type": "boolean",
	"default": false,
	"description": "Whether to show pause button."
},
"spotify.showPlayPauseButton": {
	"type": "boolean",
	"default": true,
	"description": "Whether to show play|pause button."
},
"spotify.showMuteVolumeButton": {
	"type": "boolean",
	"default": false,
	"description": "Whether to show mute button."
},
"spotify.showUnmuteVolumeButton": {
	"type": "boolean",
	"default": false,
	"description": "Whether to show unmute button."
},
"spotify.showMuteUnmuteVolumeButton": {
	"type": "boolean",
	"default": true,
	"description": "Whether to show mute|unmute button."
},
"spotify.showVolumeUpButton": {
	"type": "boolean",
	"default": false,
	"description": "Whether to show volume up button."
},
"spotify.showVolumeDownButton": {
	"type": "boolean",
	"default": false,
	"description": "Whether to show volume down button."
}
"spotify.showToggleRepeatingButton": {
	"type": "boolean",
	"default": false,
	"description": "Whether to show toggle repeating button."
},
"spotify.showToggleShufflingButton": {
	"type": "boolean",
	"default": false,
	"description": "Whether to show toggle shuffling button."
}
```

Note that due to limitations of Spotify's applesctipt API toggleRepeatingButton toggles only
'repeat all' property of spotify. There is no way to set 'repeat one' via vscode-spotify.  

You can also change position of buttons by changing of this parameters:
```json
"spotify.priorityBase": {
	"type": "number",
	"default": 30,
	"description": "Base value of priority for all vscode-spotify elements in Status Bar(priority = basePriority+priority). This is done to avoid 'conflicts' with other extensions. "
},
"spotify.nextButtonPriority": {
	"type": "number",
	"default": 8,
	"description": "Priority of next button."
},
"spotify.previousButtonPriority": {
	"type": "number",
	"default": 10,
	"description": "Priority of previous button."
},
"spotify.playButtonPriority": {
	"type": "number",
	"default": 7,
	"description": "Priority of play button."
},
"spotify.pauseButtonPriority": {
	"type": "number",
	"default": 6,
	"description": "Priority of pause button."
},
"spotify.playPauseButtonPriority": {
	"type": "number",
	"default": 9,
	"description": "Priority of play|pause button."
},
"spotify.muteButtonPriority": {
	"type": "number",
	"default": 5,
	"description": "Priority of mute button."
},
"spotify.unmuteButtonPriority": {
	"type": "number",
	"default": 4,
	"description": "Priority of unmute button."
},
"spotify.muteUnmuteButtonPriority": {
	"type": "number",
	"default": 3,
	"description": "Priority of mute|unmute button."
},
"spotify.volumeUpButtonPriority": {
	"type": "number",
	"default": 2,
	"description": "Priority of volume up button."
},
"spotify.volumeDownButtonPriority": {
	"type": "number",
	"default": 1,
	"description": "Priority of volume down button."
},
"spotify.trackInfoPriority": {
	"type": "number",
	"default": 0,
	"description": "Priority of volume track info."
},
"spotify.toggleRepeatingButtonPriority": {
	"type": "number",
	"default": 11,
	"description": "Priority of toggle repeating button."
},
"spotify.toggleShufflingButtonPriority": {
	"type": "number",
	"default": 12,
	"description": "Priority of toggle shuffling button."
}
```

[MIT](LICENSE)
