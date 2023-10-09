// XMLHttpRequest - Patch
/* const xhr = new XMLHttpRequest();
xhr.open("PATCH", "https://jsonplaceholder.typicode.com/posts/101");
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
const body = JSON.stringify({
  body: "My PATCH request",
});
xhr.onload = () => {
  var data = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.log("----------XMLHttpRequest - Patch----------");
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
}; 
xhr.send(body);*/

// XMLHttpRequest - Delete

/*const xhr = new XMLHttpRequest();
xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/3");
xhr.onload = function () {
  var data = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.log("-----------XMLHttpRequest - Delete---------");
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send();*/

// Jquery Ajax Patch

/*const body = JSON.stringify({
  body: "My PATCH request",
});
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/101",
  type: "PATCH",
  data: body,
  success: function (result) {
    console.log("-----Jquery Ajax Patch------");
    console.log(result);
  },
});*/

//Jquery Ajax Delete

/*$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/3",
  type: "DELETE",
  success: function (result) {
    console.log("------Jquery Ajax Delete ------- ");
    console.log(result);
  },
});*/

// fetch Patch
/*fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "My PUT request",
    body: "Updating the entire object",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); */

//Fetch Delete
/* fetch("https://jsonplaceholder.typicode.com/posts/3", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((json) => console.log(json)); */

// Axios Put
/*axios
  .put("https://jsonplaceholder.typicode.com/posts/10", {
    title: "PUT request with Axios",
    body: "PUT request",
    userId: 10,
  })
  .then(function (response) {
    console.log("----- Axios put");
    console.log(response.data);
  })
  .then((error) => console.log(error));*/

// Axios delete

axios
  .delete("https://jsonplaceholder.typicode.com/posts/10")
  .then(function (response) {
    console.log("-----Axios delete");
    console.log(response);
  })
  .then((error) => console.log(error));
