import { question } from "readline-sync";
//Duração do curso em anos (ex.: 4 ou 2.5);
//Valor Mensalidade;
//Taxa SELIC e Salário mínimo vigentes;
//Renda Familiar em (R$) e Quantas Pessoas na família;
//Ano e Semestre de Início;
function main(){
const duraçao_curso = Number(question('Duração do curso: '))
const valor_mensalidade = Number(question('Valor da mensalidade: '))
const taxa_selic = Number(question('Taxa SELIC: '))
const salário_minimo = Number(question('Salário mínimo vigentes: '))
const renda_familiar = Number(question('Renda familiar(R$): '))
const quantidade_pessoas_familia = Number(question('Há quantas pessoas na sua família: '))
const Ano_inicio = Number(question('Ano de início: '))
const smestre_inicío = Number(question('Semestre início: '))
const juros_simples = calculo_juros_simples(valor_mensalidade,taxa_selic,duraçao_curso)
function calculo_juros_simples(valor_mensalidade,taxa_selic,duraçao_curso){
    const juros_simples = valor_mensalidade * taxa_selic * duraçao_curso
    return juros_simples 
}

if(salário_minimo >= 0 && salário_minimo <= 1.5){
    const aumento_selic = 1.10 * taxa_selic
    console.log(`O aumento da taxa selic será de ${aumento_selic}% `)

}
}
main()