import http from 'k6/http';
import { check } from 'k6';

const response = http.get('https://api.example.com/posts/1');
check(response, {
  'Response time is less than 200ms': (res) => res.timings.duration < 200,
});


//Verifica se o tempo de resposta da requisição está dentro de limites aceitáveis. É usado para garantir que a aplicação atende aos critérios de desempenho.