
alert('iremos fazer a média escolar de um aluno');

let studentName = prompt('Digite o nome do aluno ');

let scoreOne = prompt('Digite a primeira nota do bimestre: ');
let scoreTwo = prompt('Digite a segunda nota do bimestre: ');
let scoreThree = prompt('Digite a terceira nota do bimestre: ');
let calcMedia = (Number(scoreOne) + Number(scoreTwo) + Number(scoreThree)) / 3;
let fixedMedia = calcMedia.toFixed(2);



const scoreMax = 10;
const scoreMedia = scoreMax * 0.6;
const scoreMin = scoreMax * 0.3;


if (calcMedia >= scoreMedia) {
    alert('Parabéns ' + studentName + ', você foi aprovado! :) ' + '\nSua média foi de: ' + fixedMedia);
} 

else if (calcMedia <= scoreMin) {
    alert('Que pena ' + studentName + ', você foi reprovado! :( ' + '\nSua média foi de: ' + fixedMedia);
}

else {
    alert('Que pena ' + studentName + ', você está de recuperação! :( ' + '\nSua média foi de: ' + fixedMedia + ' \nBons estudos! Você consegue!');
}













