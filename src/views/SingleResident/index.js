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
import ResidentsService from '../../utils/ResidentsService';



//-----------------------|| COMMUNITIES HOME ||-----------------------//

const SingleResident = () => {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(null);
    const [residentData, setResidentData] = useState([]);

    useEffect(() => {
        // Get campaign info
        setLoading(true);
        ResidentsService.singleById(id)
        .then(res => {
            setResidentData(res.data.data)
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
                            <Typography variant="h1_light">{residentData.name}</Typography>
                        </Grid>
                        <Grid mt={2} item xs={12} >
                            <NotificationsView />
                        </Grid>
                       
                        <Grid mt={2} item xs={12} >
                            <Typography variant="h1_light">Campaigns</Typography>
                        </Grid>
                        <Grid mt={2} item xs={12} >
                            <NotificationsView/>
                        </Grid>

                        <Grid mt={2} item xs={12} >
                            <Typography variant="h1_light">Reward Schedule</Typography>
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

export default SingleResident;
