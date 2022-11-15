import { Exclude, Expose } from 'class-transformer';

export class PapagoLangageDetectRequestDto {
  @Exclude()
  private _source: LanguageCode;

  @Exclude()
  private _target: String;

  @Exclude()
  private _text: String;
}

export const LanguageCode = {
  korean: 'ko',
  japanese: 'ja',
  chinese: 'zh-TW',
  traditionalChinese: 'zh-CN',
  hindi: 'hi',
  english: 'en',
  spanish: 'es',
  franch: 'fr',
  german: 'de',
} as const;
type LanguageCode = typeof LanguageCode[keyof typeof LanguageCode];
