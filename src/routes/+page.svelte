<script>
	import Bubbles from "../Components/Bubbles/Bubbles.svelte";
	import Map from "../Components/Map/Map.svelte";
	// import Counter from "../Components/Counter/Counter.svelte"
	import Footer from "../Components/Footer.svelte"
	import ScatterPlot from "../Components/ScatterPlot.svelte";
	import BarChart from "../Components/BarChart.svelte";
	import PieChart from "../Components/PieChart.svelte"
	import AreaChart from "../Components/areaChart.svelte";
	import TileMap from "../Components/TileMap.svelte";
	import Firstblock from "../Components/firstblock.svelte";
</script>

<Firstblock></Firstblock>

<div class="center">
	<TileMap> </TileMap>
	<BarChart> </BarChart>
	<ScatterPlot> </ScatterPlot>
	<!-- <Map show={'item'}> </Map> -->
	<Map> </Map>
	<PieChart></PieChart>
</div>

<Footer> </Footer>

<style>

	div {
		font-family: 'e-ukraine';
		font-size: 47;
	}

	.center {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		padding: 0 15px;
  	}
	
</style>
