import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

// material-ui
import { Grid, Typography, CircularProgress, Divider } from '@material-ui/core';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import ResidentSortableMetrics from '../../ui-component/ResidentSortableMetrics';
import CommunitySpendingGraph from './CommunitySpendingGraph'
import ResidentsTable from '../../ui-component/ResidentsTable';
import { gridSpacing } from '../../store/constant';
import APIClient from '../../utils/APIClient';
import sleep from '../../utils/util'

// Backend
import CommunitiesService from '../../utils/CommunitiesService';
import RewardsCampaignService from '../../utils/RewardsCampaignsService';



//-----------------------|| COMMUNITIES HOME ||-----------------------//

const SingleCommunity = () => {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [communityData, setCommunityData] = useState(null);
    const [communityCampaignsData, setCommunityCampaignsData] = useState(null);

    useEffect(() => {
        
        // Get community info
        setLoading(true);
        CommunitiesService.singleById(id)
        .then(res => {
            setCommunityData(res.data.data)
        })
        .then(
            RewardsCampaignService.forCommunity(id)
            .then(res => {
               setCommunityCampaignsData(res.data.data)
               setLoading(false);
            })
        )

    }, []);

    
    return (
        
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                {isLoading ? 
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={6} lg={4}>    
                            <CircularProgress color="secondary"></CircularProgress> 
                        </Grid>
                    </Grid> : 

                    <Grid container spacing={gridSpacing}>
                        <Grid mt={2} item xs={12} >
                            <Typography variant="h1_light">{communityData.name}</Typography>
                        </Grid>
                        <Grid mt={2} item xs={12} >
                            <ResidentSortableMetrics showCommunitiesFilter={false}></ResidentSortableMetrics>
                        </Grid>
                        <Grid mt={2} item xs={12} >
                            <Typography variant="h1_light">Campaigns</Typography>
                        </Grid>
                        <Grid item xs={12} >
                        
                            <Grid container spacing={gridSpacing}>
                                {communityCampaignsData.map((campaign) => (

                                    <Grid key={campaign.sfid} item xs={12} md={6} lg={4}>
                                        <MainCard>
                                            <Grid container spacing={gridSpacing} justifyContent='left'>
                                                <Grid item mt={2} item xs={12} >
                                                    <Typography variant='h2' align='center'>{campaign.name}</Typography>
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
                                    ))
                                }
                                
                            </Grid>
                            

                        </Grid>
                    
                        <Grid mt={2} item xs={12} >
                            <Typography variant="h1_light">Community Spending</Typography>
                        </Grid>
                        <Grid mt={2} item xs={12} >
                            <CommunitySpendingGraph isLoading={false}/>
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
                }
            </Grid>
        </Grid>
    
        
    );
    
};

export default SingleCommunity;
