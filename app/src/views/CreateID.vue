<template>
    <div class="CreateID">
        <form>
            <label form="NameOfEvent">Name of Event:</label>
            <input type="text" id="NameOfEvent" name="NameOfEvent">
            <br/>
            <button v-on:click=createID>Create ID</button>
        </form>
    </div>
</template>

<style scoped>
    input[type=text] {
      width: 40%;
      padding: 12px 20px;
      margin: 8px 0;
      margin-top: 6%;
      box-sizing: border-box;
    }

    input[type=text]:focus {
        border: 3px solid #555;
    }

    label {
        font-size: 140%;
        margin-right: 5%;
    }

	button {
		background-color: #038cfc;
		color: #fff;
		padding: 1em;
		border-radius: 5px;
		border: none;
		font-size: 1.2em;
		font-weight: 100;
		cursor: pointer;
		margin-top: 6%;
	}

</style>

<script>
    import { initializeApp } from "firebase/app";
    import { collection, addDoc, getFirestore } from "firebase/firestore";
    import router from "../router";

    const firebaseConfig = initializeApp({
        apiKey: "AIzaSyDb0qvXE5dE3LH_-zLbKuf19eJPLu9C4w0",
        authDomain: "bths-contactless-catering.firebaseapp.com",
        projectId: "bths-contactless-catering",
        storageBucket: "bths-contactless-catering.appspot.com",
        messagingSenderId: "196219706979",
        appId: "1:196219706979:web:b8cce0ef616d1d3fe62256",
        measurementId: "G-YD27CPGZ3P"   
    });

    console.log(firebaseConfig);

    const db = getFirestore();

    export default {
        name: "CreateID",
        methods: {
            createID: async function(event) {
                event.preventDefault();
                console.log(document.getElementById("NameOfEvent").value)
                console.log("Leaving this here, arived at test function")

                if (document.getElementById("NameOfEvent").value == "") {
                    alert("Please enter a name for the event")
                }
                else {
                    const docRef = await addDoc(collection(db, "ID"), {
                        Name: document.getElementById("NameOfEvent").value
                    });
                console.log("Document written with ID: ", docRef.id);
                router.push({ name: 'AddItems', params: { ID: docRef.id } })
                }
            }
        }
    }
</script>

