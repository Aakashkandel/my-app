//insert data into database from components/register/aakash.jsx

// import React, { Component } from 'react';
// import Aakash from './Components/Register/Aakash';

// import { v4 as uuidv4 } from "uuid";

// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyAqJxHn19Ol_uaPbeeW9oe8d5J72RIMErU",
//   authDomain: "register-864c6.firebaseapp.com",
//   databaseURL: "https://register-864c6-default-rtdb.firebaseio.com",
//   projectId: "register-864c6",
//   storageBucket: "register-864c6.appspot.com",
//   messagingSenderId: "789411042816",
//   appId: "1:789411042816:web:4bfd4f57850eff1f3d2ae5"
// };

// const app = initializeApp(firebaseConfig);

// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       id:uuidv4(),
//       name:null,
//       email:null,
//      password:null, 
//     }
//   }


//   register = (event) =>{

//     event.preventDefault();

//     let name = event.target.fullname.value;
//     let email = event.target.email.value;
//     let password = event.target.password.value;

//     this.setState({name,email,password },()=>{this.submitDetails();});
//   }


//   submitDetails(){
//     const data = {
//       user_name: this.state.name,
//       user_email: this.state.email,
//       user_password: this.state.password,
//     };


//     const database = getDatabase(app);
//     const dbRef = ref(database, "register/" + this.state.id);

//     set(dbRef, data)
//       .then(() => {
//         console.log("Data has been successfully written to the database.");
//       })
//       .catch((error) => {
//         console.error("Error writing data to the database:", error);
//       });
//   }

//   render() {
//     return (
//       <div>     
//          <Aakash reg={this.register}/>
//       </div>
//     )
//   }
// }



//cardsewa

//1) Insert operation for card sewa


// import React,{Component} from 'react';
// import Card from './Components/cardsewa/Card'
// import { v4 as uuidv4 } from "uuid";
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";
// import Details from './Components/cardsewa/Details';

// const firebaseConfig = {
//   apiKey: "AIzaSyAqJxHn19Ol_uaPbeeW9oe8d5J72RIMErU",
//   authDomain: "register-864c6.firebaseapp.com",
//   databaseURL: "https://register-864c6-default-rtdb.firebaseio.com",
//   projectId: "register-864c6",
//   storageBucket: "register-864c6.appspot.com",
//   messagingSenderId: "789411042816",
//   appId: "1:789411042816:web:4bfd4f57850eff1f3d2ae5"
// };

// const app = initializeApp(firebaseConfig);


// export default class App extends Component {
//   constructor(props)
//   {
//     super(props);
//     this.state={
//       id:uuidv4(),
//       collage_name:null,
//       collage_address:null,
//       university_name:null,
//       person_name:null,
//       image:null,
//       faculty:null,
//       guardient_name:null,
//       phone:null,
//       person_address:null,
      
//     }

//   }

//   register = (event) => {
//     event.preventDefault();
  
//     const collage_name = event.target.collage_name.value;
//     const collage_address = event.target.collage_address.value;
//     const university_name = event.target.university_name.value;
//     const person_name = event.target.person_name.value;
//     const image = event.target.image.value;
//     const faculty = event.target.faculty.value;
//     const guardient_name = event.target.guardient_name.value;
//     const phone = event.target.phone.value;
//     const person_address = event.target.person_address.value;
  
//     this.setState({
//       collage_name,
//       collage_address,
//       university_name,
//       person_name,
//       image,
//       faculty,
//       guardient_name,
//       phone,
//       person_address
//     }, () => {
      
//       this.submitData();
//     });
//   };
  
//   submitData=()=>{
//    const data={
//       collage_name:this.state.collage_name,
//       collage_address:this.state.collage_address,
//       university_name:this.state.university_name,
//       person_name:this.state.person_name,
//       image:this.state.image,
//       faculty:this.state.faculty,
//       guardient_name:this.state.guardient_name,
//       phone:this.state.phone,
//       person_address:this.state.person_address,
//     };
  

//     const database = getDatabase(app);
//     const dbRef = ref(database, "card/" + this.state.id);

//     set(dbRef, data)
//       .then(() => {
//         console.log("Data has been successfully written to the database.");
//       })
//       .catch((error) => {
//         console.error("Error writing data to the database:", error);
//       });
//   }
  

  

//   render() {
//     return (
//       <div>
//        <Details register={this.register}/>
//       </div>
//     );
//   }
// }

