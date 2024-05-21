<script>
	// const data = [
	// 	{cx: 100, cy: 200, r: 30, color: 'red'},
	// 	{cx: 250, cy: 150, r: 50, color: 'pink'},
	// 	{cx: 300, cy: 60, r: 10, color: 'green'},
	// ]


	let height = 500
	let width = 1000

	let data = []
	
	setInterval(() => {
		data = Array.from({length: 100}).map(el => {
		return {
			cx: Math.random() * width,
			cy: Math.random() * height,
			r: Math.random() * 50,
			color: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
		}
	})
	}, 1000)

	$: data = Array.from({length: 100}).map(el => {
		return {
			cx: Math.random() * width,
			cy: Math.random() * height,
			r: Math.random() * 20,
			color: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
		}
	})

	console. log(data)
</script>

<div class="container" bind:clientWidth={width} bind:clientHeight={height}>
	<!-- <svg width="1000" height="1000">
		<circle cx="100" cy="100" r="30" fill=RED> </circle>
	</svg> -->
	<svg width={width} height={height}>
		<circle cx="250" cy="260" r="20" fill=pink> </circle>
		{#each data as element}
			<circle cx={element.cx} cy={element.cy} r={element.r} fill={element.color}></circle>
		{/each}
	</svg>
	
</div>


<style>
	.container {
		width: 100%;
		height: 100vh;
	}
	circle {
		opacity: 0.6;
		stroke: white;
		stroke-width: 2px;
		stroke-dashoffset: 10px;
		stroke-dasharray: 2px;
		transition: all 1s;
	}
	
</style>

