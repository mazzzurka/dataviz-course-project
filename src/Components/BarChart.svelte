<script>
    import { scaleLinear, extent, ticks } from "d3"
  
    let width = 1000
    let height = 500
  
    let margin = {
      top: 25,
      left: 10,
      right: 10,
      bottom: 10
    }
  
    $: w = width - margin.left - margin.right
    $: h = height - margin.top - margin.bottom
  
    let data = [
      {type: 'Міський туризм', value: 54},
      {type: 'Культурний туризм', value: 28.4},
      {type: 'Відпочинок на пляжі', value: 23.1},
      {type: 'Подієвий туризм', value: 22.8},
      {type: 'Гастро туризм', value: 21.8},
      {type: 'Активний відпочинок', value: 16},
      {type: 'Екотуризм', value: 11},
      {type: 'Рекреаційни туризм', value: 9}
    ]
  
    $: xScale = scaleLinear()
      .domain([0, extent(data, d => d.value)[1]])
      .range([margin.left, w])
  
    $: yScale = scaleLinear()
      .domain([0, data.length])
      .range([margin.top, h])
  
    //$: console.log(scaleLinear)
</script>
  
<h2>Bar Chart</h2>
<div class="main" bind:clientWidth={width} bind:clientHeight={height}>
    <svg {width} {height}>

        <g class="grid">
            {#each xScale.ticks(20) as tick, i}
            <line x1={xScale(tick)} y1={margin.top} x2={xScale(tick)} y2={h}
            stroke={'#000'}
            stroke-width="0.5"/>

            <text x={xScale(tick)} y={h + 15} text-anchor="middle">{i % 2 ? tick:''}</text>
            {/each}
        </g>

      {#each data as d, i}
        <rect 
          x={margin.left} 
          y={yScale(i)} 
          width={xScale(d.value)} 
          height={(h / data.length) - 25}
          fill={'#29384B'}/>

        <text x={margin.left} y={yScale(i) - 5} >{d.type}</text>
      {/each}
    </svg>
</div>
  
<style>
  .main {
    width: 100%;
    height: 500px;
  }
   

  text {
    font-family: 'e-ukraine';
    font-size: 13px;
  }
</style>