import { Exclude, Expose } from 'class-transformer';

export class PapagoTranslateRequestDTO {
  @Exclude() private _source: string;
  @Exclude() private _target: string;
  @Exclude() private _text: string;

  constructor(source: string, target: string, text: string) {
    this._source = source;
    this._target = target;
    this._text = text;
  }

  @Expose({ name: 'source' })
  public get source(): string {
    return this._source;
  }

  @Expose({ name: 'target' })
  public get target(): string {
    return this._target;
  }

  @Expose({ name: 'text' })
  public get text(): string {
    return this._text;
  }
}

class Result {
  @Exclude() private _srcLangType: string;
  @Exclude() private _tarLangType: string;
  @Exclude() private _translatedText: string;
  @Exclude() private _engineType: string;
  @Exclude() private _pivot?: string;
  @Exclude() private _dict?: string;
  @Exclude() private _tarDict?: string;

  constructor(
    srcLangType: string,
    tarLangType: string,
    translatedText: string,
    engineType: string,
    pivot?: string,
    dict?: string,
    tarDict?: string
  ) {
    this._srcLangType = srcLangType;
    this._tarLangType = tarLangType;
    this._translatedText = translatedText;
    this._engineType = engineType;
    this._pivot = pivot;
    this._dict = dict;
    this._tarDict = tarDict;
  }

  @Expose({ name: 'srcLangType' })
  public get srcLangType(): string {
    return this._srcLangType;
  }

  @Expose({ name: 'tarLangType' })
  public get tarLangType(): string {
    return this._tarLangType;
  }

  @Expose({ name: 'translatedText' })
  public get translatedText(): string {
    return this._translatedText;
  }

  @Expose({ name: 'engineType' })
  public get engineType(): string {
    return this._engineType;
  }

  @Expose({ name: 'pivot' })
  public get pivot(): string {
    return this._pivot;
  }

  @Expose({ name: 'dict' })
  public get dict(): string {
    return this._dict;
  }

  @Expose({ name: 'tarDict' })
  public get tarDict(): string {
    return this._tarDict;
  }
}

class PapagoTranslateResult {
  @Exclude() private _result: Result;
  @Exclude() private _type: string;
  @Exclude() private _service: string;
  @Exclude() private _version: string;

  constructor(result: Result, type: string, service: string, version: string) {
    this._result = result;
    this._type = type;
    this._service = service;
    this._version = version;
  }

  @Expose({ name: 'result' })
  public get result(): Result {
    return this._result;
  }

  @Expose({ name: '@type' })
  public get type(): string {
    return this._type;
  }

  @Expose({ name: '@service' })
  public get service(): string {
    return this._service;
  }

  @Expose({ name: '@version' })
  public get version(): string {
    return this._version;
  }
}

export class PapagoTranslateResponseDTO {
  @Exclude() private _message: PapagoTranslateResult;

  constructor(message: PapagoTranslateResult) {
    this._message = message;
  }

  @Expose({ name: 'message' })
  public get message(): PapagoTranslateResult {
    return this._message;
  }
}
