function calcMedia(){
    return(this.nota[0] + this.nota[1]) /2;
}

var aluno = {
    nome: "Igor",
    notas: [5, 8],

    media: calcMedia
}

var aluno1 = {
    nome:"João",
    notas:[7, 9],

    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media());

console.log(aluno1.nome)
console.log(aluno1.media());