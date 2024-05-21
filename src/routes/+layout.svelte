<slot />
<!-- <div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style> -->


<!-- <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">Звіт </div>
            <nav>
                <ul>
                    <li><a href="#">Про проєкт</a></li>
                    <li><a href="#">Статистика</a></li>
                    <li><a href="#">Виконавець</a></li>
                </ul>
            </nav>
        </div>
    </header>


</body>
</html> -->
<!-- 
<script>
	import { json, geoMercator, geoPath } from 'd3';

	let width, height;

	const geojsonPath =
		'https://raw.githubusercontent.com/romansverdan/Ukraine-Map/main/ukraine-adm-regions.json';
	let geojson;
	json(geojsonPath).then((data) => (geojson = data));

	$: projection = geoMercator().fitSize([width, height], geojson);
	$: pathGenerator = geoPath(projection);

	let counties = [];
	$: if (geojson)
		counties = geojson.features.map((feature, index) => {
			return {
				...feature,
				path: pathGenerator(feature),
				id: index,
			};
		});
</script> -->

<!-- <main
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<svg
		width={width}
		height={height}
	>
		{#each counties as { id, path }}
			<path d={path} />
		{/each}
	</svg>
</main> -->

<!-- <style>
	main {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}

	path {
		fill: black;
		stroke: none;
		opacity: 0.5;
		transition: opacity 0.4s ease-in-out;
		transition-delay: 0.8s;
	}
</style> -->
