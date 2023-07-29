import http from 'k6/http';
import { check } from 'k6';

const response = http.get('https://api.example.com/posts/1');
check(response, {
  'Contains expected keyword': (res) => res.body.includes('exemplo'),
});
//Verifica se o conteúdo retornado pela requisição corresponde ao esperado. Isso pode ser usado para verificar se uma palavra-chave específica está presente na resposta.