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

const ResidentsTable = () => {
    return (
        <MainCard title="Residents go here">
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
    );
};

export default ResidentsTable;
