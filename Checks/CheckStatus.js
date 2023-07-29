import http from 'k6/http';
import { check } from 'k6';

const response = http.get('https://api.example.com/posts/1');
check(response, {
  'Status is 200': (res) => res.status === 200,
});

//Verifica o código de status HTTP retornado pela requisição (por exemplo, 200, 404, 500). É usado para garantir que a requisição foi processada com sucesso pelo servidor.