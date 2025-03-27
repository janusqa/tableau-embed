const viz = document.getElementById('viz-container');

viz.addEventListener('firstinteractive', async (e) => {
    console.log('Viz is ready!', e.type);
});
