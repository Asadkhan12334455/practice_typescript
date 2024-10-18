let friend_promise = new Promise(function(resolve, reject) {
    let friendpocket = 5000;
    if (friendpocket > 10000) {
        resolve("Friend's pocket money is more than 10000");
    } else {
        reject("Friend's pocket money is less than 10000");
    }
});

friend_promise
    .then(function(message) {
        console.log(message);  // This will run if the Promise is resolved
    })
    .catch(function(message) {
        console.log(message);  // This will run if the Promise is rejected
    });


