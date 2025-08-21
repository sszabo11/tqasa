<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { initAirNotice } from 'airnotice-svelte';
	let { children } = $props();

	initAirNotice({ apiKey: env.PUBLIC_AIRNOTICE_KEY, autoSave: true, showUnitStatus: true });
</script>

{@render children?.()}

<style>
	:global(body) {
		font-family: 'Inria Serif';
		padding: 0;
		margin: 0;
	}
</style>
