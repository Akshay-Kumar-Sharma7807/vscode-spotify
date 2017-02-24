import { SpotifyStatus } from './SpotifyStatus';
import { SpoifyClientSingleton } from './spotify/SpotifyClient'

export class SpotifyStatusController {
    private _spotifyStatus: SpotifyStatus;
    private _timeoutId: number;
    private _retryCount: number;
    /**
     * How many sequential errors is needed to hide all buttons
     */
    private _maxRetryCount: number;

    constructor(spotifyStatus: SpotifyStatus) {
        this._timeoutId = 0;
        this._spotifyStatus = spotifyStatus;
        this._retryCount = 0;
        this._maxRetryCount = 5;
        this.queryStatus();
    }

    scheduleQueryStatus() {
        this._clearQueryTimeout();
        this._timeoutId = setTimeout(() => {
            this.queryStatus();
        }, 1000);
    }

    /**
     * Retrieves status of spotify and passes it to spotifyStatus;
     */
    queryStatus() {
        this._clearQueryTimeout();
        var clearState = (() => {
            this._retryCount++;
            if (this._retryCount >= this._maxRetryCount) {
                this._spotifyStatus.state = {
                    state: { position: 0, volume: 0, state: '' },
                    track: { artist: '', name: '' },
                    isRepeating: false,
                    isShuffling: false,
                    isRunning: false
                };
                this._retryCount = 0;
            }
            this.scheduleQueryStatus();
        });
        SpoifyClientSingleton.getSpotifyClient(this._spotifyStatus, this).getStatus().then((status) => {
            this._spotifyStatus.state = status;
            this._retryCount = 0;
            this.scheduleQueryStatus();
        }).catch(clearState);
    }

    dispose() {
        if (this._timeoutId !== 0) {
            clearTimeout(this._timeoutId);
        }
    }

    private _clearQueryTimeout() {
        if (this._timeoutId !== 0) {
            clearTimeout(this._timeoutId);
            this._timeoutId = 0;
        }
    }
}