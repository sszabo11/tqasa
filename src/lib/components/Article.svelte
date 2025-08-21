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
	<h3>{article.title}</h3>
	<p>{article.description}</p>
	<span>{moment(article.created_at).format('MMMM Do YYYY')}</span>
</article>

<style>
	.article {
		padding: 20px 26px;
		box-sizing: border-box;
		border: 1px solid #e2e2e2;
		width: fit-content;
		width: 100%;
		display: flex;
		height: 100%;
		flex-direction: column;
		gap: 10px;
	}

	.img {
		width: 100%;
	}

	img {
		width: 100%;
	}

	h3 {
		font-size: 20px;
		margin: 0;
	}

	p,
	span {
		font-size: 16px;
		color: #b5b5b5;
		margin: 0;
	}
</style>
