<script>
  import { onMount } from "svelte";
  export let url;
  let text;
  onMount(async () => {
    const md = await fetch(url);
    text = await md.text();
  });
  const vote = () => {
    alert("voted");
  };
</script>

<style>
  p {
    border: 2px dashed tomato;
    padding: 1em;
    border-radius: 0.5em;
    background-color: lightyellow;
    white-space: pre-line;
    word-break: break-word;
  }
</style>

<div>
  <p>{text}</p>
  <button on:click={vote}>vote</button>
</div>
