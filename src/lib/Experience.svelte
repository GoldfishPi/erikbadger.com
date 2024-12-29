
<div class="flex flex-col gap-5">
  <div>
    {#if date}
    <p>{date}</p>
    {/if}
    <h5>{name}</h5>
  </div>
  <div>
    {@html md.html}
  </div>
  <div class="flex flex-row flex-wrap gap-2">
  {#each tools as tool}
    <Chip name={tool} />
  {/each}
  </div>
</div>

<script lang="ts">
import Chip from './Chip.svelte';
interface Props {
  md: {
    attributes: Record<string, unknown>;
    html: string;
  }
}
const { md }: Props = $props();
const date = md.attributes.date as string;
const name = md.attributes.name as string;
const tools = (md.attributes.tools as string).split(',');
</script>
