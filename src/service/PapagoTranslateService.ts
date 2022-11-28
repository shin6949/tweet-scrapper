import { instanceToPlain, plainToClass } from 'class-transformer';
import axios from 'axios';
import { PapagoRequestHeader } from '../dto/PapagoRequestHeader';
import {
  PapagoTranslateRequestDTO,
  PapagoTranslateResponseDTO,
} from '../dto/PapagoTranslateRequestDTO';

export const doPapagoTranslate = (
  source: String,
  query: String
): PapagoTranslateResponseDTO => {
  const requestHeader = new PapagoRequestHeader(
    process.env.NAVER_CLIENT_ID,
    process.env.NAVER_CLIENT_SECRET
  );

  const requestBody = new PapagoTranslateRequestDTO(source, 'ko', query);

  axios
    .post('https://openapi.naver.com/v1/papago/n2mt', null, {
      headers: instanceToPlain(requestHeader),
      params: instanceToPlain(requestBody),
    })
    .then((res) => {
      return plainToClass(PapagoTranslateResponseDTO, res.data);
    })
    .catch((err) => console.log(err));

  return null;
};
