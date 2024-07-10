function jornadaNasEstrelas(n: number, carneiros: number[]): [number, number] {
    let atacadas = new Set<number>();
    let i = 0;
  
    while (i >= 0 && i < n) {
      if (carneiros[i] > 0) {
        atacadas.add(i);
        carneiros[i]--;
      }
  
      if (carneiros[i] % 2 === 0) {
        i--;
      } else {
        i++;
      }
    }
  
    const totalCarneirosRestantes = carneiros.reduce((acc, curr) => acc + curr, 0);
  
    return [atacadas.size, totalCarneirosRestantes];
  }
  
  const input = "5\n2 3 1 5 2";
  const lines = input.split('\n');
  const N = parseInt(lines[0]);
  const X = lines[1].split(' ').map(Number);
  
  const resultado = jornadaNasEstrelas(N, X);
  console.log(resultado.join(' '));
  