import { Exclude, Expose } from 'class-transformer';

export class PapagoRequestHeader {
  @Exclude()
  private _naverClientId: String;

  @Exclude()
  private _naverClientSecret: String;

  constructor(clientId: String, clientSecret: String) {
    this._naverClientId = clientId;
    this._naverClientSecret = clientSecret;
  }

  @Expose({ name: 'X-Naver-Client-Id' })
  public get naverClientId(): String {
    return this._naverClientId;
  }

  @Expose({ name: 'X-Naver-Client-Secret' })
  public get naverClientSecret(): String {
    return this._naverClientSecret;
  }
}
