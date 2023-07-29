import http from 'k6/http';
import { sleep } from 'k6';

// Função que define o cenário de teste
export default function () {
  // Realiza uma requisição GET para um endpoint de exemplo
  const response = http.get('https://jsonplaceholder.typicode.com/posts/1');

  // Imprime a resposta da requisição no console
  console.log(response.body);

  // Define um tempo de espera entre as requisições (opcional)
  sleep(1); // 1 segundo de pausa entre as requisições
}
//Neste exemplo, utilizei a  biblioteca http do k6 para realizar uma requisição GET para o endpoint https://jsonplaceholder.typicode.com/posts/1, que é um exemplo da API JSONPlaceholder.
//A resposta da requisição é armazenada na variável response, e em seguida, imprimimos o corpo da resposta no console usando console.log(response.body).