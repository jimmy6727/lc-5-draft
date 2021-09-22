import React, { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography, CircularProgress, Divider } from '@material-ui/core';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import ResidentSortableMetrics from '../../ui-component/ResidentSortableMetrics';
import ResidentsTable from '../../ui-component/ResidentsTable';
import NotificationsView from '../../ui-component/NotificationsView';
import { gridSpacing } from '../../store/constant';
import APIClient from '../../utils/APIClient';
import sleep from '../../utils/util'



//-----------------------|| COMMUNITIES HOME ||-----------------------//

const SingleCommunity = () => {
    const [isLoading, setLoading] = useState(null);
    const [communityCampaignsData, setCommunityCampaignsData] = useState([]);

    useEffect(() => {
        const fetchCommunities = async () => {
            setLoading(true);
            await sleep(2000);
            // APIClient.get('/rewards_campaign/list/', {params: {'account_id':'0014S000001xlxoQAA'}})
            // .then(res => {
            //     console.log(res.data.data);
            //     return res.data.data;
            // })
            // .then(data => {
            //     setCommunityCampaignsData({data})
            // })
            // if (communityData.length !== 0){
            //     {communityData.map((community) => {
            //         console.log(community.address__c)
            //     })}
            // }
            console.log("Community campaigns data:")
            // console.log(communityData)
            setLoading(false);
        }
        
        fetchCommunities();
    }, []);

    
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid mt={2} item xs={12} >
                        <Typography variant="h1_light">Campaign Name. Goal here.</Typography>
                    </Grid>
                    <Grid mt={2} item xs={12} >
                        <NotificationsView />
                    </Grid>
                    <Grid mt={2} item xs={12} >
                        <ResidentSortableMetrics></ResidentSortableMetrics>
                    </Grid>
                    <Grid mt={2} item xs={12} >
                        <Typography variant="h1_light">Campaigns</Typography>
                    </Grid>
                    <Grid item xs={12} >
                    {isLoading ? 
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6} lg={4}>    
                                <CircularProgress color="secondary"></CircularProgress> 
                                <Typography>Not loaded yet</Typography>
                            </Grid>
                        </Grid>
                         : 
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6} lg={4}>
                                <MainCard>
                                    <Grid container spacing={gridSpacing} justifyContent='left'>
                                        <Grid item mt={2} item xs={12} >
                                            <Typography variant='h2' align='center'>Campaigns</Typography>
                                        </Grid>
                                    
                                        <Grid item xs={5} >
                                            <Typography variant='subtitle1'>
                                                4 Campaigns
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Divider orientation="vertical"/>
                                        </Grid>
                                        <Grid item xs={5} >
                                            <Typography variant='subtitle1'>
                                                45 residents
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    
                                </MainCard>
                            </Grid>
                            {/* {communityData.map((item) => (

                                <Grid key={item.sfid} item xs={12} md={6} lg={4}>
                                    <MainCard>
                                        <Grid container spacing={gridSpacing} justifyContent='left'>
                                            <Grid item mt={2} item xs={12} >
                                                <Typography variant='h2' align='center'>{item.address__c}</Typography>
                                            </Grid>
                                        
                                            <Grid item xs={5} >
                                                <Typography variant='subtitle1'>
                                                    4 Campaigns
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Divider orientation="vertical"/>
                                            </Grid>
                                            <Grid item xs={5} >
                                                <Typography variant='subtitle1'>
                                                    45 residents
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        
                                    </MainCard>
                                </Grid>
                            ))} */}
                        </Grid>
                        }               

                        
                        

                    </Grid>

                    <Grid mt={2} item xs={12} >
                        <Typography variant="h1_light">Residents</Typography>
                    </Grid>
                    <Grid mt={2} item xs={12} >
                        <ResidentsTable/>
                    </Grid>

                    <Grid mt={2} item xs={12} >
                        <Typography variant="h1_light">Team</Typography>
                    </Grid>
                    <Grid mt={2} item xs={12} >
                        <ResidentsTable/>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    );
    
};

export default SingleCommunity;
