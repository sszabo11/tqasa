<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Logo from '$lib/components/Logo.svelte';
	import { initAirNotice } from 'airnotice-svelte';
	let { children } = $props();

	initAirNotice({ apiKey: env.PUBLIC_AIRNOTICE_KEY, autoSave: true, showUnitStatus: true });
</script>

<div class="app">
	<header>
		<Logo />
	</header>
	<div class="content">
		{@render children?.()}
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Inria Serif';
		padding: 0;
		margin: 0;
	}

	.app {
		width: 100vw;
	}

	header {
		width: 100%;
		display: flex;
		position: absolute;
		top: 20px;
		align-items: center;
		justify-content: center;
	}
</style>
