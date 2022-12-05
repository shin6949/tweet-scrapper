import axios from 'axios';
import { instanceToPlain, plainToClass } from 'class-transformer';
import {
  PapagoLanguageDetectRequestDTO,
  PapagoLanguageDetectResponseDTO,
} from '../dto/PapagoLanguageDetectDTO';
import { PapagoRequestHeader } from '../dto/PapagoRequestHeader';

export const doPapagoLanguageDetect = (
  query: string
): PapagoLanguageDetectResponseDTO => {
  const requestHeader = new PapagoRequestHeader(
    process.env.NAVER_CLIENT_ID,
    process.env.NAVER_CLIENT_SECRET
  );

  const requestBody = new PapagoLanguageDetectRequestDTO(query);

  axios
    .post('https://openapi.naver.com/v1/papago/detectLangs', null, {
      headers: instanceToPlain(requestHeader),
      params: instanceToPlain(requestBody),
    })
    .then((res) => {
      return plainToClass(PapagoLanguageDetectResponseDTO, res.data);
    })
    .catch((err) => console.log(err));

  return new PapagoLanguageDetectResponseDTO(null);
};
