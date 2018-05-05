(function(){
    var config = {
        apiKey: "AIzaSyBNV1mPoWjwQ-kpw8eO_zHucWyJxUuvqpI",
        authDomain: "engapp-37016.firebaseapp.com",
        databaseURL: "https://engapp-37016.firebaseio.com",
        projectId: "engapp-37016",
        storageBucket: "engapp-37016.appspot.com",
        messagingSenderId: "181665873122"
      };
      firebase.initializeApp(config);

      const txtEmail =document.getElementById('txtEmail');
      const txtPassword =document.getElementById('txtPassword');
      const btnLogIn =document.getElementById('btnLogIn');
      const btnSignUp =document.getElementById('btnSignUp');
      const btnLogOut =document.getElementById('btnLogOut');


    btnLogIn.addEventListener('click', e =>{

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        
        firebase.auth().signInWithEmailAndPassword(email, pass).then(function(user) {
            // user signed in
         }).catch(function(error) {
             var errorCode = error.code;
             var errorMessage = error.message;
         
             if (errorCode === 'auth/wrong-password') {
                 alert('Wrong password.');
             } else {
                 alert(errorMessage);         
             }
             console.log(error);
         });
    })

    btnSignUp.addEventListener('click', e =>{

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);

        promise.catch(e=> console.log(e.message));
    })

    btnLogOut.addEventListener('click', e =>{
        firebase.auth().signOut();
    })

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            
                location.href = "menu.html";
                console.log('zalogowany');
        }else{
            console.log('not logged in');
        }
    })

    
}());