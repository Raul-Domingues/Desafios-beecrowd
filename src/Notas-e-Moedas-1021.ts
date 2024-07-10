import readline from 'readline';

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function getNotasEModedas(valor: number) {
  const notas = [100, 50, 20, 10, 5, 2];
  const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

  console.log('NOTAS:');
  for(const nota of notas) {
    const qntNotas = Math.floor(valor/nota);
    valor -= qntNotas * nota;
    valor = parseFloat(valor.toFixed(2));
    console.log(`${qntNotas} nota(s) de R$${nota.toFixed(2)}`);
  }

  console.log('MOEDAS:');
  for(const moeda of moedas) {
    const qntMoedas = Math.floor(valor/moeda);
    valor -= qntMoedas * moeda;
    valor = parseFloat(valor.toFixed(2));
    console.log(`${qntMoedas} moeda(s) de R$${moeda.toFixed(2)}`);
  }
}

r1.question('', (valorDigitado: string) => {
  const valor = parseFloat(valorDigitado);
  getNotasEModedas(valor);
  r1.close();
})
