/**
 * 
 * The keyword await makes Javascript wait until that promise settles and returns its result
 * await can only be used with an async function
 * 
 */

// Getting an APIs response via async/await
const axios = require('axios');

async function hello() {
    let response = await axios('https://api.github.com/');
    return response;
}


hello().then(function (response) {
    console.log('Response: ', response.status);
}).catch(function (err) {
    console.log('Error: ', err.message);
})


// Getting an APIs response via promise
getGithubResponse = new Promise (function (resolve, reject){
    let response = axios('https://api.githubaaa.com/');
    resolve (response);
})
getGithubResponse.then(function (response) {
    console.log('Response: ', response.status);
}).catch(function (err) {
    console.log('Error: ', err.message);
})
