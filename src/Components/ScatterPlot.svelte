<script>
	import { extent, scaleLinear, groups } from 'd3';
  import csv from './Map/plot.csv'

  let width = 0
  let height = 0

  
  let margin = {
      top: 70,
      left: 60,
      right: 10,
      bottom: 20
  }

  $: chartWidth = width - margin.left - margin.right
  $: chartHeight = height - margin.top - margin.bottom


  $: xScale = scaleLinear().domain( extent(csv, d => +d.month)).range([margin.left, chartWidth - margin.right])
  $: yScale = scaleLinear().domain([1, 4]).range([margin.top, chartHeight - 70])
  $: rScale = scaleLinear().domain( extent(csv, d => +d.value)).range([1, 30])

  let yLabels = {}
  $: groups(csv, d => d.index).forEach(el => {
    yLabels[el[0]] = el[1][0].name
  })

  
  let tooltipData = null
  let mouseX = 0
  let mouseY = 0

  const getTolltipData = (event) => {
		mouseX = event.layerX + 10
		mouseY = event.layerY

	}

  $: console.log(csv, yLabels)
</script>

<h1>Кількість осіб, які були інфіковані та помирали щомісяця в 2023 </h1>
<p>Щороку кількість інфікованих зростає. Внаслідок СНІДу у світі померло близько 40 мільйонів людей. Минулого року СНІД забрав 630 тисяч життів, а понад 1 мільйон людей заразилися ВІЛ. У 2023 році від СНІДу померло близько 3 тисяч людей. В той час, як встановили близько 100 тисяч випадків ВІЛу.Але насправді цифра може бути більшою, адже кожна четверта людина із ВІЛ не знає про свій діагноз. </p>

<div class="main" bind:clientWidth={width} bind:clientHeight={height}>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore missing-declaration -->
  <svg {width} {height} on:mousemove={getTolltipData}>
    <g class="x-axis">
      {#each xScale.ticks(width > 800 ? 12 :  width > 500 ? 5 : 3) as tick}
      <line x1={xScale(tick)} y1={margin.top} x2={xScale(tick)} y2={chartHeight} stroke="#e9e9e9" stroke-width={1}/>
        <text x={xScale(tick)} y={chartHeight + 25} text-anchor="middle">{tick}</text>
      {/each}
    </g>

    <g class="y-axis">
      {#each yScale.ticks(4) as tick, i}
        <line x1={margin.left / 2} y1={yScale(i+1)} x2={chartWidth} y2={yScale(i+1)} stroke="#e9e9e9" stroke-width={1}/>
        <text x={margin.left / 2} y={yScale(i+1) - 35} text-anchor="start">{yLabels[tick]}</text>
      {/each}
    </g>

    {#each csv as el}
      <circle 
        cx={xScale(el.month)} 
        cy={yScale(el.index)} 
        r={rScale(el.value)} 
        fill={'#C1C1FF'}
        on:mousemove={() => tooltipData = el}
        on:mouseleave={() => tooltipData = null}
        />
    {/each}

    <text class="month" x={chartWidth} y={chartHeight} text-anchor="end">{'Місяць'}</text>
  </svg>
  
  {#if tooltipData}
    <div class="tooltip" style={`top: ${mouseY}px; left: ${mouseX}px`}>
      <p class="title">Місяць: {tooltipData.month}</p>
      <p class="title">Кількість: {tooltipData.value}</p>
    </div>
  {/if}
</div>

<style>
  h1 {
    font-size: 40px;
    line-height: 140%;
    max-width: 750px;
    margin-bottom: 40px;
    
  }

  p {
    line-height: 140%;
    max-width: 550px;
    margin-bottom: 80px;
  }

  .title {
    margin-bottom: 0;
  }
  
  .main {
    width: 100%;
    height: 600px;
    font-family: "Montserrat", sans-serif;
  }

  circle {
    opacity: 0.75;
  }

  circle:hover {
    fill: #D7E82A
  }

  .x-axis text {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
  }

  circle {
    transition: all 1s;
  }
  .month {
    font-size: 13px;
  }
  .tooltip {
		position: absolute;
    max-height: 80px;
		color: #ffffff;
		padding: 10px;
		background-color: #5e5e5e87;
		font-family: "Montserrat", sans-serif;
    line-height: 120%;
	}
</style>
