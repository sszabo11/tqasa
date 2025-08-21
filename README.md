# Thoughts, questions and some answers
A blog to ponder things. 
In the beginning, it will just be me writing, however I hope that it will become a place for anyone to write about their thoughts, questions or answers.

## 🚩 Status
Under development. I am currently building it.





## Also a demo for AirNotice
I have also built AirNotice, the platform that connects brands seeking to advertise with sites wanting to earn. AirNotice is an indpendent ad network that is striving to make ads easy for everyone. Its Also in development. Launching this month! Visit [airnotice.co](https://airnotice.co) for info on that.

For sites (publishers) you can easily intergrate ads via a component.

```sh
# install sdk
npm install airnotice-svelte
```

## AirNotice usage

Once you've installed the library, AirNotice enables you to do **rapid prototyping** where you can place ads, that auto save on the dashboard, saving you time.


```svelte

<!-- Place single ad -->
<Ad name="header" />


<!-- Place group ad (e.g. Show ad every 4 articles)-->
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
See my ([`usage`](https://github.com/sszabo11/tqasa/blob/main/src/routes/%2Bpage.svelte)) for **group** ads

## Benefits of AirNotice compared to other publisher networks
- Place ads anywhere: Have full control and flexbility of your ads, so your site still looks **pretty**
- Ads in anysize: Our ad components will inherit the size of their parents, and will resize according to it!
- Rapid prototyping: As you build your app, place ads where you want in code, then approve them in the dashboard - saving time.
- Transparent + high earnings: Earn $0.85 for every ad click on your site!
- Easy to use dashboard: Our dashboard offers all the tools and anlytics for your earnings.
