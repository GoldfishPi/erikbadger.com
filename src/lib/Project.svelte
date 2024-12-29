<div class="flex flex-col gap-5 rounded-md lg:flex-row">
  <h5 class="lg:w-1/5">{name}</h5>
  <div class="flex flex-col gap-5 rounded-md lg:w-4/5">
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
interface Props {
  md: {
    attributes: Record<string, unknown>;
    html: string;
  }
}
const { md }: Props = $props();
const name = md.attributes.name as string;
const tools = (md.attributes.tools as string).split(',');
</script>
