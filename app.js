//document.write("<h1>Hola mundo de javascrip</h1>");

//variable de estado cambiante
var int =  1
console.log("Mi valor es: "+int);
document.write("Mi valor es: "+int);
/*constante de estado fijo
const PI = 3.1416;
console.log("Mi valor es: "+ PI);
document.write("Mi valor es: "+PI);*/

let score = 70;

if (score > 30) {
    document.write('Necesitas mejorar mas');
}else if (score > 15){
    document.write('Estas mejorando');
 
} else{
    document.write('Sigue este tutorial si quieres mejorar');
}

let typeCard = 'Debid card';
switch(typeCard){
    case 'Debid card':
        document.write('Es una tarjeta de debito');
        break;
    case 'Credit card':
        document.write('Es una tarjeta de credito')
        break;
default :
document.write('No tienes ninguna tarjeta');
}

let count = 50;

while (count > 0){
document.write('Hola numero '+ count);
count = count - 1;
}

let name = ['abener','antonio','hervert'];

document.write(name[0]);
document.write(name.length);

for(let i = 0 ; i< name.length;i++){
    document.write(name[i]);
}

//definir una tarea y luego llamarla por su nombre

function saludar(){
    document.write('Hola');
}

saludar();


//usar parametros
function saludar(name){
    document.write(name);
    document.write('Hola');
}

saludar('Clara');

