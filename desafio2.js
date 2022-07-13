enum Trabalho{
    Atriz = "Atriz",
    Padeiro ="Padeiro",
}

interface IPessoa{
    nome: string;
    idade: number
    Profissao: profissao
}

let pessoa1: IPessoa = {
    nome: 'maria',
    idade: 29,
    Profissao: Trabalho.Atriz
};

let pessoa2: IPessoa = {
    nome: 'roberto',
    idade: 19,
    Profissao: Trabalho.Padeiro
};

let pessoa3: IPessoa = {
    nome: 'laura',
    idade: 32,
    Profissao: Trabalho.Atriz
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    Profissao: Trabalho.Padeiro
}

console.log(`Nome da pessoa1 ${pessoa1.nome}, idade ${pessoa1.idade} e trabalho ${pessoa1.profissao} \n`)
console.log(`Nome da pessoa1 ${pessoa2.nome}, idade ${pessoa2.idade} e trabalho ${pessoa2.profissao} \n`)
console.log(`Nome da pessoa1 ${pessoa3.nome}, idade ${pessoa3.idade} e trabalho ${pessoa3.profissao} \n`)
console.log(`Nome da pessoa1 ${pessoa4.nome}, idade ${pessoa4.idade} e trabalho ${pessoa4.profissao} \n`)