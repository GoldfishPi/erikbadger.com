<script lang="ts">
  import '@fontsource/jetbrains-mono'
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-shark text-white p-8 prose prose-everforest">
  {@render children()}
</div>
