import { Exclude, Expose } from 'class-transformer';

export class PapagoTranslateRequestDTO {
  @Exclude() private _source: String;
  @Exclude() private _target: String;
  @Exclude() private _text: String;

  constructor(source: String, target: String, text: String) {
    this._source = source;
    this._target = target;
    this._text = text;
  }

  @Expose({ name: 'source' })
  public get source(): String {
    return this._source;
  }

  @Expose({ name: 'target' })
  public get target(): String {
    return this._target;
  }

  @Expose({ name: 'text' })
  public get text(): String {
    return this._text;
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

class PapagoTranslateResult {
  @Exclude() private _result: Result;
  @Exclude() private _type: String;
  @Exclude() private _service: String;
  @Exclude() private _version: String;

  constructor(result: Result, type: String, service: String, version: String) {
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
  public get type(): String {
    return this._type;
  }

  @Expose({ name: '@service' })
  public get service(): String {
    return this._service;
  }

  @Expose({ name: '@version' })
  public get version(): String {
    return this._version;
  }
}

class Result {
  @Exclude() private _srcLangType: String;
  @Exclude() private _tarLangType: String;
  @Exclude() private _translatedText: String;
  @Exclude() private _engineType: String;
  @Exclude() private _pivot?: String;
  @Exclude() private _dict?: String;
  @Exclude() private _tarDict?: String;

  constructor(
    srcLangType: String,
    tarLangType: String,
    translatedText: String,
    engineType: String,
    pivot?: String,
    dict?: String,
    tarDict?: String
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
  public get srcLangType(): String {
    return this._srcLangType;
  }

  @Expose({ name: 'tarLangType' })
  public get tarLangType(): String {
    return this._tarLangType;
  }

  @Expose({ name: 'translatedText' })
  public get translatedText(): String {
    return this._translatedText;
  }

  @Expose({ name: 'engineType' })
  public get engineType(): String {
    return this._engineType;
  }

  @Expose({ name: 'pivot' })
  public get pivot(): String {
    return this._pivot;
  }

  @Expose({ name: 'dict' })
  public get dict(): String {
    return this._dict;
  }

  @Expose({ name: 'tarDict' })
  public get tarDict(): String {
    return this._tarDict;
  }
}
