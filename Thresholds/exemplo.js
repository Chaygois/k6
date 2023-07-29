import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  thresholds: {
    // Defina um limite para o tempo de resposta médio
    'http_req_duration': ['p(95)<500'], // 95% das respostas devem ser menores que 500ms
    // Defina um limite para a taxa de erros
    'http_req_failed': ['rate<0.1'], // A taxa de erros deve ser menor que 0.1%
  },
};

export default function () {
  const response = http.get('https://jsonplaceholder.typicode.com/posts/1');
  console.log(response.body);
  sleep(1);
}
