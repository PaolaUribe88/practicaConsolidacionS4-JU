function realizarPresupuesto(){
    let valorPresupuesto = document.getElementById('presupuesto').value;
    let elParrafoPresupuesto = document.getElementById('parrafoPresupuesto');
    elParrafoPresupuesto.innerText = valorPresupuesto;

}

 var arregloNomGastos=[];
 var arregloNomGastosEliminar=[];
 var arregloCantGastos=[];
 var arregloCantGastosEliminar=[];

function acumularGastos(){
    let acumuladoGastos=0;
    //cuando se invoca recorre el arreglo de cantidad gastos y suma contenido
    for(let i=0; i<arregloCantGastos.length; i++){
        acumuladoGastos= acumuladoGastos + arregloCantGastos[i];
    }
    return acumuladoGastos;
}

function eliminarElemento(indice){
    //limpiamos los arreglos de copia
    arregloNomGastosEliminar=[];
    arregloCantGastosEliminar=[];
    // eliminamos de los arreglos globales el elemento identificado mediante el indice proporcionado por el boton eliminar
    arregloNomGastos.splice(indice,1);
    arregloCantGastos.splice(indice,1);

    console.log(arregloNomGastos);
    console.log(arregloCantGastos);
   

    //hacemos una copia de los arreglo// eliminamos contenido
    eliminarContenido();

    for(let i=0; i<arregloNomGastos.length;i++){
        arregloNomGastosEliminar.push(arregloNomGastos[i]);
        arregloCantGastosEliminar.push(arregloCantGastos[i]);
    }
    console.log('arrayNombreGastosEliminar: ',arregloNomGastosEliminar);
    console.log('arrayCantidadGastosEliminar:', arregloCantGastosEliminar);

    let valorParrafoPresupuesto = document.getElementById('parrafoPresupuesto').innerText;
    let elParrafoGasto = document.getElementById('parrafoGasto');
    let elParrafoSaldo = document.getElementById('parrafoSaldo');
    let elAcumuladoGastos = 0;

    // identificamos el nuevo gasto después de eliminar un elemento
    for(let i=0; i<arregloCantGastos.length;i++){
        elAcumuladoGastos=elAcumuladoGastos + arregloCantGastos[i];
    
    }// enviamos el acumlado del gasto al parrafo gasto
    elParrafoGasto.innerText= elAcumuladoGastos;

    let elSaldo = parseFloat(valorParrafoPresupuesto)- parseFloat(elAcumuladoGastos);
    elParrafoSaldo.innerText = elSaldo;

   //volvemos a pintar los gastos
   pintarGastosEliminar();
}
function eliminarContenido(){
    let elParrafoNombreGasto = document.getElementById('parrafoNomGasto');
    let elParrafoValor = document.getElementById('parrafoValor');
    let elParrafoAccion = document.getElementById('parraAccion');

    elParrafoNombreGasto.innerText = '';
    elParrafoValor.innerText = '';
    elParrafoAccion.innerText = '';
}

function pintarGastosEliminar(){
    let elParrafoNombreGasto = document.getElementById('parrafoNomGasto');
    let elParrafoValorGasto = document.getElementById('parrafoValor');
    let parrafoAccion = document.getElementById('parraAccion'); 

    let limiteEliminar= arregloNomGastosEliminar.length;

    for(let j=0; j<limiteEliminar.length; j++){
        
        let unParrafoTextoNuevo = document.createElement('p');
        let unParrafoValorNuevo = document.createElement('p');
        let unParrafoAccionNuevo= document.createElement('p');
        let unBotonNuevo = document.createElement('button ');
        // recorremos el arreglo y extraemos nombre
        unParrafoTextoNuevo.innerText = arregloNomGastosEliminar[j];
        // recorremos el arreglo y extraemos valor
        unParrafoValorNuevo.innerText = arregloCantGastosEliminar[j];
        
        unBotonNuevo.innerText = 'Eliminar';
        unBotonNuevo.setAttribute('onclick',`eliminarElemento(${j})`);
        

        // enviamos a los párrafos correspondientes con append
        elParrafoNombreGasto.appendChild(unParrafoTextoNuevo);
        elParrafoValorGasto.appendChild(unParrafoValorNuevo);
        unParrafoAccionNuevo.appendChild(unBotonNuevo);
        parrafoAccion.appendChild(unParrafoAccionNuevo)
        
    }
}
function pintarGastos(){

    let elParrafoNombreGasto = document.getElementById('parrafoNomGasto');
    let elParrafoValor = document.getElementById('parrafoValor');
    let elParrafoAccion = document.getElementById('parraAccion');

    let unParrafoTextoNuevo = document.createElement('p');
    let unParrafoValorNuevo = document.createElement('p');
    let unParrafoAccionNuevo = document.createElement('p');
    let unBotonNuevo = document.createElement('button');

    for(let i=0; i<arregloNomGastos.length; i++){
        // recorremos el arreglo y extraemos nombre
        unParrafoTextoNuevo.innerText = arregloNomGastos[i];
        // recorremos el arreglo y extraemos valor
        unParrafoValorNuevo.innerText = arregloCantGastos[i];

        unBotonNuevo.innerText = '';
        unBotonNuevo.setAttribute('onclick', `eliminarElemento(${i})`);
        unBotonNuevo.setAttribute('class',`fa-solid fa-trash-can`);
        // enviamos a los párrafos correspondientes con append
        elParrafoNombreGasto.appendChild(unParrafoTextoNuevo);
        elParrafoValor.appendChild(unParrafoValorNuevo);
        unParrafoAccionNuevo.appendChild(unBotonNuevo);
        elParrafoAccion.appendChild(unParrafoAccionNuevo);
    }
}

function realizarGasto(){
    let elNomGastoAgregado = document.getElementById('nomGasto').value;
    let cantGastoAgregado = document.getElementById('cantGasto').value;
    //ALMACENAMOS EN ARREGLOS LOS GASTOS AÑADIDOS
    arregloNomGastos.push(elNomGastoAgregado);//EMPUJAR
    arregloCantGastos.push(parseFloat(cantGastoAgregado));

    console.log('arreglo gastos:');
    console.log(arregloNomGastos);
    console.log('cantidad gastos:');
    console.log(arregloCantGastos);

    let elAcumuladoGastos =  acumularGastos(); 
    console.log(elAcumuladoGastos);
    
    let valorParrafoPresupuesto = document.getElementById('parrafoPresupuesto').innerText;
    let elParrafoGasto = document.getElementById('parrafoGasto');
    let elPSaldo = document.getElementById('parrafoSaldo');
   
    // enviamos el acumlado del gasto al parrafo gasto
    elParrafoGasto.innerText= elAcumuladoGastos;

    let elSaldo = parseFloat(valorParrafoPresupuesto)- parseInt(elAcumuladoGastos);
    elPSaldo.innerText = elSaldo;
    pintarGastos();
}

function asignarEventos(){
    let elBotonCalcular = document.getElementById('btnCalcular');
    elBotonCalcular.addEventListener('click', realizarPresupuesto);

    let elBottonAgregarGasto = document.getElementById('btnAgregarGasto');
    elBottonAgregarGasto.addEventListener('click', realizarGasto);

}