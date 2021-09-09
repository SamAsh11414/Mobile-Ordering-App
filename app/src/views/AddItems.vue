<template>
  <div>
    <h1>Add items to your event</h1>
    <p>Your Event Name is {{ NameOfEvent }}</p>
    <p>Your Event ID is {{ userId }}</p>
    <p>Your Event Password is {{ SecretPassword }}</p>
  </div>
</template>

<script>
import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();

export default {
  name: "AddItems",
  data: function () {
    return {
      userId: this.$route.params.ID,
      NameOfEvent: "Loading...",
      SecretPassword: "Loading...",
    };
  },
  watch: {
    "$route.params.ID": {
      handler(ID) {
        console.log("do you see this?");
        const docRef = doc(db, "ID", ID);
        getDoc(docRef).then((docSnap) => {
          console.log("do you see this as well?");
          this.NameOfEvent = docSnap.data()["Name"];
          this.SecretPassword = docSnap.data()["SecretPW"];
        });
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style>
</style>