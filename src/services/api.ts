import axios from 'axios';

/*
  baseURL: http://10.0.2.2:3333 (Emulador do Android Studio)
  baseURL: http://10.0.3.2:3333 (Emulador do Genymotion)
  baseURL: Via USB é o IP da máquina na rede. Por exemplo: http://192.168.0.2
  baseURL: http://localhost:3333 (IOS)
*/

const api = axios.create({
  baseURL: 'http://10.0.3.2:3333',
});

export default api;
