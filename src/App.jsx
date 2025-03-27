import TableauDashboard from './components/TableauDashboard';

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
