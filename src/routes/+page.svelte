<script>
	import Bubbles from "../Components/Bubbles/Bubbles.svelte";
	import Map from "../Components/Map/Map.svelte";
	import Footer from "../Components/Footer.svelte"
	import ScatterPlot from "../Components/ScatterPlot.svelte";
	import BarChart from "../Components/BarChart.svelte";
	import PieChart from "../Components/PieChart.svelte"
	import TileMap from "../Components/TileMap.svelte";
	import Firstblock from "../Components/firstblock.svelte";
	import Headerfirst from "../Components/headerfirst.svelte";
</script>

<div class="main">

	<Headerfirst></Headerfirst>

	<PieChart></PieChart>
	<BarChart> </BarChart>
	<ScatterPlot> </ScatterPlot>
	<!-- <Map show={'item'}> </Map> -->
	<TileMap> </TileMap>
	<div class="map">
		<Map> </Map>
	</div>
	
	

</div>

<Footer> </Footer>






<style>

	:global(body) {
		margin: 0;
		padding: 0;
	}
	
	.main {
		background-color: #F4F4F4;
		align-items: center;
	}
	

	div {
		font-family: 'e-ukraine';
		font-size: 47;
	}
	.map {
		max-width: 1000px;
		width: 100%;
		margin: 0 auto;
		
	}
	
</style>
