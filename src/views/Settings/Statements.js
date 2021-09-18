import React, { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography, CircularProgress, Divider } from '@material-ui/core';
import MuiTypography from '@material-ui/core/Typography';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import SubCard from '../../ui-component/cards/SubCard';
import ResidentsTable from '../../ui-component/ResidentsTable';
import { gridSpacing } from '../../store/constant';
import APIClient from '../../utils/APIClient';
import sleep from '../../utils/util'



//-----------------------|| COMMUNITIES HOME ||-----------------------//

const SettingsStatements = () => {
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
            console.log("Team data:")
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
                        <Typography variant="h1_light">Account Statements</Typography>
                    </Grid>
                    <Grid mt={2} item xs={12} >
                        <ResidentsTable/>
                    </Grid>
                    <Grid mt={2} item xs={12} >
                        <Typography variant="h1_light">Rental Community Statements</Typography>
                    </Grid>
                    <Grid mt={2} item xs={12} >
                        <MainCard title="Rental Community Statements">
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12} sm={6}>
                                    <SubCard title="Heading">
                                        <Grid container direction="column" spacing={1}>
                                            <Grid item>
                                                <MuiTypography variant="h1" gutterBottom>
                                                    h1. Heading
                                                </MuiTypography>
                                            </Grid>
                                            <Grid item>
                                                <MuiTypography variant="h2" gutterBottom>
                                                    h2. Heading
                                                </MuiTypography>
                                            </Grid>
                                            <Grid item>
                                                <MuiTypography variant="h3" gutterBottom>
                                                    h3. Heading
                                                </MuiTypography>
                                            </Grid>
                                            <Grid item>
                                                <MuiTypography variant="h4" gutterBottom>
                                                    h4. Heading
                                                </MuiTypography>
                                            </Grid>
                                            <Grid item>
                                                <MuiTypography variant="h5" gutterBottom>
                                                    h5. Heading
                                                </MuiTypography>
                                            </Grid>
                                            <Grid item>
                                                <MuiTypography variant="h6" gutterBottom>
                                                    h6. Heading
                                                </MuiTypography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <SubCard title="Sub title">
                                        <Grid container direction="column" spacing={1}>
                                            <Grid item>
                                                <MuiTypography variant="subtitle1" gutterBottom>
                                                    subtitle1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
                                                </MuiTypography>
                                            </Grid>
                                            <Grid item>
                                                <MuiTypography variant="subtitle2" gutterBottom>
                                                    subtitle2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
                                                </MuiTypography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </Grid>
                        
                            </Grid>
                        </MainCard>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    );
    
};

export default SettingsStatements;
