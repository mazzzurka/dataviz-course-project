<script>
	import { json, geoMercator, geoPath, groups, scaleLinear } from 'd3';
    import geojson from './ukraine-adm-regions.json'
    import csv from './vil-infection.csv';

	export let show = 'vil'

	let width = 0
	
	$: height = width / 1.5;

	let tooltipData = null

	let mouseX = 0
	let mouseY = 0

	$: console.log(csv)


    export let colors = ['#C1C1FF','#5A5BF3']

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



	$: projection = geoMercator().fitSize([width, height- 50], geojson);
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
	on:mousemove={getTolltipData}
>
<div class="head">
	<h1>ВІЛ-інфіковані, які перебувають на обліку станом на 01.01.2024</h1>
	<p>Україна посідає друге місце в Європейському регіоні ВООЗ (серед 53 країн) за оціночною кількістю випадків ВІЛ-інфекції. Перше місце у росії, на яку припадає майже 50% випадків  інфікування ВІЛ.</p>
	<p>За даними Центру громадського здоровʼя, станом на 01.01.2023 рік, в Україні проживає близько 257 тис. ВІЛ-позитивних людей. З них лише 79% знає про свій статус, а АРТ отримує лише 77%. Майже половина людей із ВІЛ-інфекцією (43%) дізнається про свій статус на пізніх стадіях.</p>
</div>
	
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
		<p>На 100 000 тис. населення</p>
		<div class="stripe"></div>
		<div class="values"> 
			<p>86</p> 
			<p> 1100</p>
		</div>
	</div>
</main>

<style>
	h1 {
		font-size: 40px;
		line-height: 140%;
		width: 750px;
		margin-bottom: 40px;
	}

	p {
		max-width: 650px;
		margin-bottom: 20px;
	}


	main {
		justify-content: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		/* margin-left: 150px;
		margin-bottom: 150px; */
		
	}

	.head {
		margin-bottom: 80px;
	}

	path {
		stroke: #F4F4F4;
		transition: opacity 0.4s ease-in-out;
		transition-delay: 0.8s;
	}

	path:hover {
		fill: #D7E82A;
	
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
		background-color: #5e5e5e87;
		font-family: "Montserrat", sans-serif;
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
		background: linear-gradient(90deg, #C1C1FF, #5A5BF3);
	}
	.values {
		display: flex;
		justify-content: space-between;
	}

	.values p {
		display: block;
	}
</style>