import chalk from 'chalk';
console.log(chalk.bgMagenta('Testando npm chalk'));




let aluno = "Lucas Mendes";
let idade = 10;

if(idade >= 18){
   console.log(chalk.yellow(`${aluno} é maior de idade!`));
} else {
    console.log(`${aluno} ${chalk.bgCyan(`é menor de idade!`)}`)
}

/* para instalar o chalk utilizamos o comando npm install chalk */
/* Chalk é um dos muitos pacotes disponíveis no repositório npmjs.com */