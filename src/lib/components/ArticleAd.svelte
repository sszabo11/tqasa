<script lang="ts">
	import { Ad } from 'airnotice-svelte';
</script>

<div class="article">
	<span>Advertisment</span>
	<div class="ad">
		<Ad fill="width" />
	</div>
</div>

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
		gap: 20px;
	}

	span {
		font-size: 16px;
		color: #b5b5b5;
	}

	.ad {
		width: 100%;
		height: 300px;
	}
</style>
