<div class="flex flex-col gap-5 rounded-md lg:flex-row">
  <a href={href} class="h-6 lg:w-2/5 flex flex-row gap-2 items-center text-white hover:text-green">
    <h5 >{name}</h5>
    <ArrowUpRight size={16} />
  </a>
  <div class="flex flex-col gap-5 rounded-md lg:w-3/5">
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
	import { ArrowUpRight } from 'lucide-svelte';
import Chip from './Chip.svelte';
interface Props {
  md: {
    attributes: Record<string, unknown>;
    html: string;
  }
}
const { md }: Props = $props();
const name = md.attributes.name as string;
const tools = (md.attributes.tools as string).split(',');
const href = md.attributes.href as string;
</script>
