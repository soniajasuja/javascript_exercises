// const axios = require('axios');

// async function hello() {
//     let response = await axios('https://api.github.com/');
//     return response;
// }


// hello().then(function (response) {
//     console.log('Response: ', response.status);
// }).catch(function (err) {
//     console.log('Error: ', err.message);
// })


const axios = require('axios');

getGithubResponse = new Promise (function (resolve, reject){
    let response = axios('https://api.githubaaa.com/');
    resolve (response);
})
getGithubResponse.then(function (response) {
    console.log('Response: ', response.status);
}).catch(function (err) {
    console.log('Error: ', err.message);
})
