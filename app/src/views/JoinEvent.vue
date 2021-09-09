<template>
    <div>
        <h1>Join Event</h1>
        <p>If you would like to join an event, please input the ID below or open your camera and scan the QR code provied by the event hosts</p>
        <form>
            <label form="joinEvent">Event ID:</label>
            <input type="text" id="JoinEvent" placeholder="Event ID">
            <br/>
            <button type="submit" v-on:click=joinEvent>Join</button>
        </form>
    </div>
</template>

<script>
    import { doc, getDoc, getFirestore } from "firebase/firestore";
    import router from "../router";

    const db = getFirestore();

export default {
    name: 'JoinEvent',
    methods: {
        joinEvent: async function(event) {
            event.preventDefault();
            let eventID = document.getElementById("JoinEvent").value;
            if (eventID == "") {
                alert("Please input an event ID");
            }
            else {
                let eventRef = doc(db, "ID", eventID);
                let docSnap = await getDoc(eventRef);

                if (docSnap.exists) {
                    router.push({path: `/event/${eventID}`});
                }
            }
        }
    }
}
</script>

<style scoped>
input[type="text"] {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  margin-top: 4%;
  box-sizing: border-box;
}

input[type="text"]:focus {
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
