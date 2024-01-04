

const firebaseConfig = {
    apiKey: "AIzaSyDRcVzUDe5Ui3PfGevqkY6SsZe7B1_WFUw",
    authDomain: "apollo-fb3d5.firebaseapp.com",
    databaseURL: "https://apollo-fb3d5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "apollo-fb3d5",
    storageBucket: "apollo-fb3d5.appspot.com",
    messagingSenderId: "4849942046",
    appId: "1:4849942046:web:8d7b010f7724375d13780f",
    measurementId: "G-R8MVY1VFC4"
  };


firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    const coffeeForm = document.getElementById('coffeeForm');

    document.addEventListener('submit', (e) => {
      e.preventDefault();

      const coffeeName = document.getElementById('coffeeName').value;
      const coffeeType = document.getElementById('coffeeType').value;
      const smallPrice = parseFloat(document.getElementById('smallPrice').value);
      const mediumPrice = parseFloat(document.getElementById('mediumPrice').value);
      const largePrice = parseFloat(document.getElementById('largePrice').value);


      db.collection("coffees").add({
        name: coffeeName,
        type: coffeeType,
        prices: {
          small: smallPrice,
          medium: mediumPrice,
          large: largePrice
        }
      })
      .then((docRef) => {
        console.log("Coffee added with ID: ", docRef.id);
        coffeeForm.reset();
      })
      .catch((error) => {
        console.error("Error adding coffee: ", error);
      });
    });