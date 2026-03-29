function mostrarClave() {
  var input = document.getElementById("inputClave");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
