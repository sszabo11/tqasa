<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import ArticleAd from '$lib/components/ArticleAd.svelte';
	import { Group } from 'airnotice-svelte';

	let { data } = $props();
</script>

<div class="container">
	<div class="main">
		<h1>thoughts, questions and some answers</h1>
		<p>A blog to ponder on things</p>
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
		width: 100%;
		height: 50vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: linear-gradient(180deg, #ffd09a -29.95%, #ffffff 100%);
	}

	.recent {
		padding: 30px;
		box-sizing: border-box;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2.5rem;
		justify-items: center;
	}

	.main h1 {
		font-size: 50px;
		font-weight: 500;
		font-style: italic;
	}

	.main p {
		font-size: 18px;
		font-style: italic;
	}
</style>
