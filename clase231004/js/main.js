$(document).ready(function () {
  $("#userform").on("submit", function (e) {
    e.preventDefault();
  });

  $("#userform").submit(function () {
    var name = $("#username").val();

    //-----AJAX
    $.ajax({
      url: "https://api.github.com/search/users?q=" + name,
      dataType: "json",
      success: function (data) {
        //console.log(data.items);
        for (let user of data.items) {
          console.log(user);
          link = $("<a>").text(user.login);
          link.attr("href", user.html_url);
          $("#result").append($("<li>")).append(link);
        }
      },
    });
  });
});
