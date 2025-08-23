<script lang="ts">
	import type { Article } from '$lib/types';
	import moment from 'moment';

	type Props = {
		article: Article;
	};

	let { article }: Props = $props();
</script>

<article class="article">
	<div class="img">
		<img src={article.thumbnail} alt={article.title} />
	</div>
	<div class="about">
		<h3>{article.title}</h3>
		<span>{moment(article.created_at).format('MMMM Do YYYY')}</span>
		<p>{article.description}</p>
	</div>
</article>

<style>
	.article {
		padding: 20px 26px;
		box-sizing: border-box;
		border: var(--card-border);
		width: fit-content;
		width: 100%;
		display: grid;
		gap: 50px;
		grid-template-columns: 1fr 2fr;
		height: 100%;
	}

	.img {
		width: 100%;
	}

	img {
		width: 100%;
	}

	h3 {
		font-size: 36px;
		font-weight: 600;
		margin: 0;
		margin-bottom: 20px;
	}

	span {
		margin-bottom: 20px;
	}

	p,
	span {
		font-size: 18px;
		color: var(--label);
	}

	.about {
		padding: 10px 0;
		width: 100%;
	}
</style>
