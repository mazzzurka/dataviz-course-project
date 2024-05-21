<script>
    import { pie, arc} from 'd3'
    let data = [
        {name: 'ВІЛ', value: 70, fill:'#d7e3f4'},
        {name: 'ВІЛ+Туберкульоз', value: 18, fill:'#29384B'},
        {name: 'Смертність від поєднання', value: 12, fill:'#29384'},
    ]

    let width = 500
    let height = 500

    let margin = {
        top: 10,
        left: 10,
        bottom: 10,
        right: 10

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
    <div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
        <svg {width} {height} viewBox="{-width /2}, {-height /2}, {width}, {height}">
            {#each arcs as segment, i}
                <path 
                d={arcPath(segment)}
                fill={data[i].fill}
                stroke={'#fff'}
                />
            {/each}

        </svg>
    </div>  

    <div class="legend">
        <h2>Pie Chart</h2>
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
</div>

<style>
    .main {
        width: 100%;
        height: 500px;
        display: grid;
        grid-template-columns: 1fr 200px;
        align-items: center;
    }
    .chart {
        width: 100%;
        width: 500px;
        height: 100%;
        height: 500px;
    }
    path:hover {
        stroke: rgb(255, 213, 0);
        stroke-width: 3px;
    }

    .legend ul {
        margin: 0;
        padding: 0;
    }

    .legend ul li {
        list-style: none;
        display: flex;
        align-items: center;
        margin-bottom: 5px;

    }

    .legend ul li span {
        width: 15px;
        height: 15px;
        display: block;
        margin-right: 5px;
        border-radius: 50%;
    }
</style>