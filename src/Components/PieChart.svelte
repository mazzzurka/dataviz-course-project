<script>
  import { pie, arc } from 'd3';

  let data = [
    { name: 'ВІЛ-інфіковані', value: 70, fill: '#5A5BF3' },
    { name: 'ВІЛ-інфіковані з туберкульозом', value: 18, fill: '#C1C1FF' },
    { name: 'Смертність від поєднання', value: 12, fill: '#5E5E5E' },
  ];

  let width = 600;
  let height = 500; // Max height of the chart

  let tooltipData = null;
  let mouseX = 0;
  let mouseY = 0;

  const pieChart = pie()
    .sort(null)
    .value(d => d.value);

  const arcPath = arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2 - 10);

  const arcs = pieChart(data);

  function handleMouseEnter(event, d) {
    mouseX = event.layerX + 15;
    mouseY = event.layerY;
    tooltipData = d;
  }

  function handleMouseLeave() {
    tooltipData = null;
  }
</script>

<div class="main">
  <div class="legend">
    <h2>Чому це так небезпечно?</h2>
    <p>Останніми роками в Україні одночасно прискореними темпами розвиваються епідемії двох соціально небезпечних хвороб – туберкульозу (ТБ) і ВІЛ/СНІДу, що часто уражають одні й ті ж групи населення.</p>
    <ul>
      {#each data as d}
        <li>
          <span class="block" style={`background: ${d.fill}`}></span>
          <span class="value">{d.value}</span>
          {d.name}
        </li>
      {/each}
    </ul>
  </div>

  <div class="chart">
    <svg {width} {height} viewBox="{-width / 2} {-height / 2} {width} {height}">
      {#each arcs as segment, i}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <path
          d={arcPath(segment)}
          fill={data[i].fill}
          stroke="#fff"
          on:mousemove={(event) => handleMouseEnter(event, data[i])}
          on:mouseleave={handleMouseLeave}
        />
      {/each}
    </svg>

    {#if tooltipData}
      <div class="tooltip" style={`top: ${mouseY}px; left: ${mouseX}px`}>
        <p class="title">{tooltipData.name}</p>
        <p>На 100 000 населення: <strong>{tooltipData.value}</strong></p>
      </div>
    {/if}
  </div>
</div>

<style>
  .main {
    margin: 0 0 150px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    align-items: center
  }

  @media (max-width: 768px) {
    .main {
      flex-direction: column;
      align-items: center;
    }
  }

  .legend {
    padding: 20px 0;
    flex: 1;
  }

  .legend p {
    margin-bottom: 20px;
  }

  .legend ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .legend ul li {
    display: flex;
    margin-bottom: 16px;
  }

  .legend ul li span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
  }
  span.block {
    /*margin-top: 5px;*/
  }
  span.value {
    font-weight: bold;
  }

  .chart {
    flex: 1;
    max-width: 600px;
    max-height: 500px;
    width: 100%;
  }

  .chart svg {
    width: 100%;
    height: 100%;
  }

  .tooltip {
    position: absolute;
    color: #fff;
    padding: 10px;
    background-color: rgba(94, 94, 94, 0.87);
    font-family: "Montserrat", sans-serif;
    pointer-events: none;
  }
  .tooltip p{
    display: block;
    margin: 0;
    padding: 0;
  }
  p.title {
    margin-bottom: 10px;
    font-size: 18px;
  }
  .tooltip p strong {
    font-weight: bold;
  }
  path:hover {
    fill: #d7e82a;
  }

  h2 {
    font-size: 42px;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  p {
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 20px;
  }
</style>
