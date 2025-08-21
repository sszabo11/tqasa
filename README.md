# Thoughts, questions and some answers

A blog to ponder things.

## Under construction

I am currently building it

## Also a demo for AirNotice
I have also built AirNotice, the platform that connects brands seeking to advertise with sites wanting to earn. Were an indpendent ad network that is striving to make ads easy for everyone. Also in development. Launching this month! Visit [airnotice.co](https://airnotice.co) for info on that.

For sites (publishers) you can easily intergrate ads via a component.

```sh
# install sdk
npm install airnotice-svelte
```

## AirNotice usage

Once you've installed your framework library, AirNotice enables you to do **rapid prototyping** where you can place ads, that auto save on the dashboard, saving you time.

```svelte

<!-- Place single ad -->
<Ad name="header" />


<!-- Place group ad (e.g. Show ad every 5 articles)-->
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
```
See ([`ArticleAd.svelte`](https://github.com/sszabo11/tqasa/blob/main/src/routes/%2Bpage.svelte)) for group usage
