<script>
    import { pie, arc} from 'd3'
    let data = [
        {name: 'ВІЛ-інфіковані', value: 70, fill:'#5A5BF3'},
        {name: 'ВІЛ-інфіковані з туберкульозом', value: 18, fill:'#C1C1FF'},
        {name: 'Смертність від поєднання', value: 12, fill:'#5E5E5E'},
    ]

    let width = 600
    let height = 600

    let tooltipData = null

	let mouseX = 0
	let mouseY = 0

    let margin = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0

    }

    const pieChart = pie()
        .sort(null)
        .value(d => d.value)

    const arcPath = arc()
        .innerRadius(0)
        .outerRadius(Math.min(width,height) / 2 - 10)

    const arcs = pieChart(data)


    $: console.log(pie, arc)  

</script>


<div class="main" >
    <div class="legend">
        <h2>Чому це так небезпечно?</h2>
        <p>Останніми роками в Україні одночасно прискореними темпами розвиваються епідемії двох соціально небезпечних хвороб – туберкульозу (ТБ) і ВІЛ/СНІДу, що часто уражають одні й ті ж групи населення.</p>
        <ul>
            {#each data as d}
            <li>
                <span style={`background: ${d.fill}`}></span>
                <span class="value">{d.value}</span>
                {d.name}
            </li>
            {/each}
        </ul>
    </div>

    <div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
        <svg {width} {height} viewBox="{-width /2}, {-height /2}, {width}, {height}">
            {#each arcs as segment, i}
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <path 
                d={arcPath(segment)}
                fill={data[i].fill}
                stroke={'#fff'}
                on:mouseenter={() => {tooltipData={
                    name: name,
                    total: value
                }}}
                on:mouseleave={() =>{tooltipData= null}}
                />
            {/each}

        </svg>
            {#if tooltipData}
	        <div class="tooltip" style={`top: ${mouseY}px; left: ${mouseX}px`}>
		        <p class="title">{tooltipData.name}</p>
		        <p>На 100 000: {tooltipData.total}</p>
	        </div>
	    {/if}
    </div> 
    

</div>



<style>
    .main {

        margin: 0 0px 150px 0px;
        /*height: 90vh;*/
        /*width: 1000px;*/
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        @media (max-width: 800px) {
          grid-template-columns: 1fr;
        }
    }
    .tooltip {
		position: absolute;
		color: #ffffff;
		padding: 10px;
		background-color: #5e5e5e87;
		font-family: 'e-ukraine';
	}

    .chart {
        /*width: 100%;*/
        width: 600px;
        height: 100%;
        height: 600px;
    }

    

    path:hover {
        fill: #D7E82A;
        /* stroke: #D7E82A;
        stroke-width: 3px; */
    }

    .legend {
        /*max-width: 450px;*/
        /*margin-left: 80px;*/
    }
    .legend ul {
        margin: 0;
        padding: 0;
    }

    .legend ul li {
        list-style: none;
        display: flex;
        align-items: top;
        margin-bottom: 16px;

    }

    h2 {
        font-size: 42px;
        line-height: 120%;
        width: 400px;
    }

    p {
        font-weight: 400;
        line-height: 140%;
        margin-bottom: 80px;
        max-width: 550;
    }

    .legend ul li span {
        width: 15px;
        height: 15px;
        display: block;
        margin-right: 10px;
        border-radius: 0%;
    }
</style>