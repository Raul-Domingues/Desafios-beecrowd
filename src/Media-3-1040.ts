import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMedia(N1: number, N2: number, N3: number, N4: number): number {
  const media = (N1 * 2 + N2 * 3 + N3 * 4 + N4 * 1) / 10;
  return media;
}

rl.question('Digite as quatro notas do aluno (separadas por espaço): ', (input) => {
  const notas = input.split(' ').map(Number);
  
  if (notas.length !== 4) {
    console.log('Por favor, informe exatamente quatro notas.');
    rl.close();
    return;
  }
  
  const [N1, N2, N3, N4] = notas;

  const media = calcularMedia(N1, N2, N3, N4);
  
  console.log(`Media: ${media.toFixed(1)}`);

  if (media >= 7.0) {
    console.log('Aluno aprovado.');
  } else if (media < 5.0) {
    console.log('Aluno reprovado.');
  } else {
    console.log('Aluno em exame.');

    rl.question('Digite a nota do exame: ', (notaExameInput) => {
      const notaExame = parseFloat(notaExameInput);
      
      console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
      
      const mediaFinal = (media + notaExame) / 2;
      
      if (mediaFinal >= 5.0) {
        console.log('Aluno aprovado.');
      } else {
        console.log('Aluno reprovado.');
      }
      
      console.log(`Media final: ${mediaFinal.toFixed(1)}`);
      rl.close();
    });
    
    return;
  }

  rl.close();
});
