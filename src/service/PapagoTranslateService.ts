import { instanceToPlain, plainToClass } from 'class-transformer';
import axios from 'axios';
import { PapagoRequestHeader } from '../dto/PapagoRequestHeader';
import {
  PapagoTranslateRequestDTO,
  PapagoTranslateResponseDTO,
} from '../dto/PapagoTranslateDTO';

export const doPapagoTranslate = async (
  source: string,
  query: string
): Promise<PapagoTranslateResponseDTO> => {
  const requestHeader = new PapagoRequestHeader(
    process.env.NAVER_CLIENT_ID,
    process.env.NAVER_CLIENT_SECRET
  );

  const requestBody = new PapagoTranslateRequestDTO(
    source,
    'ko',
    query.replace(/\[/g, '%open').replace(/\]/, '%close')
  );

  const result = await axios
    .post('https://openapi.naver.com/v1/papago/n2mt', null, {
      headers: instanceToPlain(requestHeader),
      params: instanceToPlain(requestBody),
    })
    .then((res) => {
      const result: PapagoTranslateResponseDTO = plainToClass(
        PapagoTranslateResponseDTO,
        res.data
      );
      return result;
    })
    .catch((err) => {
      console.log(err);
      return new PapagoTranslateResponseDTO();
    });

  return result;
};
