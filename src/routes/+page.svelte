<svelte:head>
  <title>Erik Badger | Software Engineer</title>
</svelte:head>

<div class="flex flex-col gap-20 lg:flex-row p-10 lg:p-0 lg:pl-20 lg:pr-20 ">
  <Header />
  <div class="flex flex-col gap-20 lg:w-1/2 lg:pt-20 lg:pb-20">
    <h2 class="sticky top-0 bg-shark">About</h2>
    <div id="about" class="flex flex-col gap-5">
      {@html about}
    </div>
    <h2 class="sticky top-0 bg-shark">Experience</h2>
    <div id="experience" class="flex flex-col gap-10">
      {#each data.experience as experience}
        <Experience md={experience} />
      {/each}
    </div>
    <h2 class="sticky top-0 bg-shark">Projects</h2>
    <div id="projects" class="flex flex-col gap-10">
      {#each data.projects as project}
        <Project md={project} />
      {/each}
    </div>
  </div>
</div>

<script lang="ts">
import type { PageData } from './$types';
import Experience from '$lib/Experience.svelte';
import Header from '../lib/Header.svelte'
import {html as about} from '../md/about.md'
	import Project from '$lib/Project.svelte';
let {data}:{data:PageData} = $props();
</script>
