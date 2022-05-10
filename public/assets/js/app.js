let name = prompt('Hola bienvenido a ProPC porfavor ingrese su nombre para continuar:');
let elegirPc = prompt(`Hola ${name}, Para realizar una compra primero eliga el modelo de pc que desea ingresando un numero: 1.Gama Baja - 2.Gama Media - 3.Gama Alta`);

const juegosBaja = ['Counter Strike', 'Valorant', 'Fortnite'];
const juegosMedia = ['GTA V', 'Hitman', 'Resident Evil'];
const juegosAlta = ['Battlefield', 'Forza', 'War Zone'];

const pcBaja = {
    procesador: 'Intel i3',
    memoria: '4 GB',
    placa: 'Asus Prime 660',
    alacenamiento: '500GB',
    video: 'RTX 3050',
    precio: '$3500'
}
const pcMedia = {
    procesador: 'Intel i5',
    memoria: '8 GB',
    placa: 'Asus Prime 660',
    alacenamiento: '1TB',
    video: 'RTX 3070',
    precio: '$6800'
}
const pcAlta = {
    procesador: 'Intel i7',
    memoria: '16 GB',
    placa: 'Asus Prime 660',
    alacenamiento: '2TB',
    video: 'RTX 3080',
    precio: '$12000'
}

if (elegirPc == 1) {
    elegirPc = 'pc Gama Baja';
    alert('Ha elegido la Pc de Gama Baja, su pago esta siendo procesado..');
    alert(`Usted ha comprado la pc: ${elegirPc} con un procesador ${pcBaja.procesador}, ${pcBaja.memoria} de memoria RAM, ${pcBaja.video} en tarjeta de video y podra jugar estos juegos: ${juegosBaja}. Todo esto por un total de: ${pcBaja.precio}, Gracias por su compra!`);
} else if (elegirPc == 2) {
    elegirPc = 'pc Gama Media';
    alert('Ha elegido la Pc de Gama Media, su pago esta siendo procesado..');
    alert(`Usted ha comprado la pc: ${elegirPc} con un procesador ${pcMedia.procesador}, ${pcMedia.memoria} de memoria RAM, ${pcMedia.video} en tarjeta de video y podra jugar estos juegos: ${juegosMedia}. Todo esto por un total de: ${pcMedia.precio}, Gracias por su compra!`);
} else if (elegirPc == 3) {
    elegirPc = 'pc Gama Alta';
    alert('Ha elegido la Pc de Gama Alta, su pago esta siendo procesado..');
    alert(`Usted ha comprado la pc: ${elegirPc} con un procesador ${pcAlta.procesador}, ${pcAlta.memoria} de memoria RAM, ${pcAlta.video} en tarjeta de video y podra jugar estos juegos: ${juegosAlta}. Todo esto por un total de: ${pcAlta.precio}, Gracias por su compra!`);
} else {
    alert('porfavor seleccione un producto valido de nuestro catalogo!');
}