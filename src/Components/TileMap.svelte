<script>
    import { gridData } from './grid';
    import csv  from './datatile.csv';
	import { scaleLinear, selectAll } from 'd3';

    let width = 1200

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

<div class="main" bind:clientWidth={width}>
    <h1>Порівняльна статистика хворих на туберкульоз
    01.01.23-01.01.24</h1>
    <p> Як і з ВІЛ/СНІД помітна тенденція зростання інфікованих туберкульозом, які щорічно збільшуються майже на 10 відсотків і в середньому по країні становить майже 70 випадків на 100 тисяч населення, що в 10-12 разів перевищує показники розвинених країн.</p>

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
            <rect width={cellSize} height={cellSize} fill='#C1C1FF' stroke='#FFF' stroke-width=5px />
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
            y2={scaleY( parseFloat(block['2023percent']) )} stroke="#D7E82A" stroke-width='3'></line>

            <circle cx={10} cy={scaleY(parseFloat(block['2022percent']))} r=3 fill="#fff"></circle>
            <circle cx={cellSize - 10} cy={scaleY( parseFloat(block['2023percent']) )} r=3 fill="#5A5BF3"></circle>

            <g class="label">

                <text fill="#5E5E5E" x={10} y={scaleY(parseFloat(block['2022percent'])) - 10} font-size='12' >
                    {block['2022percent']} %
                </text>

                <text fill="#5E5E5E" x={cellSize - 10} y={scaleY( parseFloat(block['2023percent']) ) - 10 } text-anchor="end" font-size='12'>
                    {block['2023percent']} % 
                </text>

            </g>

            {/if}
        </g>
        {/each}
    </svg>

    

</div>

<style>

    h1 {
        font-size: 40px;
        width: 550px;
        line-height: 140%;
        margin-bottom: 40px;
    }
    
    p {
        max-width: 650px;
        margin-bottom: 80px;
    }

    .main {
        /*margin-left: 150px;*/
        /*margin-bottom: 180px;*/
        width: 100%;
    }

    .label {
        display: none;
    }

</style>