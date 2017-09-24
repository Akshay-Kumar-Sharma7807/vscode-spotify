# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.1] - 2017-09-23
### Fixed
- Failed to initialize vscode-spotify. We'll keep trying every 20 seconds. (New VSCode Insiders / New Spotify ?) #17

## [2.0.0] - 2017-05-22
### Added
- Added lyrics button(via Genius API). @see https://github.com/shyykoserhiy/vscode-spotify-lyrics
- Added prefix 'vscode-spotify' for all messages from this extension. 

## [1.1.0] - 2017-02-27
### Added
- Added statusCheckInterval param.

## [1.0.0] - 2016-09-14
### Added
- initial implementation of windows & linux support.

## [0.0.5] - 2015-12-08
### Added
- added dynamic colors for buttons
- added spotify.toggleRepeating and spotify.toggleShuffling commands
- added buttons to status bar

### Fixed
- Extension reopens Spotify if it gets closed. #4
- Sometimes there is error (unexpected tocken u), that hides all the buttons. #3
- Wrong stopped/playing state #2

## [0.0.2] - 2015-11-25
### Added
- initial release
