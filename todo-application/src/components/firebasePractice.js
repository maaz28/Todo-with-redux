import React from 'react';
import firebase from 'firebase';

class FirebasePrac extends React.Component {

    render() {
        return (
            <div>
                <input type = 'text' refs='inputVal'/>
                <button onClick = {this.handler.bind(this)}>Click me !</button>
            </div>
        )
    }
    obj = {name : 'maaz'};

    //push
    //set
    
    handler(){
        firebase.auth().createUserWithEmailAndPassword('kzs@gmail.com', '123456')
        .then((snapshot) => {
            console.log(snapshot)
            console.log(snapshot.uid)
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            // ...
          });
        let uid = 'fewjekhwelh2324dskf'
        firebase.database().ref('/user/'+uid).push(this.obj)
    }
}
export default FirebasePrac;

