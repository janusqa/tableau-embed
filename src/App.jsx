import TableauDashboard from './components/TableauDashboard';

// url="https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard" 800 x 1000
// url="https://clientreporting.theinformationlab.co.uk/t/Copperfield-Dev/views/tourism/Tourism" 820 x 1200
// url="https://10ax.online.tableau.com/t/devandredev978293/views/embed-dashboard/AutoSize" 1000 x 1200
// url="https://10ax.online.tableau.com/t/devandredev978293/views/embed-dashboard/FixedSize" 1000 x 1200

function App() {
    return (
        <>
            <h1>Embedded Analytics with Tableau (React)</h1>
            <TableauDashboard
                url="https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard"
                options={{
                    hideTabs: true,
                    height: 800,
                    width: 1000,
                    onFirstInteractive: () => console.log('Dashboard ready!'),
                    onFirstVizSizeKnown: () =>
                        console.log('Dashboard has a size!'),
                }}
            />
        </>
    );
}

export default App;
