import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Grid, MenuItem, TextField, Typography, useTheme } from '@material-ui/core';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import LineAreaFillChart from '../views/dashboard/Overview/LineAreaFillChart';
import SkeletonTotalGrowthBarChart from './cards/Skeleton/TotalGrowthBarChart';
import MainCard from './cards/MainCard';
import { gridSpacing } from '../store/constant';
import CommunitiesService from '../utils/CommunitiesService';
import sleep from '../utils/util'

//assets
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';

// chart data
import chartData from '../views/dashboard/Overview/chart-data/total-growth-bar-chart';

const selectTimePeriodChoices = [
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    },
    {
        value: 'alltime',
        label: 'All Time'
    }
];



// style constant
const useStyles = makeStyles((theme) => ({
    cardAction: {
        padding: '10px',
        paddingTop: 0,
        justifyContent: 'center'
    },
    primaryLight: {
        color: theme.palette.primary[200],
        cursor: 'pointer'
    },
    divider: {
        marginTop: '12px',
        marginBottom: '12px'
    },
    avatarSuccess: {
        width: '16px',
        height: '16px',
        borderRadius: '5px',
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.dark,
        marginLeft: '15px'
    },
    successDark: {
        color: theme.palette.success.dark
    },
    avatarError: {
        width: '16px',
        height: '16px',
        borderRadius: '5px',
        backgroundColor: theme.palette.orange.light,
        color: theme.palette.orange.dark,
        marginLeft: '15px'
    },
    errorDark: {
        color: theme.palette.orange.dark
    }
}));



//-----------------------|| Sortable metrics for portfolio, community, campaign level ||-----------------------//

const ResidentSortableMetrics = ({ isLoading, showCommunitiesFilter }) => {
    const communitySelectInitialVal = [
        {
            value: 'default',
            label: 'All Communities'
        }
    ];

    const [value, setValue] = React.useState('month');
    const [communityValue, setCommunityValue] = React.useState('default');
    const [communitySelect, setCommunitySelection] = React.useState(communitySelectInitialVal);

    const theme = useTheme();
    const classes = useStyles();

    const primary = theme.palette.text.primary;
    const grey200 = theme.palette.grey[200];

    const primary200 = theme.palette.primary[200];
    const primaryDark = theme.palette.primary.dark;
    const secondaryMain = theme.palette.secondary.main;
    const secondaryLight = theme.palette.secondary.light;
    const grey500 = theme.palette.grey[500];

    React.useEffect(() => {
        const newChartData = {
            ...chartData.options,
            colors: [primary200, primaryDark, secondaryMain, secondaryLight],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: {
                borderColor: grey200
            },
            tooltip: {
                theme: 'light'
            },
            legend: {
                labels: {
                    colors: grey500
                }
            }
        };

        
        CommunitiesService.forAccount('0014S000001xlxoQAA')
        .then(res => {
            var new_choices = communitySelectInitialVal;
            {res.data.data.map((community) => {
                console.log(community.address__c)
                new_choices.push({
                    value: community.sfid,
                    label: community.name
                })
            })}
            
            setCommunitySelection(new_choices)
            return new_choices;
        })

        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
        }
    }, [primary200, primaryDark, secondaryMain, secondaryLight, primary, grey200, isLoading, grey500]);

    return (
        <React.Fragment>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        {showCommunitiesFilter ?
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <TextField
                                        id="select-rental-community"
                                        select
                                        value={communityValue}
                                        onChange={(e) => setCommunityValue(e.target.value)}
                                    >
                                        {communitySelect.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        :
                        null
                        }
                        <Grid item>

                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <TextField
                                        id="select-time-period"
                                        select
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    >
                                        {selectTimePeriodChoices.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                               
                               
                            </Grid>
                        </Grid>
                        <Grid container spacing={gridSpacing} p={3} paddingRight={0}>
                            <Grid item xs={12}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item lg={4} md={6} xs={12} sx={{ pt: '16px !important' }}>
                                        <LineAreaFillChart />
                                    </Grid>
                                    <Grid item lg={4} md={6} xs={12} sx={{ pt: '16px !important' }}>
                                        <LineAreaFillChart />
                                    </Grid>
                                    <Grid item lg={4} md={6} xs={12} sx={{ pt: '16px !important' }}>
                                        <LineAreaFillChart />
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={gridSpacing}>
                            
                                    <Grid item lg={4} md={6} xs={12} sx={{ pt: '16px !important' }}>
                                        <LineAreaFillChart />
                                    </Grid>

                                    <Grid item lg={4} md={6} xs={12} sx={{ pt: '16px !important' }}>
                                        <LineAreaFillChart />
                                    </Grid>
                                    <Grid item lg={4} md={6} xs={12} sx={{ pt: '16px !important' }}>
                                        <LineAreaFillChart />
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </React.Fragment>
    );
};

ResidentSortableMetrics.propTypes = {
    isLoading: PropTypes.bool
};

export default ResidentSortableMetrics;
