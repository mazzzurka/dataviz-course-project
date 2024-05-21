<script>
    import { gridData } from './grid';
    import csv  from './datatile.csv';
	import { scaleLinear, selectAll } from 'd3';

    let width = 1000

    $: cellSize = width / 8

    $: height = cellSize * 5

    $: mapData = gridData.map(row =>{
        let obl = row.uaName.split(' ')[0]
        let oblData = csv.filter(el => el.oblast.trim() == obl)
        return {
            ...row,
            ...oblData[0]
        }
    })

    $: scaleY = scaleLinear()
        .domain([0, 100])
        .range([cellSize, 0])

    const mouseOver = (el) => {
        selectAll(`.${el.key} .label`).style('display', 'block')
        console.log(el)
    }

    const mouseOut = () => {
        selectAll('.label').style('display', 'none')
    }

    
</script>

<div class="main">
    <h1>map</h1>

    <svg {width} {height}>
        {#each mapData as block}
        <!-- svelte-ignore missing-declaration -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <g class={block.key}
            transform={`translate(${block.x * cellSize}, ${block.y * cellSize})`}
            on:mousemove={mouseOver(block)}
            on:mouseout={mouseOut}
        >
            <rect width={cellSize} height={cellSize} fill='lightGray' stroke='#fff' stroke-width=5px />
            {#if block.key != 'KI' && block.key != 'OD'}
                <text x={5} y={20} fill='#fff' >{block.key} </text>
            {:else}
                <text x={cellSize - 10} y={cellSize - 10} fill='#fff' text-anchor="end">{block.key}</text>
            {/if}

            {#if block.key != 'CM' && block.key != 'LH'}

            <line 
            x1={10} 
            y1={scaleY(parseFloat(block['2022percent']))} 
            x2={cellSize - 10} 
            y2={scaleY( parseFloat(block['2023percent']) )} stroke="White" stroke-width='3'></line>

            <circle cx={10} cy={scaleY(parseFloat(block['2022percent']))} r=3 fill="gray"></circle>
            <circle cx={cellSize - 10} cy={scaleY( parseFloat(block['2023percent']) )} r=3 fill="gray"></circle>

            <g class="label">

                <text x={10} y={scaleY(parseFloat(block['2022percent'])) - 10} font-size='12' >
                    {block['2022percent']} %
                </text>

                <text x={cellSize - 10} y={scaleY( parseFloat(block['2023percent']) ) - 10 } text-anchor="end" font-size='12'>
                    {block['2023percent']} % 
                </text>

            </g>

            {/if}
        </g>
        {/each}
    </svg>


</div>

<style>
    .label {
        display: none;
    }

</style>