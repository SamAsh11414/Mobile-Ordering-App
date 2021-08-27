<template>
    <div class="login">
        <form>
            <label form="EventID">Enter your event ID here:</label>
            <input type="text" id="EventID" name="EventID">
            <br/>
            <label form="EventPW">Enter your event password here:</label>
            <input type="text" id="EventPW" name="EventPW">
            <br/>
            <button v-on:click=checkcreds>Login to event</button>
        </form>
    </div>
</template>

<script>
import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();

export default {
    name: "Login",
    methods: {
        checkcreds: async function(event) {
            event.preventDefault();
            var EventID = document.getElementById("EventID").value;
            var EventPW = document.getElementById("EventPW").value;
            if (EventID == "" || EventPW == "") {
                alert("Please enter your event ID and password");
            } else {
                const docRef = doc(db, "ID", EventID);
                const docSnap = await getDoc(docRef);

                console.log(EventPW);
                if (EventPW == docSnap.data()["SecretPW"]){
                    console.log("Good Job")
                }
            }
        }
    }
}
</script>

<style>
    input[type=text] {
      width: 40%;
      padding: 12px 20px;
      margin: 8px 0;
      margin-top: 4%;
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
        margin: 6%;
	}

</style>