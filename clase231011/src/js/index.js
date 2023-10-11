$(document).ready(function () {
  $("#userform").on("submit", function (e) {
    e.preventDefault();
  });
  $("#addform").on("submit", function (e) {
    e.preventDefault();
  });

  $("#userform").submit(function () {
    const result = document.querySelector("#result");
    $.ajax({
      url: "http://localhost:3000/personas",
      dataType: "json",
      success: function (data) {
        console.log(data);
        result.innerHTML = "";
        for (let user of data) {
          link = $("<a>").text(user.numerocelular);
          link.attr("href", "tel:" + user.numerocelular);
          $("#result")
            .append($("<li>"))
            .append(user.apellido + ", " + user.nombres + " - 📱 -")
            .append(link);
        }
      },
    });
  });

  $("#addform").submit(function () {
    let surename = document.querySelector("#apellido").value;
    //let surename = $("#apellido").val;
    let name = document.querySelector("#nombres").value;
    let birthday = document.querySelector("#fechanacimiento").value;
    let numbercel = document.querySelector("#numerocelular").value;
    console.log("Nombre " + name);
    axios
      .post("http://localhost:3000/personas", {
        apellido: surename,
        nombres: name,
        fechanacimiento: birthday,
        numerocelular: numbercel,
      })
      .then(function (response) {
        console.log("------" + response.data);
      })
      .then((error) => console.log(error));
  });
});
