import { Exclude, Expose } from 'class-transformer';

export class PapagoRequestHeader {
  @Exclude()
  private _naverClientId: String;

  @Exclude()
  private _naverClientSecret: String;

  @Exclude()
  private _contentType: String;

  constructor(naverClientId: String, naverClientSecret: String) {
    this._naverClientId = naverClientId;
    this._naverClientSecret = naverClientSecret;
    this._contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
  }

  @Expose({ name: 'X-Naver-Client-Id' })
  public get naverClientId(): String {
    return this._naverClientId;
  }

  @Expose({ name: 'X-Naver-Client-Secret' })
  public get naverClientSecret(): String {
    return this._naverClientSecret;
  }

  @Expose({ name: 'Content-Type' })
  public get contentType(): String {
    return this._contentType;
  }
}
