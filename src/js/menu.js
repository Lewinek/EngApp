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

     
      const btnLogOut =document.getElementById('btnLogOut');


    

   

    btnLogOut.addEventListener('click', e =>{
        firebase.auth().signOut();
    })

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            
                
                console.log('zalogowany');
        }else{
            console.log('not logged in');
            location.href = "index.html";
        }
    })

    
}());