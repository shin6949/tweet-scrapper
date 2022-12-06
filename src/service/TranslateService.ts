import { PapagoLanguageDetectResponseDTO } from '../dto/PapagoLanguageDetectDTO';
import { PapagoTranslateResponseDTO } from '../dto/PapagoTranslateDTO';
import { doPapagoLanguageDetect } from './PapagoLanguageDetectService';
import { doPapagoTranslate } from './PapagoTranslateService';

export const translateTweet = async (
  toTranslateData: string
): Promise<string> => {
  const languageDetectResult: PapagoLanguageDetectResponseDTO =
    await doPapagoLanguageDetect(toTranslateData);

  console.log(
    '"' +
      toTranslateData +
      '" This phrase was detected in ' +
      languageDetectResult.langCode
  );

  // 언어 감지 과정에 문제가 있거나 unk가 반환된 경우 더 이상 진행하지 않음.
  if (
    languageDetectResult.langCode === null ||
    languageDetectResult.langCode === 'unk' ||
    languageDetectResult.langCode === 'ko'
  ) {
    return null;
  }

  const translateResult: PapagoTranslateResponseDTO = await doPapagoTranslate(
    languageDetectResult.langCode,
    toTranslateData
  );

  if (translateResult !== null) {
    return translateResult.message.result.translatedText;
  }

  return null;
};
