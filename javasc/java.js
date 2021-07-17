function getlibra(valor){
    return (valor * 2.2046);
}
function getgramos(valor){
    return (valor * 100);
}

function gettonelada(valor){
    return (valor / 1000);
}

function limpiarFormulario() {
    document.getElementById("index").reset();
  }



function calculo() {
    var nombre1,valor1,lib1,gra1,ton1;
    var nombre=0,valor=0,lib=0,gra=0,ton=0;
    nombre1=document.getElementById("nombre");
    valor1=document.getElementById("valor");
    lib1=document.getElementById("lib");
    gra1=document.getElementById("gra");
    ton1=document.getElementById("ton");

    valor = parseFloat(valor1.value);
    nombre = parseFloat(nombre1.value);
    valor = parseFloat(valor1.value);
    lib = parseFloat(lib1.value);
    gra= parseFloat(gra1.value);
    ton = parseFloat(ton1.value);

    lib= getlibra(valor);
    gra= getgramos(valor);
    ton= gettonelada(valor);
    lib1.value=lib;
    gra1.value=gra;
    ton1.value=ton;
