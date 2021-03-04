
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
const obj= []
class Pessoa{
    constructor(nome, idade){
        this.nome=nome;
        this.idade=idade;
    }
}
class PessoaMaior extends Pessoa{
    constructor(nome, idade){
        super(nome, idade)       
    }
    maior(){
        this.idade>=18? console.log("sim"):console.log("não");            
    } 
}

const p1=new Pessoa("pedro", 45)
const p2=new Pessoa("joao", 72)
const p3=new Pessoa("lula", 51)
const p4=new Pessoa("novinha", 16)
const p5=new Pessoa("viado", 69)
const p6=new Pessoa("doispato", 22)
const p7=new PessoaMaior("jesus", 33)
const p8=new Pessoa("mayke", 31)


obj.push(p1,p2,p3,p4,p5,p6,p7,p8)

const post = document.querySelector('.post')
let btnApagar= document.querySelector("button");
let i =0;
function criarTarefa(el){
    let tr = document.createElement('tr');
    tr.classList.add('tarefa');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let nomeTextNode= document.createTextNode(`${el.nome}`);
    let idadeTextNode= document.createTextNode(`${el.idade}`);
    td1.appendChild(nomeTextNode);
    td2.appendChild(idadeTextNode);
    tr.appendChild(td1);
    tr.appendChild(td2);
    post.appendChild(tr);
}
const postarTarefa=()=>{
    obj.forEach(criarTarefa)
}
postarTarefa()
console.log('jesus era maior de 18?')
p7.maior()
let tarefas = document.querySelectorAll(".tarefa");

function marcarTarefa(){
    while(tarefas[i]){
        tarefas[i].addEventListener('click', (e)=>{
            console.log(e.target.parentNode.classList.toggle('feito'))
        })  
        i++;
    }
}
marcarTarefa()

function apagarTarefa(){    
    for(i=0;i<tarefas.length;i++){
        if(tarefas[i].classList.contains('feito')){
            tarefas[i].remove()
        }
    }
}
btnApagar.addEventListener('click', apagarTarefa)





  


