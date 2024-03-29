import {AppExcaptions} from '../appExcaptions';

export class ApiService {
  jsonResponse: Promise<any> | undefined;
  async getGetApiResponse(url: string) {
    try {
      const requestBody = this.createRequestBody('GET');
      const response = await fetch(url, requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  async getPostApiResponse(url: string, payload: any) {
    try {
      const requestBody = this.createRequestBody('POST', payload);
      const response = await fetch(url, requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  async getPutApiResponse(url: string, payload: any) {
    try {
      const requestBody = this.createRequestBody('PUT', payload);
      const response = await fetch(url, requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  async getDeleteApiResponse(url: string, payload: any) {
    try {
      const requestBody = this.createRequestBody('DELETE', payload);
      const response = await fetch(url, requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  createRequestBody(method: string, payload: any = {}) {
    const requestBody = {
      method,
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
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
      case 500:
        throw new AppExcaptions(body.message, 'Internal server error ');
      default:
        throw new Error('Something went wrong while fetching data');
    }
  }
}
