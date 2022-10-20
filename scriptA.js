function calcula(){
    //entrada de dados
    //  let nota1 = Number(document.getElementById("nota1").value)
    //  let nota2 = Number(document.getElementById("nota2").value)
    //  let nota3 = Number(document.getElementById("nota3").value)
    //  let nota4 = Number(document.getElementById("nota4").value)
     let media = 0
  
      let nota = 0
      let notaSoma = 0
      let alunos;
      let mGeral = 0

    for(let x=1; x <=3 ; x++){
        notaSoma = 0;
        alunos = document.getElementById(`nome${x}`).value;
        console.log(alunos)
        for(let y=1; y<=4 ; y++){
          nota = Number(document.getElementById(`nota${x}${y}`).value);
          notaSoma += nota;
        } 
        //processamento de dados
        media = (notaSoma)/4

     if(media >= 50){
      document.getElementById(`sit${x}`).style.backgroundColor = 'green';
      document.getElementById(`sit${x}`).value = "Aprovado";
    }else if(media < 50 && media >= 25 ){
      document.getElementById(`sit${x}`).value = "Recuperação"
      document.getElementById(`sit${x}`).style.backgroundColor = 'yellow';
    }else if(media < 25){
      document.getElementById(`sit${x}`).value = "Reprovado"
      document.getElementById(`sit${x}`).style.backgroundColor = 'red';  
    }

    mGeral = (mGeral + media)/x;

    //saída de dados
    document.getElementById(`media${x}`).innerText = media
    document.getElementById("mGeral").innerText = mGeral
  }
}
var alunos = 3;

document.getElementById('titulo').innerHTML = '<em>alunos</em>'

function addLinha(){
  let tabelaAntiga = document.getElementById("listaAlunos")
  alunos += 1
 // document.getElementById("listaAlunos").innerHTML = tabelaAntiga +   `<tbody><tr><th>1</th><td><input type="text" class="form-control" id= nome ${alunos} placeholder="nome"></td><td><input type="number" class="form-control" id="nota ${alunos}1" placeholder=""></td><td><input type="number" class="form-control" id="nota ${alunos} 2" placeholder=""></td><td><input type="number" class="form-control" id="nota ${alunos} 3" placeholder=""></td><td><input type="number" class="form-control" id="nota ${alunos} 4" placeholder=""></td><td><output id="media1"></output></td><td><output id="sit1"></output></td></tr>`
  let lista = document.createElement('tr')
  lista.innerText = `<th>$alunos</th><td><input type="text" class="form-control" id= nome ${alunos} placeholder="nome"></td><td><input type="number" class="form-control" id="nota ${alunos}1" placeholder=""></td><td><input type="number" class="form-control" id="nota ${alunos} 2" placeholder=""></td><td><input type="number" class="form-control" id="nota ${alunos} 3" placeholder=""></td><td><input type="number" class="form-control" id="nota ${alunos} 4" placeholder=""></td><td><output id="media1"></output></td><td><output id="sit1"></output></td>`
  tabelaAntiga.appendChild(lista)
}



