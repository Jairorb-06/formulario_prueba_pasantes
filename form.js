function recibir() {
    
  var nomId = document.getElementById("nom").value;
  var apeId = document.getElementById("ape").value;

  if (nomId == "") {
    document.getElementById("nom").focus();
  } else {
    if (apeId == "") {
      document.getElementById("ape").focus();
    } else {
      document.getElementById("nom").value = "";
      document.getElementById("ape").value = "";
      console.log(nomId + " " + apeId);
      return Swal.fire('Bienvenido '+nomId +" "+ apeId)
       
    }
  }
}
