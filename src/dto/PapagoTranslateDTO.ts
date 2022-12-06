import { Expose } from 'class-transformer';
import 'reflect-metadata';

export class PapagoTranslateRequestDTO {
  @Expose({ name: 'source' })
  source: string;
  @Expose({ name: 'target' })
  target: string;
  @Expose({ name: 'text' })
  text: string;

  constructor(source: string, target: string, text: string) {
    this.source = source;
    this.target = target;
    this.text = text;
  }
}

class Result {
  @Expose({ name: 'srcLangType' })
  srcLangType: string;
  @Expose({ name: 'tarLangType' })
  tarLangType: string;
  @Expose({ name: 'translatedText' })
  translatedText: string;
  @Expose({ name: 'engineType' })
  engineType: string;
  @Expose({ name: 'pivot' })
  pivot?: string;
  @Expose({ name: 'dict' })
  dict?: string;
  @Expose({ name: 'tarDict' })
  tarDict?: string;

  constructor() {}
}

class PapagoTranslateResult {
  @Expose({ name: 'result' })
  result: Result;
  @Expose({ name: '@type' })
  type: string;
  @Expose({ name: '@service' })
  service: string;
  @Expose({ name: '@version' })
  version: string;

  constructor() {}
}

export class PapagoTranslateResponseDTO {
  @Expose({ name: 'message' })
  message: PapagoTranslateResult;

  constructor() {}
}
