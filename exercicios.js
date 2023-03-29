// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) { 
    const altura1 = Number(prompt(`Digita a altura:`))
    const largura1 = Number(prompt(`Digite a largura:`))
    console.log(altura1 * largura1)
}


// EXERCÍCIO 02
function imprimeIdade(atual, nascimento) {
    const anoAtual = Number(prompt(`Digite o ano atual:`))
    const anoNasc = Number(prompt(`Digite o seu ano de nascimento:`))
    const idade = anoAtual - anoNasc
    return console.log(idade)
 
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    
    const altura1 = altura*= altura
    const imc = peso/= altura1
    return imc
}
const imc2 = calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt(`Digite seu nome:`)
  const idade = prompt(`Digite sua idade:`)
  const email = prompt(`Digite seu email:`)
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}
imprimeInformacoesUsuario(info)

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite uma cor favorita")
  const cor2 = prompt("Digite outra uma cor")
  const cor3 = prompt("Digite mais uma cor")
  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const numIgressos = custo/=valorIngresso
  return numIgressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const comparaStrings = string1.length === string2.length
  return comparaStrings

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return retornoElemento = array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return retornoElemento = array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const trocaElemento1 = array[0]
  const trocaElemento2 = array[array.length-1]
  array[0] = trocaElemento2
  array[array.length-1] = trocaElemento1

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const compara =  string1.toUpperCase() === string2.toUpperCase()
  return compara

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt(`Digite o ano atual:`))
  const anoNasc = Number(prompt(`Digite seu ano de nascimento:`))
  const anoID = Number(prompt(`Qual o ano de emissão da sua identidade?`))

  const idade20 = anoAtual-anoNasc <= 20 && anoAtual-anoID < 10 && anoAtual-anoID >= 5
  const idade2050 = anoAtual-anoNasc > 20 && anoAtual-anoNasc <= 50 && anoAtual-anoID < 15 && anoAtual-anoID >= 10
  const idade50 = anoAtual-anoNasc >= 50 && anoAtual-anoID >= 15

  const respostaRenov = (idade20|| idade2050 || idade50)

  console.log(respostaRenov)

}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multi400 = ano % 400 === 0
  const multi100 = ano % 100 === 0
  const multi4 = ano % 4 === 0 || multi400 && (!multi100 || multi400)
  return (multi400 || multi4) && (!multi100 || multi4) && (!multi100 || multi400)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = (prompt(`Você tem mais de 18 anos?`)) 
  const escolaridade = (prompt(`Você possui ensino médio completo?`)) 
  const disponibilidade = (prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`)) 
  const resposta = "sim"

  const validade = (idade === resposta && escolaridade === resposta && disponibilidade === resposta)
  console.log(validade)

}