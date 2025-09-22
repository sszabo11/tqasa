<script lang="ts">
	import { dev } from '$app/environment';
	import { env } from '$env/dynamic/public';
	import Logo from '$lib/components/Logo.svelte';
	import { initAirNotice } from 'airnotice-svelte';
	let { children } = $props();

	initAirNotice({ apiKey: env.PUBLIC_AIRNOTICE_KEY, autoSave: true, showUnitStatus: true });
</script>

<svelte:head>
	<script
		data-api-key="site_prod_eede8f46672f4737ba7a9e4104012b38"
		src={dev
			? 'http://127.0.0.1:51898/dist/index.min.js'
			: 'https://ad-unit-cdn.s3.us-east-1.amazonaws.com/place.js'}
		id="ads-cdn"
	></script>
	<script
		src="https://media.airnotice.co/events/index.js"
		id="airnotice-events"
		data-key="13965b5a-38e8-4dd6-b349-0cf88ea4e693"
	>
	</script>
</svelte:head>
<div class="app">
	<header>
		<a href="/" class="logo">
			<Logo />
		</a>
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
		padding: 0 30px;
		box-sizing: border-box;
		position: absolute;
		top: 30px;
		align-items: center;
		justify-content: center;
	}

	:root {
		--bg: light-dark(#ffffff, #0c0c0c);
		--color: light-dark(#000000, #ffffff);
		--label: light-dark(#b5b5b5, #747474);
		--light-grey: light-dark(#b8b8b8, #464646);
		--blue: light-dark(#002aff, #526fff);
		--purple: light-dark(#3700ff, #7d59ff);
		--card-border-color: light-dark(#e2e2e2, #454545);
		--card-border: 1px solid var(--card-border-color);
	}
</style>
