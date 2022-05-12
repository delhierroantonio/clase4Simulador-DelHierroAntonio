let userName = prompt('Por favor ingrese su nombre');
let userAge = parseInt(prompt('Por favor ingrese su edad'));
let pcPrice;

const pcBaja = {
    nombre: 'PC Gama Baja',
    precio: 2000,
    juegos: ['Counter Strike', 'Valorant', 'Fortnite']
}
const pcMedia = {
    nombre: 'PC Gama Media',
    precio: 5000,
    juegos: ['GTA V', 'Hitman', 'Resident Evil']
}
const pcAlta = {
    nombre: 'PC Gama Alta',
    precio: 9000,
    juegos: ['Battlefield', 'Forza', 'War Zone']
}

if (userAge > 18) {
    alert(`Bienvenido a ProPC ${userName} antes de proceder debe registrar una contraseña e iniciar sesion:`);
    signIn();
} else {
    alert('Necesitas ser mayor de edad para realizar compras');
}

function signIn() {
    const PASSWORD = prompt('Registre una contraseña:');
    const LOGIN = prompt('Ahora ingrese su contraseña para acceder a la tienda');
    if (LOGIN == PASSWORD && userAge > 18) {
        alert('Contraseña correcta!');
    } else {
        alert('Contraseña incorrecta!');
    }
}

let pcSelected = parseInt(prompt(`Bien ${userName} ahora eliga el modelo de pc que desea ingresando un numero: 1-Gama Baja ($2000) 2-Gama Media ($5000) 3-Gama Alta ($9000)`));

switch (pcSelected) {
    case 1:
        pcPrice = pcBaja.precio;
        console.log(pcPrice);
        alert(`Ha seleccionado la PC de gama Baja, podra jugar juegos como: ${pcBaja.juegos}`);
        break;
    case 2:
        pcPrice = pcMedia.precio;
        console.log(pcPrice);
        alert(`Ha seleccionado la PC de gama Media, podra jugar juegos como: ${pcMedia.juegos}`);
        break;
    case 3:
        pcPrice = pcAlta.precio;
        console.log(pcPrice);
        alert(`Ha seleccionado la PC de gama Alta, podra jugar juegos como: ${pcAlta.juegos}`);
        break;

    default:
        alert('Porfavor haga una seleccion validad');
        break;
}

let amount = parseInt(prompt('Cuantas unidades desea comprar?'));

function totalPrice() {
    let checkout = pcPrice * amount;
    while (amount != 0) {
        alert(`El total de su compra sera: $${checkout}, por ${amount} PC's`);
        break;
    }
}
// main

totalPrice();