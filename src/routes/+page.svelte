<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import ArticleAd from '$lib/components/ArticleAd.svelte';
	import RabbitIcon from '$lib/icons/RabbitIcon.svelte';
	import { Group } from 'airnotice-svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Thoughts, questions and some answers</title>
	<meta name="description" content="A blog to write and comment about things." />
</svelte:head>
<div class="container">
	<a class="goal" href="/goal">Goal</a>

	<a class="about" href="/about">About</a>
	<div class="main">
		<h1>Thoughts, questions and some answers</h1>
		<p>A collection of ideas.</p>
		<div class="by">
			<span>By</span>
			<RabbitIcon />
			<span>Rabbit Muncher</span>
		</div>
	</div>
	<div class="recent">
		<Group name="recent">
			{#each data.articles as article, i}
				{#if i !== 0 && i % 4 === 0}
					<ArticleAd />
				{/if}
				<div class="article">
					<Article {article} />
				</div>
			{/each}
		</Group>
	</div>
</div>

<style>
	.container {
		width: 100vw;
	}

	.main {
		position: relative;
		width: 100%;
		height: 50vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.recent {
		padding: 30px;
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		justify-items: center;
	}

	.main h1 {
		font-size: 3.7vw;
		font-weight: 500;
	}

	.main p {
		font-size: 20px;
		font-style: italic;
	}

	.by {
		position: absolute;
		bottom: 100px;
		display: flex;
		align-items: center;
		gap: 2px;
		color: var(--light-grey);
	}

	.about {
		right: 30px;
		top: 30px;
	}
	.goal {
		left: 30px;
		top: 30px;
	}
	a {
		position: absolute;
		color: var(--color);
		font-size: 18px;
		z-index: 999;
	}
</style>
