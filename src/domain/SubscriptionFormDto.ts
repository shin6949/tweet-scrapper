import { SubscriptionFormEntity } from './SubscriptionFormEntity';

export class SubscriptionFormDto {
    private _authorName: string;
    private _authorProfileUrl: string;
    private _colorHex: string;
    private _content: string;
    private _webhookUrl: string;
    private _toGetAccountId: string;
    private _lastCheckedTweetId: string;
    private _lastCheckedTime: Date;

    public get authorName() {
        return this._authorName;
    }

    public get authorProfileUrl() {
        return this._authorProfileUrl;
    }

    public get colorHex() {
        return this._colorHex;
    }

    public get content() {
        return this._content;
    }

    public get webhookUrl() {
        return this._webhookUrl;
    }

    public get toGetAccountId() {
        return this._toGetAccountId;
    }

    public get lastCheckedTweetId() {
        return this._lastCheckedTweetId;
    }

    public get lastCheckedTime() {
        return this._lastCheckedTime;
    }

    public set lastCheckedTime(lastCheckedTime) {
        this._lastCheckedTime = lastCheckedTime;
    }

    public set lastCheckedTweetId(lastCheckedTweetId) {
        this._lastCheckedTweetId = lastCheckedTweetId;
    }

    static from(
        authorName: string,
        authorProfileUrl: string,
        colorHex: string,
        content: string,
        webhookUrl: string,
        toGetAccountId: string,
        lastCheckedTweetId: string,
        lastCheckedTime: Date
    ) {
        const subscriptionFormDto: SubscriptionFormDto =
            new SubscriptionFormDto();
        subscriptionFormDto._authorName = authorName;
        subscriptionFormDto._authorProfileUrl = authorProfileUrl;
        subscriptionFormDto._colorHex = colorHex;
        subscriptionFormDto._content = content;
        subscriptionFormDto._webhookUrl = webhookUrl;
        subscriptionFormDto._toGetAccountId = toGetAccountId;
        subscriptionFormDto._lastCheckedTweetId = lastCheckedTweetId;
        subscriptionFormDto._lastCheckedTime = lastCheckedTime;
        return subscriptionFormDto;
    }

    toSubscriptionFormEntity() {
        return SubscriptionFormEntity.from(
            this._authorName,
            this._authorProfileUrl,
            this._colorHex,
            this._content,
            this._webhookUrl,
            this._toGetAccountId,
            this._lastCheckedTweetId,
            this._lastCheckedTime
        );
    }
}
