import { SubscriptionFormEntity } from '../domain/SubscriptionFormEntity';

export class SubscriptionFormDto {
  private _id: string;
  private _authorName: string;
  private _authorProfileUrl: string;
  private _colorHex: string;
  private _webhookUrl: string;
  private _toGetAccountId: string;
  private _lastCheckedTime: Date;
  private _needPapago: boolean;

  public get id() {
    return this._id;
  }

  public get authorName() {
    return this._authorName;
  }

  public get authorProfileUrl() {
    return this._authorProfileUrl;
  }

  public get colorHex() {
    return this._colorHex;
  }

  public get webhookUrl() {
    return this._webhookUrl;
  }

  public get toGetAccountId() {
    return this._toGetAccountId;
  }

  public get lastCheckedTime() {
    return this._lastCheckedTime;
  }

  public get needPapago() {
    return this._needPapago;
  }

  public set id(id) {
    this._id = id;
  }

  public set lastCheckedTime(lastCheckedTime) {
    this._lastCheckedTime = lastCheckedTime;
  }

  static from(
    id: string,
    authorName: string,
    authorProfileUrl: string,
    colorHex: string,
    webhookUrl: string,
    toGetAccountId: string,
    lastCheckedTime: Date,
    needPapago: boolean
  ) {
    const subscriptionFormDto: SubscriptionFormDto = new SubscriptionFormDto();
    subscriptionFormDto._id = id;
    subscriptionFormDto._authorName = authorName;
    subscriptionFormDto._authorProfileUrl = authorProfileUrl;
    subscriptionFormDto._colorHex = colorHex;
    subscriptionFormDto._webhookUrl = webhookUrl;
    subscriptionFormDto._toGetAccountId = toGetAccountId;
    subscriptionFormDto._lastCheckedTime = lastCheckedTime;
    subscriptionFormDto._needPapago = needPapago;
    return subscriptionFormDto;
  }

  toSubscriptionFormEntity() {
    return SubscriptionFormEntity.from(
      this._id,
      this._authorName,
      this._authorProfileUrl,
      this._colorHex,
      this._webhookUrl,
      this._toGetAccountId,
      this._lastCheckedTime,
      this._needPapago
    );
  }
}
