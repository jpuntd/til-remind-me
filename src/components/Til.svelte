<script lang="ts">
  import marked from "marked";
  import { onMount } from "svelte";
  export let url: string;
  let text: string;
  onMount(async () => {
    const response = await fetch(url);
    const md = await response.text();
    text = marked(md);
  });
  const vote = () => {
    alert("voted");
  };
</script>

<style>
  div {
    margin: 1em 0;
    border: 2px dashed tomato;
    padding: 1em;
    border-radius: 0.5em;
    background-color: lightyellow;
    text-align: left;
  }
</style>

<section>
  <div>
    {@html text}
  </div>
  <button on:click={vote}>vote</button>
</section>
