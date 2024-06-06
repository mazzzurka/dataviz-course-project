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

  <div class="barchart">
    <BarChart> </BarChart>
  </div>

	<ScatterPlot> </ScatterPlot>

  <div class="map">
    <TileMap> </TileMap>
  </div>

	<div class="map">
		<Map> </Map>
	</div>
	
	<h1>Висновки</h1>
	<div class="conclusion-section">
		<div class="conclusion">
			<div class="conclusion-details">
				<p>Туберкульоз є серйозною проблемою в Україні, інфікованих осіб щороку стає все більше.</p>
				<p>Попередні заходи щодо контролю туберкульозу не виявилися достатньо ефективними.</p>
				<p>Необхідно проводити більше інформаційних кампаній та забезпечити доступ до якісної медичної допомоги для всіх пацієнтів.</p>
			</div>
		</div>
	
		<div class="conclusion">
			<div class="conclusion-details">
				<p>ВІЛ/СНІД залишається однією з найбільш небезпечних інфекційних хвороб в світі.</p>
				<p>Населення України також страждає від поширення ВІЛ-інфекції, і це вимагає негайних заходів з контролю та профілактики.</p>
				<p>Пропаганда безпечного сексуального контакту, розповсюдження презервативів та регулярні медичні обстеження можуть допомогти у запобіганні поширенню хвороби.</p>
			</div>
		</div>
	</div>

</div>


<Footer> </Footer>






<style>

	:global(body) {
		margin: 0;
		padding: 0;
		
	}
	
	h1 {
		font-size: 40px;
		margin-bottom: 40px;
	}

	.conclusion-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
	margin-bottom: 120px;
	}

	.conclusion {
		background-color: #c1c1ff7b;
		padding: 30px 30px 30px 30px;
		border-radius: 16px;
	}

	

	.conclusion-details p {
		margin: 20px 0;
	}

	
	.main {
		/*background-color: #F4F4F4;*/
    
		align-items: center;
    	width: calc(100% - 30px);
    	max-width: 1200px;
    	margin: 0 auto;
    	padding: 0 15px;
		line-height: 140%;

	}
	

	div {
		/*font-family: 'e-ukraine';*/
    font-family: "Montserrat", sans-serif;
		font-size: 47;
	}
	.map {
		
		width: 100%;
		margin: 120px auto;
    
	}
	.barchart {
    
		width: 100%;
		margin: 0 auto;
    
  }
</style>
