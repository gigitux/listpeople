import axios from 'axios';
import { environment } from '../environments/environment';

export const clientHttp = axios.create({
  baseURL: environment.baseUrl,
});
