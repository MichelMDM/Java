// Qunado você faz um curso no Senac para ser aprovado precisa 
// atender a uma competencia e ter acima ou igual de 70% de frequencia. 
// vamos fazer um programa que resolva essa questão. 
// exibir se o aluno foi aprovado ou não. 

// var competencia = prompt('o aluno atingiu a competencia? sim ou não');
// var frequencia = prompt('informe a porcetagem de frequencia');

// if(competencia =='sim' && frenquencia >= 70) {
//     document.write('o aluno foi aprovado')
// }else {
//     document.write('o aluno foi reprovado')
// }




// A escola lemos segundo resolver criar um programa para ajudar os 
// professores nos conceitos dos estudantes. O(a) professor(a) ira 
// digitar a nota tirada pelo Aluno . Caso seja menor do que 0 ou maior 
// do que 10 o programa irá escrever ''nota invalida'' se for maior ou
// igual a 0 e menor do que 4 o programa ira escrever , ''aluno reprovado''. 
// Se a nota for maior ou igual a 4 e menor do que 7 o programa ira 
// escrever ''aluno em recuperação'' e caso seja maior ou igual a 7 
// e menor ou igual a 10 escrevera ''aluno aprovado''.

// var notaDoAluno = prompt('Digite a nota do aluno:');
// if(notaDoAluno < 0 || notaDoAluno > 10) {
//     document.write('nota invalida')
// }
// else if(notaDoAluno >=0 && notaDoAluno < 4) {
//     document.write('aluno reprovado')
// }
// else if(notaDoAluno >= 4 && notaDoAluno < 7) {
//     document.write('aluno em recuperação')
// }
// else if(notaDoAluno >=7 && notaDoAluno <= 10) {
//     document.write('aluno aprovado')
// };


// Faça um programa que dependendo da cor favorita do usuario seja informado
// uma mensagem . 
// amarelo = voce gosta do sol 
// azul = voce gosta do mar 
// verde = voce gosta da floresta

// var corFavorita = prompt('informe a sua cor favorita: ');
// switch(corFavorita) {
//     case 'amarelo':
//         document.write('voce gosta do sol');
//         break
//     case 'azul':
//         document.write('voce gosta do mar');
//         break
//     case 'verde':
//         document.write('voce gosta da floresta');
//         break
//     default:
//         document.write('voce nao gosta de nada');
// };


// Construir um programa no qual o usuario digitara um numero entre 1 e 12
// e o sistema retornara na tela qual mês corresponde a esse numero . o 
// desenvolvedor tera que utilizar o comando swith .

var mês = prompt('informe o mês');
switch(mês) {
    case '1':
        document.write('janeiro');
        break
        case '2':
            document.write('fevereiro');
            break
            case '3':
                document.write('março');
                break
                case '4':
                    document.write('abril');
                    break
                    case '5':
                        document.write('maio');
                        break
                        case '6':
                            document.write('junho');
                            break
                            case '7':
                                document.write('julho');
                                break
                                case '8':
                                    document.write('agosto');
                                    break
                                    case '9':
                                        document.write('setembro');
                                        break
                                        case '10':
                                            document.write('outubro');
                                            break
                                            case '11':
                                                document.write('novembro');
                                                break
                                                case '12':
                                                    document.write('dezembro');
                                                    break
                                                    default:
                                                   document.write('não existe esse mês');     
                                            
                                            
                                


};



// Agora o estudante construira utilizando o comando swuith um programa para
// o senac o instrutor ira digitar um desses três conceitos (A, PA ou NA). 
// caso ele escolha A , escrevera na tela ''atendido''; caso ele escolha PA ,
// o programa escrevera na tela ''parcialmente atendido'' ; ou caso ele 
// digite MA ; O  programa colocara na tela '' não atendido'' . 



















