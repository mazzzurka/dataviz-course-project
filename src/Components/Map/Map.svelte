<script>
	import { json, geoMercator, geoPath, groups, scaleLinear } from 'd3';
    import geojson from './ukraine-adm-regions.json'
    import csv from './vil-infection.csv';

	export let show = 'vil'

	let width = 0, height = 0;
	let tooltipData = null

	let mouseX = 0
	let mouseY = 0

	$: console.log(csv)


    export let colors = ['#d7e3f4','#29384B']

    const getColor = scaleLinear().domain([1, 1100]).range(colors)

	// const geojsonPath =
	// 	'https://raw.githubusercontent.com/romansverdan/Ukraine-Map/main/ukraine-adm-regions.json';
	// let geojson;
	// json(geojsonPath).then((data) => (geojson = data));

//     $: oblData = csv.filter(row => {
//         return row.level === 'oblast'
//     })

//     let mapData = {}
//   $: dataByObl = groups(oblData, d => d.oblast).forEach(el => {
//     mapData[el[0]] = {
//         values: el[1],
//         total: el[1].lenth
//       }
//   })

    // $: console.log(mapData)
	let mapData = {}

	csv.forEach(row => {
		mapData[row.oblast] = row
	})



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

	$: console.log(mapData)

	const getTolltipData = (event) => {
		// console.log(event.layerX, event.layerY)
		mouseX = event.layerX + 10
		mouseY = event.layerY

	}
</script>

<main
	bind:clientWidth={width}
	bind:clientHeight={height}
	on:mousemove={getTolltipData}
>
	<svg
		width={width}
		height={height}
		
	>
		{#each counties as obl}
            {@const name = obl.properties['UA_NAME']}

			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<path d={obl.path} 
            fill={mapData[name] ? getColor(mapData[name][show]) : '#ccc'}

			on:mousemove={() => {tooltipData = {
				name: name,
				total: mapData[name]['vil']
			}}}
			on:mouseleave={() => {tooltipData = null}}
            />
		{/each}
	</svg>
	{#if tooltipData}
	<div class="tooltip" style={`top: ${mouseY}px; left: ${mouseX}px`}>
		<p class="title">{tooltipData.name}</p>
		<p>На 100 000: {tooltipData.total}</p>
	</div>
	{/if}

	<div class="legend">
		<p>Легенда</p>
		<div class="stripe"></div>
		<div class="values"> 
			<p>86</p> 
			<p> 1100</p>
		</div>
	</div>
</main>

<style>

	main {
		justify-content: center;
		width: 50vw;
		height: 100vh;
		overflow: hidden;
		position: relative;
	}

	path {
		stroke: white;
		transition: opacity 0.4s ease-in-out;
		transition-delay: 0.8s;
	}

	path:hover {
		fill: rgb(252, 230, 33);
	
	}
    
    @-webkit-keyframes pulse {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    .pulse {
        -webkit-animation: pulse 1s linear infinite ;
    }

	.tooltip {
		position: absolute;
		color: #ffffff;
		padding: 10px;
		background-color: #09090981;
		font-family: 'e-ukraine';
	}

	.legend {
		/* background-color: #29384B; */
		position: absolute;
		bottom: 50px;
		left: 30px;
		width: 200px;
	}

	.stripe {
		width: 100%;
		height: 30px;
		background: linear-gradient(90deg, #d7e3f4, #29384B);
	}
	.values {
		display: flex;
		justify-content: space-between;
	}

	.values p {
		display: block;
	}
</style>