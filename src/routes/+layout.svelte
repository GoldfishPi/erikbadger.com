<script lang="ts">
  import '@fontsource/jetbrains-mono'
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-shark text-white p-8">
  {@render children()}
</div>
