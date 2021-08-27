<template>
    <div>
        <h1>Add items to your event</h1>
        <p>Your Event Name is <span id=Nameevent></span></p>
        <p>Your Event ID is {{userId}}</p>
    </div>
</template>

<script>
import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();

export default {
    name: "AddItems",
    watch: {
        $route(val) {
            console.log(val.parms.ID, "from before created");
        }
    },
    beforeMount() {
        this.accessdb()
    },
    data: function() {
        return {
            userId: this.$route.params.ID
        };
    },
    computed: async function () {},
    methods: {
        addItem: function() {
            console.log(this.$route.params.ID);
        },
        accessdb: async function() {
            const docRef = doc(db, "ID", this.$route.params.ID);
            const docSnap = await getDoc(docRef);
            const NameOfevent = docSnap.data()["Name"]
            console.log(NameOfevent);
            document.getElementById("Nameevent").innerHTML = NameOfevent;
        }
    }
};

</script>

<style>

</style>