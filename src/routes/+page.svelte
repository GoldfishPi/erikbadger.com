<div class="flex flex-col gap-20">
  <Header />
  <div class="flex flex-col gap-5">
    {@html about}
  </div>
  <h2>Experience</h2>
  <div class="flex flex-col gap-10">
    {#each data.experience as experience}
      <Experience md={experience} />
    {/each}
  </div>
  <h2>Projects</h2>
  <div class="flex flex-col gap-10">
    {#each data.projects as project}
      <Experience md={project} />
    {/each}
  </div>

</div>

<script lang="ts">
import type { PageData } from './$types';
import Experience from '$lib/Experience.svelte';
import Header from '../lib/Header.svelte'
import {html as about} from '../md/about.md'
let {data}:{data:PageData} = $props();
</script>
