function apri(input){
    let file = input.files[0];

      let reader = new FileReader();

      reader.readAsText(file);

      reader.onload = function() {
        document.getElementById("contenuto").innerHTML = reader.result;
      }
}