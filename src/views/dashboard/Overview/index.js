import React, { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@material-ui/core';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import ResidentSortableMetrics from '../../../ui-component/ResidentSortableMetrics';
import { gridSpacing } from './../../../store/constant';

//-----------------------|| DEFAULT DASHBOARD ||-----------------------//

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid mt={2} item xs={12} >
                        <Typography variant="h1_light">Overview</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <ResidentSortableMetrics isLoading={isLoading} showCommunitiesFilter={true}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
