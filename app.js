const btnHide = document.getElementById('btn-hide');
const btnShow = document.getElementById('btn-show');
const btnPdf = document.getElementById('btn-pdf');
const btnImg = document.getElementById('btn-img');
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

document.addEventListener('DOMContentLoaded', initViz);
btnHide.addEventListener('click', () => viz.hide());
btnShow.addEventListener('click', () => viz.show());
btnPdf.addEventListener('click', () => viz.showExportPDFDialog());
btnImg.addEventListener('click', () => viz.showExportImageDialog());
