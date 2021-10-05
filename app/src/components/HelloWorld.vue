<template>
  <div class="hello">
    <main>
      <h1>Welcome to the Brooklyn Technical High School Contactless Concessions App</h1>
	    <p>This website was created with the idea of allowing students in BTHS to order food without the stresses of close contact with others. The ultimate aim is to lower COVID-19 exposure in our school drastically.</p>
	    <button><router-link to="/JoinEvent">Join an Event</router-link></button>
	    <button><div id="buttonNav"> <router-link to="/CreateID">Start an Event</router-link></div></button>
    </main>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #0314fc;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
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
		margin-top: 10%;
	}

  #buttonNav {
    color: #fff;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>