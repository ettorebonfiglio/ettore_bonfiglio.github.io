function apri(input){
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
      document.getElementById("contenuto").innerHTML = costruisciTabella(reader.result);
  }
}

function costruisciTabella(csv) {
  console.log(csv);
  
  let righe = csv.split("\n");

  let html = '<table class="table table-bordered table-striped mt-3">';
  html += "<thead>";
  html += "<tr>";
  html += "<th> Anno </th>";
  html += "<th> Numero </th>";
  html += "</tr>";
  html += "</thead>";
  html += "<tbody>";
  for (let i = 1; i < righe.length; i++) {
      let colonne = righe[i].split(",");

      html += "<tr>";
      html += "<td>" + colonne[0] + "</td>";
      html += "<td>" + colonne[1] + "</td>";
      html += "</tr>";

  }
  html += "</tbody>";
  html += '</table>';

  return html;
}