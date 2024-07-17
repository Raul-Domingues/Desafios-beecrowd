import promptSync from 'prompt-sync';

const prompt = promptSync();

// Função para converter graus em horas, minutos e segundos
function grausParaTempo(graus: number): [number, number, number] {
    const totalHoras = graus * 24 / 360;
    const horas = Math.floor(totalHoras);
    const totalMinutos = (totalHoras - horas) * 60;
    const minutos = Math.floor(totalMinutos);
    const segundos = Math.floor((totalMinutos - minutos) * 60);
    return [horas, minutos, segundos];
}

// Função para determinar a saudação com base nas horas
function determinarSaudacao(horas: number): string {
    if (horas >= 0 && horas < 6) {
        return "De Madrugada!!";
    } else if (horas >= 6 && horas < 12) {
        return "Bom Dia!!";
    } else if (horas >= 12 && horas < 18) {
        return "Boa Tarde!!";
    } else {
        return "Boa Noite!!";
    }
}

// Loop principal para ler entradas do usuário
while (true) {
    const input = prompt('Digite a posição do Sol/Lua em graus (ou Ctrl+C para sair): ');
    const graus = parseFloat(input.trim());
    
    if (!isNaN(graus) && graus >= 0 && graus < 360) {
        const [horas, minutos, segundos] = grausParaTempo(graus);
        const saudacao = determinarSaudacao(horas);
        console.log(saudacao);
        console.log(`${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`);
    } else {
        console.log("Por favor, insira um valor válido entre 0 e 360.");
    }
}
