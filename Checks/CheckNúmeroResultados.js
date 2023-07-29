import http from 'k6/http';
import { check } from 'k6';

const response = http.get('https://api.example.com/posts');
check(response, {
  'Has 100 posts': (res) => JSON.parse(res.body).length === 100,
});



//Verifica o número de resultados retornados por uma requisição, como o número de itens em uma lista. É usado para validar a integridade dos dados retornados.