interface Case {
    char: number;   //número de caracteres na cifra
    qntChar: number;   //número de mensagens a serem cifradas
    Originalcipher: string;  //string com os caracteres da cifra original
    substituteCipher: string;  // string com os caracteres substitutos correspondentes
    messages: string[]; // Um array de mensagens cifradas a serem decifradas
}

function decryptMessages(cases: Case[]): string {
    const result: string[] = [];

    cases.forEach((caseData) => {
        const { char, qntChar, Originalcipher, substituteCipher, messages } = caseData;

        const mapOriginalToReplacement: { [key: string]: string } = {};
        const mapReplacementForOriginal: { [key: string]: string } = {};

        for (let i = 0; i < qntChar; i++) {
            mapOriginalToReplacement[Originalcipher[i].toLowerCase()] = substituteCipher[i].toLowerCase();
            mapReplacementForOriginal[substituteCipher[i].toLowerCase()] = Originalcipher[i].toLowerCase();
        }

        function decifra(texto: string): string {
            return texto.split('').map(char => {
                const lowerChar = char.toLowerCase();
                if (mapOriginalToReplacement[lowerChar]) {
                    return char === lowerChar
                        ? mapOriginalToReplacement[lowerChar]
                        : mapOriginalToReplacement[lowerChar].toUpperCase();
                } else if (mapReplacementForOriginal[lowerChar]) {
                    return char === lowerChar
                        ? mapReplacementForOriginal[lowerChar]
                        : mapReplacementForOriginal[lowerChar].toUpperCase();
                } else {
                    return char;
                }
            }).join('');
        }

        messages.forEach((message) => {
            result.push(decifra(message));
        });
        result.push('');
    });

    return result.join('\n');
}

const cases: Case[] = [
    {
        char: 5,
        qntChar: 1,
        Originalcipher: 'ZENIT',
        substituteCipher: 'POLAR',
        messages: ['Osro roxre osri caftide']
    },
    {
        char: 3,
        qntChar: 1,
        Originalcipher: 'ABC',
        substituteCipher: 'XYZ',
        messages: ['testando']
    }
];

console.log(decryptMessages(cases));
