import axios from "axios";

export const api = axios.create({ // criando instância do axios para setar algumas informações padrão para todas as requisições.
  baseURL: 'https://localhost:3000/api',
})