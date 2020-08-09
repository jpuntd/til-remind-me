<script lang="ts">
  import { getRepositoryContent } from "../api/githubAPI";
  import type { RepositoryContent } from "../api/githubAPI";
  import Til from "./Til.svelte";
  let promise = getRepositoryContent("jbranchaud", "til", "javascript");
</script>

<style>

</style>

<div class="TilList">
  {#await promise}
    <p>...waiting</p>
  {:then tils}
    {#each tils as til}
      <Til url={til.download_url} />
    {:else}
      <p>Sorry, no data</p>
    {/each}
  {:catch error}
    <p style="color: red">{error}</p>
  {/await}
</div>
