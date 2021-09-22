import React from 'react';
// material-ui
import { Grid, Link } from '@material-ui/core';
import MuiTypography from '@material-ui/core/Typography';

// project imports
import SubCard from './cards/SubCard';
import MainCard from './cards/MainCard';
import SecondaryAction from './cards/CardSecondaryAction';
import { gridSpacing } from '../store/constant';

//==============================|| TYPOGRAPHY ||==============================//

const NotificationsView = () => {
    return (
        <MainCard title="Notifications">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6} md={3}>
                    <SubCard title="Notification1">
                        <Grid container direction="column" spacing={1}>
                            
                            <Grid item>
                                <MuiTypography variant="h6" gutterBottom>
                                    Notification description
                                </MuiTypography>
                            </Grid>
                        </Grid>
                    </SubCard>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <SubCard title="Notification2">
                        <Grid container direction="column" spacing={1}>
                            
                            <Grid item>
                                <MuiTypography variant="h6" gutterBottom>
                                    Notification description
                                </MuiTypography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
           
            </Grid>
        </MainCard>
    );
};

export default NotificationsView;
