// class Conta{
//     constructor(fatura, deposito, saque){
//         this.fatura=0;
//         this.deposito=(valor)=>{
//             this.fatura= valor;
//         }
//         this.saque=(valor)=>{
//             this.fatura-=valor;
//         }
//     }
// }
// let c1=new Conta()
// c1.deposito(100)
// c1.saque(34.5)
// console.log("fatura",c1.fatura)

function criaObjeto() {
    const obj = []
    class Pessoa {
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
    }

    class PessoaMaior extends Pessoa {
        constructor(nome, idade) {
            super(nome, idade)
        }
        maior() {
            this.idade >= 18 ? console.log("sim") : console.log("não");
        }
    }

    const p1 = new Pessoa("Pedro", 45)
    const p2 = new Pessoa("João", 72)
    const p3 = new Pessoa("Lula", 51)
    const p4 = new Pessoa("Ana", 16)
    const p5 = new Pessoa("Assis", 61)
    const p6 = new Pessoa("Aline", 22)
    const p7 = new PessoaMaior("Júlio", 33)
    const p8 = new Pessoa("Mayke", 31)

    obj.push(p1, p2, p3, p4, p5, p6, p7, p8)
    return obj
}

let obj = criaObjeto()

const post = document.querySelector('.post')
let btnApagar = document.querySelector("button");
let i = 0;

function criarTarefa(el) {
    let tr = document.createElement('tr');
    tr.classList.add('tarefa');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let nomeTextNode = document.createTextNode(`${el.nome}`);
    let idadeTextNode = document.createTextNode(`${el.idade}`);
    td1.appendChild(nomeTextNode);
    td2.appendChild(idadeTextNode);
    tr.appendChild(td1);
    tr.appendChild(td2);
    post.appendChild(tr);
}

const postarTarefa = (obj) => {
    obj.forEach(criarTarefa)
}

postarTarefa(obj)

let tarefas = document.querySelectorAll(".tarefa");

function marcarTarefa() {
    while (tarefas[i]) {
        tarefas[i].addEventListener('click', (e) => {
            console.log(e.target.parentNode.classList.toggle('feito'))
        })
        i++;
    }
}

marcarTarefa()

function apagarTarefa() {
    for (i = 0; i < tarefas.length; i++) {
        if (tarefas[i].classList.contains('feito')) {
            console.log("Tarefa apagada")
            tarefas[i].remove()
        }
    }
}

btnApagar.addEventListener('click', apagarTarefa)