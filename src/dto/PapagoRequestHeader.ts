import { Exclude, Expose } from 'class-transformer';

export class PapagoRequestHeader {
  @Exclude()
  private _naverClientId: string;

  @Exclude()
  private _naverClientSecret: string;

  @Exclude()
  private _contentType: string;

  constructor(naverClientId: string, naverClientSecret: string) {
    this._naverClientId = naverClientId;
    this._naverClientSecret = naverClientSecret;
    this._contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
  }

  @Expose({ name: 'X-Naver-Client-Id' })
  public get naverClientId(): string {
    return this._naverClientId;
  }

  @Expose({ name: 'X-Naver-Client-Secret' })
  public get naverClientSecret(): string {
    return this._naverClientSecret;
  }

  @Expose({ name: 'Content-Type' })
  public get contentType(): string {
    return this._contentType;
  }
}
