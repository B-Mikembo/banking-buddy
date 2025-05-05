import axios from 'redaxios';

export class AxiosFactory {
  public static getAxios() {
    return axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
}

export interface AxiosError {
  status: number;
  data: any;
}
