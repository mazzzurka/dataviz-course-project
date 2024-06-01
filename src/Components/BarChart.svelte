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
      {type: 'Гомосексуальним шляхом', value: 31},
      {type: 'Гетеросексуальним шляхом', value: 772},
      {type: 'Введення наркотичних речовин', value: 223},
      {type: 'Переливання препаратів або крові', value: 0},
      {type: 'Трансплантації донорських органів, клітин', value: 0},
      {type: 'Інші медичні маніпуляції', value: 0},
      {type: 'Професійне інфікування', value: 0},
      {type: 'Немедичні втручання', value: 0},
      {type: 'Діти народженні ВІЛ-позитивними', value: 5},
      {type: 'Шлях інфікування не виявлено', value: 6}
    ]
  
    $: xScale = scaleLinear()
      .domain([0, extent(data, d => d.value)[1]])
      .range([margin.left, w])
  
    $: yScale = scaleLinear()
      .domain([0, data.length])
      .range([margin.top, h])
  
    //$: console.log(scaleLinear)
</script>
  
<h2>Шляхи інфікування ВІЛ-інфекцією</h2>
<p>З графіку нижче можна зрозуміти, що медзаклади України дуже відповідально підходять до цієї хвороби. І заклади, в яких перебувають хворі, бережуть своїх лікарів, тому інфікованих таким методом нуль. Найгіршою стороною інфікування є статевий шлях. Ще одне підтвердження того, що велика кількість нехтують контрацепцією. </p>
  <div class="main" bind:clientWidth={width} bind:clientHeight={height}>
    <svg {width} {height}>

        <g class="grid">
            {#each xScale.ticks(20) as tick, i}
            <line x1={xScale(tick)} y1={margin.top} x2={xScale(tick)} y2={h}
            stroke={'#A9AD94'}
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
          fill={'#5A5BF3'}/>

        <text x={margin.left} y={yScale(i) - 5} >{d.type}</text>
      {/each}
    </svg>
</div>
  
<style>
  h2 {
    font-size: 40px;
    margin-bottom: 80px;
    margin-left: 0px;
    width: 500px;
    line-height: 140%;
  }

  .main {
    /*margin-left: 180px;*/
    width: 100%;
    height: 500px;
    
    
  }
   

  text {
    font-family: 'e-ukraine';
    font-size: 13px;
  }
</style>