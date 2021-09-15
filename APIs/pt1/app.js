import axios from "axios";

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });