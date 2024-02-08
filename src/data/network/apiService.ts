import { getDataFromAsynStorage } from '../../utils/asyncStorage';
import { AppExcaptions } from '../appExcaptions';

export class ApiService {
  jsonResponse: Promise<any> | undefined;
  async getGetApiResponse(url: string) {
    try {
      const requestBody = await this.createRequestBody('GET');
      const response = await fetch(url, requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  async getPostApiResponse(url: string, payload: any) {
    try {
      const requestBody = await this.createRequestBody('POST', payload);
      const response = await fetch(url, requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  async getPutApiResponse(url: string, payload: any) {
    try {
      const requestBody = await this.createRequestBody('PUT', payload);
      const response = await fetch(url, requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  async getDeleteApiResponse(url: string, payload: any) {
    try {
      const requestBody = await this.createRequestBody('DELETE', payload);
      const response = await fetch(url, requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  async createRequestBody(method: string, payload: any = {}) {
    const { data: token } = await getDataFromAsynStorage('token');
    const requestBody = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? token : '',
        //Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2YWxpZCI6dHJ1ZSwiaWQiOiI2NWJiNWQ4MWY3MmYwYzQ3ZTY2YzNhMzEiLCJleHBpcmVzIjoiMjAyNC0wNC0wMSAwODo1OSJ9.K7_X3T5QjCWW1xq7Xh0wkK2_K0u0i5ejpklsme33bVI',
      },
    };

    return method === 'GET'
      ? requestBody
      : {
          ...requestBody,
          body: JSON.stringify(payload),
        };
  }

  async returnResponse(response: Response) {
    const body = await response.json();
    switch (response.status) {
      case 200:
        return body;
      case 201:
        return body;
      case 400:
        throw new AppExcaptions(body.message, 'Bad Request');
      case 404:
        throw new AppExcaptions(body.message, 'Not found');
      case 422:
        throw new AppExcaptions(body.message, 'Validation Error');
      case 500:
        throw new AppExcaptions(body.message, 'Internal server error ');
      default:
        throw new Error('Something went wrong while fetching data');
    }
  }
}
