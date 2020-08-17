import axios, { AxiosRequestConfig } from 'axios';


type requestHandler = (request: AxiosRequestConfig) => AxiosRequestConfig;

export const createClient = (baseURL: string, config: AxiosRequestConfig = {}, interceptor: requestHandler = (request: AxiosRequestConfig)=>request) => {
  const options: AxiosRequestConfig = {
    baseURL: baseURL,
    ...config,
  }
  const client = axios.create(options);

  client.interceptors.request.use(
    interceptor,
    (requestError) => {
      console.log("request errors", requestError)
      // add logger here;
      return Promise.reject(requestError);
    },
  );

  // Add a response interceptor
  client.interceptors.response.use(
    response => response,
    (error) => {
      if (error && error.response){
      }
      return Promise.reject(error);
    }
  );
  return client;
}
