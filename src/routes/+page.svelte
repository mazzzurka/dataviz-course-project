<script>
  import Bubbles from "../Components/Bubbles/Bubbles.svelte";
  import Map from "../Components/Map/Map.svelte";
  import Footer from "../Components/Footer.svelte";
  import ScatterPlot from "../Components/ScatterPlot.svelte";
  import BarChart from "../Components/BarChart.svelte";
  import PieChart from "../Components/PieChart.svelte";
  import TileMap from "../Components/TileMap.svelte";
  import Firstblock from "../Components/firstblock.svelte";
  import Headerfirst from "../Components/headerfirst.svelte";
</script>

<div class="header">
  <Headerfirst />
</div>

<div class="main">
  <div class="chart-container">
    <PieChart />
    <div class="barchart">
      <BarChart />
    </div>
  </div>
  <ScatterPlot />
  <!--<div class="chart-container">-->
    <div class="map">
      <TileMap />
    </div>
    <div class="map">
      <Map />
    </div>
  <!--</div>-->
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

<Footer />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  .header {
    max-width: 1200px;
    width: calc(100% - 40px);
    margin: 0 auto;
    padding: 0 20px;
  }
  h1 {
    font-size: 40px;
    margin-bottom: 40px;
  }

  .main {
    width: calc(100% - 30px);
    max-width: 900px;
    margin: 0 auto;
    padding: 0 15px;
    line-height: 140%;
  }

  .chart-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .chart-container > div {
    flex: 1;
    min-width: 300px;
    margin: 10px;
  }

  .conclusion-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-bottom: 120px;
  }

  .conclusion {
    background-color: #c1c1ff7b;
    padding: 30px;
    border-radius: 16px;
  }

  .conclusion-details p {
    margin: 20px 0;
  }

  .map, .barchart {
    width: 100%;
    margin: 0 auto;
  }

  .barchart {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    .chart-container {
      flex-direction: column;
      align-items: center;
    }
  }

  div {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
  }
</style>
