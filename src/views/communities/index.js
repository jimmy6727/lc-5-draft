import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";

// material-ui
import { Grid, Typography, CircularProgress, Divider } from '@material-ui/core';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import { gridSpacing } from '../../store/constant';
import userGlobals from '../../utils/userGlobals';
import CommunitiesService from '../../utils/CommunitiesService';



//-----------------------|| COMMUNITIES HOME ||-----------------------//

const CommunitiesHome = () => {
    const history = useHistory();
    const [isLoading, setLoading] = useState(null);
    const [communityData, setCommunityData] = useState([]);

    useEffect(() => {
        // Get communities for account
        setLoading(true);
        CommunitiesService.forAccount(userGlobals.account_sfid)
        .then(res => {
            setCommunityData(res.data.data)
            setLoading(false);
        })
        
    }, []);

    
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid mt={2} item xs={12} >
                        <Typography variant="h1_light">Communities</Typography>
                    </Grid>
                    <Grid item xs={12} >
                    {isLoading ? 
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6} lg={4}>    
                                <CircularProgress color="secondary"></CircularProgress> 
                                <Typography>Not loaded yet</Typography>
                            </Grid>
                        </Grid> : 
                        <Grid container spacing={gridSpacing}>
                            {communityData.map((item) => (

                                <Grid key={item.sfid} item xs={12} md={6} lg={4} onClick={() => history.push(`/community/${item.sfid}`)}>
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
                            ))}
                        </Grid>
                    }

                        
                        

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
    
};

export default CommunitiesHome;
