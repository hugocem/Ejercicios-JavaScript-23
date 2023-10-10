$(document).ready(function () {
  $("#userform").on("submit", function (e) {
    e.preventDefault();
  });

  $("#userform").submit(function () {
    //-----AJAX
    $.ajax({
      url: " https://jsonplaceholder.typicode.com/users",
      dataType: "json",
      success: function (data) {
        console.log(data);
        for (let user of data) {
          link = $("<a>").text(user.email);
          link.attr("href", "mailto:" + user.email);
          $("#result")
            .append($("<li>"))
            .append(user.name + " - 📧 ")
            .append(link);
        }
      },
    });
  });
});
/*const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send();
*/

/*const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
const body = JSON.stringify({
  title: "Hola Mundo2",
  body: "Mi request Post2",
  userId: 1,
});
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 201) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send(body);

$.get("https://jsonplaceholder.typicode.com/users", (data, status) => {
  console.log(data);
});
/*
const body = JSON.stringify({
  title: "Hello World",
  body: "My POST request",
  userId: 900,
});
$.post("https://jsonplaceholder.typicode.com/users", body, (data, status) => {
  console.log(data);
});
*/
/*axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "POST request with Axios",
    body: "POST request",
    userId: 10,
  })
  .then(function (response) {
    console.log(response.data);
  })
  .then((error) => console.log(error));*/
