var usuarios = [
  {
    username: "Test",
    password: "Password",
  }
];

const cuota_hockey = 8000
const cuota_futbol = 12000
const cuota_boxeo = 9000
const cuota_yoga = 6000
const cuota_social = 10000

console.log(createPhoneNumber(numbers))

function ValidacionUsuario(usuario, password) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuario === usuarios[i].username) {
      if (password === usuarios[i].password) {
        alert("Usuario validado");
        return(true);
      } else {
        return ("pwd_error");
      }
    }
  }
  return(false);
}

function RegistrarUsuario(
  usuario = prompt("Ingrese el usuario"),
  password = prompt("Ingrese el password")
) {
  usuarios.push({ username: usuario, password: password });
  alert("Usuario registrado correctamente");
  console.log("Usuario registrado correctamente");
  console.log(usuarios);
}

function CalculoCuota(futbol=true, hockey=true, boxeo=true, yoga=true) {
    console.log("Futbol: " + futbol + " Hockey: " + hockey + " Boxeo: " + boxeo + " Yoga: " + yoga)
    var cuota_total = 0;
    cuota_total += cuota_social;
    if (futbol) {
        cuota_total += cuota_futbol;
    }
    if (hockey) {
        cuota_total += cuota_hockey;
    }
    if (boxeo) {
        cuota_total += cuota_boxeo;
    }
    if (yoga) {
        cuota_total += cuota_yoga;
    }
    return(cuota_total);
}
/*
while (true) {
    userStatus = ValidacionUsuario(prompt("Ingrese el usuario"), prompt("Ingrese el password"))
    if (userStatus === "pwd_error") {
        alert("Error, trate de validarse nuevamente");
        console.log("Error de password");
    } else if (userStatus) {
        console.log("Usuario autenticado");
        stFutbol = confirm("Participa en futbol ?");
        stHockey = confirm("Participa en hockey ?");
        stBoxeo = confirm("Participa en boxeo ?");
        stYoga = confirm("Participa en yoga ?");
        cuotaTotal = CalculoCuota(stFutbol, stHockey, stBoxeo, stYoga);
        console.log(cuotaTotal);
    } else {
        alert("Error, usuario no encontrado. Registrese antes de empezar.")
        console.log("Error de usuario")
        RegistrarUsuario()
    }
}
*/
