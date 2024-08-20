const listaKey = "listaLocalStore"

function verificarExistenciaDaTarefa(){
    let values = JSON.parse(localStorage.getItem(listaKey) || "[]")
    let inputValue = document.getElementById('input-tarefa').value;
    // para procurar o valor
    let existe = values.find(x=> x.name == inputValue)
    // caso não tenha retorna um falso caso contario um verdadeiro
    return !existe ? false: true
}


function addTarefa(){
    
    let input = document.getElementById('input-tarefa');
    input.style.border = ''
    //validação
    if(!input.value){
        input.style.border = '1px solid red'
        alert('ATENÇÃO! Insira a tarefa no campo.');
    }else if(verificarExistenciaDaTarefa()){
        alert('já existe uma tarefa com esse nome')
    }
    else{

        // verificar se a tarefa ja foi inserida
        // convertendo a string para objeto
        let values = JSON.parse(localStorage.getItem(listaKey) || "[]")
            values.push({
                name: input.value
            })
            
            localStorage.setItem(listaKey,JSON.stringify(values))
            mostrarLista()
    }
    input.value = ''
}

function mostrarLista(){
    let values = JSON.parse(localStorage.getItem(listaKey) || "[]")
    let list = document.getElementById('list-tarefa')
    
        list.innerHTML = '';
    
        for (let i = 0; i < values.length; i++) {
            // Concatena os itens à lista existente
            
            list.innerHTML += `<li>${values[i]['name']}<button id='remove-btn' onclick='removeItem("${values[i]['name']}")'>Remover</button></li>`;
        }
           
}


//receber um dado 'data'
function removeItem(data){

    let values = JSON.parse(localStorage.getItem(listaKey) || "[]")
    // para saber a posição do elemento da array
    //findIndex procurar o index do elemento
    let index = values.findIndex(x => x.name == data)

    //remover
    //pegar a posição do elemento e quantidade que quer retirar
    values.splice(index,1);

    //Atualizar os valores

    localStorage.setItem(listaKey,JSON.stringify(values))
    mostrarLista()  
            
}
mostrarLista()