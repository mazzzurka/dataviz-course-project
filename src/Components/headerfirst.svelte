<script>
  import image from './vil.png'
</script>

<div class="container">
    <div class="content">
        <div class="text-content">
            <h1>Загрозливе поєднання ВІЛ та туберкульозу</h1>
            <p>Поєднання туберкульозу (ТБ) та ВІЛ-інфекції визначається як «коінфекція (ТБ/ВІЛ)». Під цим терміном мається на увазі активний легеневий або позалегеневий ТБ, який розвивається у ВІЛ-інфікованих осіб.</p>
            <div class="icon">
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.94 67.51">
                <defs>
                    <style>
                    .cls-1 {
                        fill: #5A5BF3;
                        stroke-width: 0px;
                    }
                    </style>
                </defs>
                <path class="cls-1" d="M32.46,67.51c17.8,0,32.49-15.28,32.49-33.76S50.22,0,32.43,0,0,15.28,0,33.76s14.69,33.76,32.46,33.76ZM32.46,60.79c-14.41,0-25.93-12.05-25.93-27.03S18.05,6.76,32.43,6.76s25.99,12.01,26.02,27-11.58,27.03-25.99,27.03ZM32.46,17.04c-1.6,0-2.79,1.18-2.79,2.84v15.38l.28,6.66-2.83-3.62-3.52-3.82c-.47-.52-1.13-.85-1.91-.85-1.48,0-2.57,1.14-2.57,2.64,0,.78.22,1.44.75,1.99l10.36,10.9c.72.75,1.38,1.11,2.23,1.11s1.6-.39,2.26-1.11l10.36-10.9c.5-.55.75-1.21.75-1.99,0-1.5-1.1-2.64-2.57-2.64-.78,0-1.44.29-1.91.85l-3.48,3.79-2.86,3.69.28-6.69v-15.38c0-1.66-1.19-2.84-2.83-2.84Z"/>
                </svg>
            </div> 
        </div>
        <div class="image-content">
            <img src={image} alt="vil.png"/>
        </div>
    </div>
</div>

<style>

.container {
    /*font-family: 'e-ukraine';*/
    font-family: "Montserrat", sans-serif;
    display: flex;
    width: 100%;
    height: 80vh; /* 90% від висоти екрану */
    justify-content: center;
    align-items: center;
}

.svg {
    margin-top: 120px;
    width: 32px;
    height: 32px;
}


.content {
    display: flex;
    width: 100%;
    height: 100%;
}

.text-content {
    max-width: 600px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 20px;
}

.text-content h1 {
    margin: 0 0 20px 0;
    font-size: 3em;
}

.text-content p {
    margin: 10px 0;
    font-size: 1.2em;
    font-weight: 400;
    line-height: 140%;
}

.text-content .icon {
    font-size: 2em;
}

.image-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-content img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
}
</style>
