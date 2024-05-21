<script>
    export let placeholder = ''
    export let dropdownItems = []
    export let selectedItem = ''
    let selectOpen = false
    const selectHandler = () => {
      selectOpen = !selectOpen;
      console.log("Dropdown Open:", selectOpen); // Log the status of selectOpen
    }
    const handleClick = (e) => (selectedItem = e)
  </script>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="select" class:open={selectOpen} on:click={selectHandler} on:keydown={selectHandler}>
    <span>{placeholder}</span>
    <ul class="dropdown">
      {#each dropdownItems as d}
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li on:click={() => handleClick(d)} on:keydown={() => handleClick(d)}>
          {d}
        </li>
      {/each}
    </ul>
  </div>
  <style>
    .select {
      padding: 10px 15px;
      min-width: 250px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      position: relative;
      cursor: pointer;
      font-family: "Roboto", sans-serif ;
    }
    .select::after {
      position: absolute;
      right: 10px;
      top: 18px;
      color: #999;
      margin-top: 1px;
      border-color: #999 transparent transparent;
      border-style: solid;
      border-width: 5px 5px 0;
      content: '';
      transition: 200ms ease-out;
    }
    .select.open::after {
      transform: rotate(-180deg);
    }
    .dropdown {
      position: absolute;
      top: calc(100% + 2px);
      left: -1px;
      display: none;
      min-width: 249px;
      max-height: 250px;
      width: 100%;
      overflow: auto;
      background: #fff;
      border-radius: 4px;
      margin: 0;
      padding: 0 0 10px 0;
      /*border: 1px solid #ccc;*/
      list-style: none;
      z-index: 9999;
      box-shadow: -2px 9px 28px -7px rgba(0,0,0,0.45);
      -webkit-box-shadow: -2px 9px 28px -7px rgba(0,0,0,0.45);
      -moz-box-shadow: -2px 9px 28px -7px rgba(0,0,0,0.45);
    }
    .select.open .dropdown {
      display: block;
    }
    .dropdown li {
      font-family: var(--font-sans-serif);
      padding: 5px 15px;
      cursor: pointer;
      font-size: 15px;
    }
    .dropdown li:hover {
      background-color: #e6eae9;
    }
    .dropdown li:active {
      background-color: #e6eae9 !important;
    }
  </style>