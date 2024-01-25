/* Instruções para entrega
# ⿡ Desafio Classificador de nível de Herói

*O Que deve ser utilizado*

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome *{nome}* está no nível de *{nivel}*" */

let hankHeroi = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante"]
let xpHeroi = [1000 , 1001 , 2000 , 2001 , 5000 , 5001 , 7000 , 7001 , 8000 , 8001 , 9000 , 9001 , 10000 , 10001]


var heroiName = prompt ("Qual nome do seu héroi? ")
console.log("Bem vindo de volta ao jogo! " + heroiName + " se encontra em um nível diferente da última vez, va conferir...")


var nivelheroi = prompt ("Digite aqui o XP do seu héroi: ")


function obterNivelHeroi (xp) {
    for (let i = 0; i < xpHeroi.length; i++) {
        if (xp < xpHeroi[i]) {
            return hankHeroi[i]
        }
     }
     return "radiant";
}



console.log ("O Héroi " + heroiName + " ésta na hanked " + obterNivelHeroi (nivelheroi))