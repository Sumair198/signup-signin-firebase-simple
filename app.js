let signup = () => {
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value
    // console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            // Signed in 
            //   var user = userCredential.user;
            console.log(data)
            // ...
        })
        .catch((error) => {
            //   var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });

}


let singin = () => {
    var email = document.getElementById('s-email').value
    var password = document.getElementById('s-pass').value
    // console.log(email,password)

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => {
            // Signed in
            // var user = userCredential.user;
            // ...
            console.log(data)
        })
        .catch((error) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}
