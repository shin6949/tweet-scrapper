import { Exclude, Expose } from 'class-transformer';

export class PapagoLanguageDetectRequestDTO {
  @Exclude()
  private _query: string;

  constructor(query: string) {
    this._query = query;
  }

  @Expose({ name: 'query' })
  public get query(): string {
    return this._query;
  }
}

export class PapagoLanguageDetectResponseDTO {
  @Exclude()
  private _langCode: string;

  constructor(langCode: string) {
    this._langCode = langCode;
  }

  @Expose({ name: 'langCode' })
  public set langCode(langCode: string) {
    this._langCode = langCode;
  }

  public get langCode(): string {
    return this._langCode;
  }
}
