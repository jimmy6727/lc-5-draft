import React, { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useParams } from "react-router-dom";

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import ResidentSortableMetrics from '../../ui-component/ResidentSortableMetrics';
import ResidentsTable from '../../ui-component/ResidentsTable';
import NotificationsView from '../../ui-component/NotificationsView';
import { gridSpacing } from '../../store/constant';
import RewardsCampaignsService from '../../utils/RewardsCampaignsService';



//-----------------------|| COMMUNITIES HOME ||-----------------------//

const SingleCampaign = () => {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(null);
    const [campaignData, setCampaignData] = useState([]);

    useEffect(() => {
        // Get campaign info
        setLoading(true);
        RewardsCampaignsService.singleById(id)
        .then(res => {
            setCampaignData(res.data.data)
            setLoading(false);
        })

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
                            <Typography variant="h1_light">{campaignData.name}</Typography>
                        </Grid>
                        <Grid mt={2} item xs={12} >
                            <NotificationsView />
                        </Grid>
                        <Grid mt={2} item xs={12} >
                            <ResidentSortableMetrics></ResidentSortableMetrics>
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

export default SingleCampaign;
