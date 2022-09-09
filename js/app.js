
const Nombres = document.getElementById("names")
const Telefono = document.getElementById("phone")
const correo electronico = document.getElementById("email")
const Mensaje = document.getElementById("mensaje")


form.addEventlistener("submit", e=>{
	e.preventDefault()
	let warnings =""
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	parrafo.innerHTML = ""

	if(nombre.value.legth <6){
        warnings += 'El nombre no es valido <br>'
}
  console.log(regexEmail.test(email.value)){
 
  if(!regexEmail.test(email.value))
  	 warnings += 'El email no es valido <br>'
  	 entrar = true
}

  if(pass.value.length < 8){
  	warnings += 'El contraseña no es valido' <br>
  	entrar = true
  }

  if(entrar) {
  	parrafo.innerHTML = warnings
  }else{

  		parrafo.innerHTML = "Enviado"
  }
})


