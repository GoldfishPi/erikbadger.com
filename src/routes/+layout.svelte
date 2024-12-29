<script lang="ts">
  import '@fontsource/jetbrains-mono'
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-shark text-white max-w-full prose prose-everforest">
  {@render children()}
</div>
