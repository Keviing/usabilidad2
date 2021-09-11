var cine = [];

function imprimir(){
    console.log(cine)
    let tblCine = document.getElementById('tblCine');
    tblCine.innerHTML='';
    cine.forEach((x) => {
        let tr = document.createElement('tr');
        let tdNum = document.createElement('td');
        
        let tdBoleto = document.createElement('td');
        let tdHorario = document.createElement('td');
        let tdFormato = document.createElement('td');
        let tdNom = document.createElement('td');
        //Asignar los valores a las columnas
        tdNum.innerText = cine.indexOf(x)+1;
        tdNom.innerText = x.nombre;
        
        tdHorario.innerText = x.horarios; 
        tdFormato.innerText = x.formatos;
        tdBoleto.innerText = x.boletos;
        //Agregar las columnas a la fila
        tr.append(tdNum);
        tr.append(tdNom);
        
        tr.append(tdHorario);
        tr.append(tdFormato);
        tr.append(tdBoleto);
        tblCine.append(tr);
    });
   sumarBoletos()
}

function agregar(){
    //Lectura de valores en los Inputs
    let boleto = document.getElementById('txtBoletos').value;
    let horario = document.getElementById('txtHorario').value;
    let formato = document.getElementById('slFormatos').value;
    let nomPro = document.getElementById('slPelicula').value;
    //Crear un objeto con los valores
    let nuevaPelicula = {
        "nombre" : nomPro,
        "boletos" : parseInt(boleto),
        "horarios" : horario,
        "formatos" : formato,
        
    };
    //Agregar el objeto al arreglo
    cine.push(nuevaPelicula);
    borrar();
    imprimir();
    
}

function sumarBoletos(){
    let totalvendidos=0;
cine.forEach(value =>{
 totalvendidos=totalvendidos+value.boletos
})
let tdtotalvendidos=document.getElementById('tdTotalBoletosVendidos')
tdtotalvendidos.innerText=totalvendidos;
}

function borrar(){
    document.getElementById('txtBoletos').value=0;
    document.getElementById('txtHorario').value="";
    document.getElementById('slFormatos').value=0;
    document.getElementById('slPelicula').value=0;
}       



