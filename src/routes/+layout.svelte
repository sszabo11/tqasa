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
		data-api-key="site_dev_8efb6f6363ca4bcf88647e71dc6be7d9"
		src={dev
			? 'http://127.0.0.1:8080/dist/index.min.js'
			: 'https://ad-unit-cdn.s3.us-east-1.amazonaws.com/place.js'}
		id="ads-cdn"
	></script>
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
