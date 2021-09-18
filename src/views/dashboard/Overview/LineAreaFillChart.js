import React from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { shadows } from '@material-ui/system';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import chartData from './chart-data/bajaj-area-chart';

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.secondary.light
    },
    content: {
        padding: '0px !important'
    },
    contentContainer: {
        padding: '16px',
        paddingBottom: 0,
        color: '#fff'
    },
    fontStyle: {
        fontFamily: `'Roboto', sans-serif`,
        fontWeight: 400,
        fontSize: "18px"
    }
}));

//===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||===========================//

const LineAreaFillChart = () => {
    const classes = useStyles();
    const theme = useTheme();

    const orangeDark = theme.palette.secondary[800];

    React.useEffect(() => {
        const newSupportChart = {
            ...chartData.options,
            colors: [orangeDark],
            tooltip: {
                theme: 'light'
            }
        };
        ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
    }, [orangeDark]);

    return (
        
        <Card sx={{ boxShadow: 2 }} className={classes.card}>
            
            <CardContent className={classes.content}>
                <Grid container className={classes.contentContainer}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.grey[500] }}>
                                    Chart Title
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between"> 
                            <Grid item>
                                <Typography variant="h2_light" sx={{ color: theme.palette.grey[800] }}>
                                    $1839.00
                                </Typography>
                            </Grid>       
                            <Grid item alignItems="right" justifyContent="end">

                                <Grid container alignItems="end" justifyContent="end">
                                    <ArrowUpwardIcon sx={{ color: theme.palette.success.main}}></ArrowUpwardIcon>
                                    <Typography variant="h2" sx={{ color: theme.palette.success[200] }}>
                                        5%
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Chart {...chartData} />
            </CardContent>
        </Card>
    );
};

export default LineAreaFillChart;
