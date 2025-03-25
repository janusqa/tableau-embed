const containerDiv = document.getElementById('viz-container');
const url =
    'https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard';
const options = {
    hideTabs: true,
    height: 800,
    width: 1000,
    onFirstInteractive: () => console.log('Dashboard ready!'),
    onFirstVizSizeKnown: () => console.log('Dashboard has a size!'),
};
let viz;

function initViz() {
    viz = new tableau.Viz(containerDiv, url, options);
}

function getRangeValues() {
    const minValue = document.getElementById('min-value').value;
    const maxValue = document.getElementById('max-value').value;

    const workbook = viz.getWorkbook();

    // get the active sheet in the window - this is the dashboard
    const activeSheet = workbook.getActiveSheet();
    const sheets = activeSheet.getWorksheets();
    const chart = sheets[1];

    chart.applyRangeFilterAsync('Sales', { min: minValue, max: maxValue }).then(
        () => console.log('Filter applied!'),
        (error) => console.error(`Failed to apply filter: ${error}`)
    );
}

document.addEventListener('DOMContentLoaded', initViz);
document.getElementById('btn-hide').addEventListener('click', () => viz.hide());
document.getElementById('btn-show').addEventListener('click', () => viz.show());
document
    .getElementById('btn-pdf')
    .addEventListener('click', () => viz.showExportPDFDialog());
document
    .getElementById('btn-img')
    .addEventListener('click', () => viz.showExportImageDialog());
document.getElementById('btn-filter').addEventListener('click', getRangeValues);
