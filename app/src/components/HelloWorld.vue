<template>
  <div class="hello">
    <main>
      <h1>Welcome to the Brooklyn Technical High School Contactless Concessions App</h1>
	    <p>Explanation explain words and stuff. I really dont know what to put here yet to explain the app but I need to take up space so I will continue to write here so it will looks nice. Glaciers and ice sheets hold about 69 percent of the world's freshwater. The fastest gust of wind ever recorded on Earth was 253 miles per hour. The best place in the world to see rainbows is in Hawaii.</p>
	    <button>Join an Event</button>
	    <button>Start an Event</button>
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>