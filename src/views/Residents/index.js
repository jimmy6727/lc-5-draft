import React, { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography, CircularProgress, Divider } from '@material-ui/core';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import ResidentsTable from '../../ui-component/ResidentsTable';
import { gridSpacing } from '../../store/constant';
import APIClient from '../../utils/APIClient';
import sleep from '../../utils/util'



//-----------------------|| COMMUNITIES HOME ||-----------------------//

const ResidentsHome = () => {
    const [isLoading, setLoading] = useState(null);
    const [communityCampaignsData, setCommunityCampaignsData] = useState([]);

    useEffect(() => {
        const fetchCommunities = async () => {
            setLoading(true);
            await sleep(2000);
            // APIClient.get('/rewards_campaign/list/', {params: {'account_id':'0014S000004YSNEQA4'}})
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
            console.log("Residents data:")
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
                        <Typography variant="h1_light">Residents</Typography>
                    </Grid>
                    <Grid mt={2} item xs={12} >
                        <ResidentsTable/>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    );
    
};

export default ResidentsHome;
