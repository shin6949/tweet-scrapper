import axios from 'axios';
import { instanceToPlain, plainToClass } from 'class-transformer';
import {
  PapagoLanguageDetectRequestDTO,
  PapagoLanguageDetectResponseDTO,
} from '../dto/PapagoLanguageDetectDTO';
import { PapagoRequestHeader } from '../dto/PapagoRequestHeader';

export const doPapagoLanguageDetect = async (
  query: string
): Promise<PapagoLanguageDetectResponseDTO> => {
  const requestHeader = new PapagoRequestHeader(
    process.env.NAVER_CLIENT_ID,
    process.env.NAVER_CLIENT_SECRET
  );

  const requestBody = new PapagoLanguageDetectRequestDTO(query);

  const result = await axios
    .post('https://openapi.naver.com/v1/papago/detectLangs', null, {
      headers: instanceToPlain(requestHeader),
      params: instanceToPlain(requestBody),
    })
    .then((res) => {
      return plainToClass(PapagoLanguageDetectResponseDTO, res.data);
    })
    .catch((err) => {
      console.error(err);
      return new PapagoLanguageDetectResponseDTO(null);
    });

  return result;
};
