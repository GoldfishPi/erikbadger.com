
<div class="flex flex-col lg:gap-5 lg:flex-row">
  <p class="lg:w-2/5">{date}</p>
  <div class="lg:w-3/5 flex flex-col gap-5">
    <a href={href} class="flex gap-3 items-center hover:text-green text-white">
      <h5>{name}</h5>
      <ArrowUpRight size={16} />
    </a>
    <div>
      {@html md.html}
    </div>
    <div class="flex flex-row flex-wrap gap-2">
    {#each tools as tool}
      <Chip name={tool} />
    {/each}
    </div>
  </div>
</div>

<script lang="ts">
import Chip from './Chip.svelte';
import {ArrowUpRight} from 'lucide-svelte';
interface Props {
  md: {
    attributes: Record<string, unknown>;
    html: string;
  }
}
const { md }: Props = $props();
const date = md.attributes.date as string;
const name = md.attributes.name as string;
const href = md.attributes.href as string;
const tools = (md.attributes.tools as string).split(',');
</script>
