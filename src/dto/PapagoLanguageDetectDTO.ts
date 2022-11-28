import { Exclude, Expose } from 'class-transformer';

export class PapagoLanguageDetectRequestDTO {
  @Exclude()
  private _query: String;

  constructor(query: String) {
    this._query = query;
  }

  @Expose({ name: 'query' })
  public get query() {
    return this._query;
  }
}

export class PapagoLanguageDetectResponseDTO {
  @Exclude()
  private _langCode: String;

  constructor(langCode: String) {
    this._langCode = langCode;
  }

  @Expose({ name: 'langCode' })
  public set langCode(langCode: String) {
    this._langCode = langCode;
  }

  public get langCode() {
    return this._langCode;
  }
}
