import React, { useCallback, useEffect, useRef } from 'react';

// const options = {
//     hideTabs: true,
//     height: 800,
//     width: 1000,
//     onFirstInteractive: () => console.log('Dashboard ready!'),
//     onFirstVizSizeKnown: () => console.log('Dashboard has a size!'),
// };
// const url =
//     'https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard';

export default function TableauDashboard({
    url,
    options: {
        hideTabs,
        height,
        width,
        onFirstInteractive,
        onFirstVizSizeKnown,
    },
}) {
    const refTableau = useRef(null);
    const refViz = useRef(null);

    const stableOnFirstInteractive = useCallback(
        (...args) => onFirstInteractive(...args),
        [onFirstInteractive]
    );

    const stableOnFirstVizSizeKnown = useCallback(
        (...args) => onFirstVizSizeKnown(...args),
        [onFirstVizSizeKnown]
    );

    useEffect(
        function () {
            const options = {
                hideTabs,
                height,
                width,
                onFirstInteractive: stableOnFirstInteractive,
                onFirstVizSizeKnown: stableOnFirstVizSizeKnown,
            };
            const initViz = () => {
                const { tableau } = window;
                refViz.current = new tableau.Viz(
                    refTableau.current,
                    url,
                    options
                );
            };

            initViz();

            return function () {
                if (refViz.current) {
                    refViz.current.dispose();
                    refViz.current = null;
                }
            };
        },
        [
            url,
            hideTabs,
            width,
            height,
            stableOnFirstInteractive,
            stableOnFirstVizSizeKnown,
        ]
    );

    return <div ref={refTableau}></div>;
}
