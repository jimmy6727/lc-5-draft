import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Box, ButtonBase, Typography, Grid, Divider } from '@material-ui/core';

// project imports
import LogoSection from '../LogoSection';
import NewSearchSection from './NewSearch';
import { gridSpacing } from '../../../store/constant';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import userGlobals from '../../../utils/userGlobals';

// assets
import { IconMenu2 } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    headerAvatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        transition: 'all .2s ease-in-out',
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.dark,
        '&:hover': {
            background: theme.palette.secondary.dark,
            color: theme.palette.secondary.light
        }
    },
    boxContainer: {
        width: '228px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: 'auto'
        }
    }
}));

//-----------------------|| MAIN NAVBAR / HEADER ||-----------------------//

const Header = ({ handleLeftDrawerToggle }) => {
    const classes = useStyles();
    const loyaltyCloudAccountName = userGlobals.account_name
    return (
        <React.Fragment>
            {/* logo & toggler button */}
            <div className={classes.boxContainer}>
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <Grid container spacing={gridSpacing} justifyContent={'left'}>
                        <Grid item>    
                            <LogoSection />
                        </Grid>
                        <Grid item>
                            <Divider orientation="vertical"/>
                        </Grid>
                        <Grid item>
                            <Typography variant='h4' paddingTop={'12px'}>{loyaltyCloudAccountName}</Typography>
                        </Grid>
                    </Grid>
                </Box>
                {/* <ButtonBase sx={{ borderRadius: '3px', overflow: 'hidden' }}>
                    <Avatar variant="rounded" className={classes.headerAvatar} onClick={handleLeftDrawerToggle} color="inherit">
                        <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                </ButtonBase> */}
            </div>

            {/* header search */}
            {/* <SearchSection theme="light" />
            <div className={classes.grow} />
            <div className={classes.grow} /> */}
            <NewSearchSection></NewSearchSection>
            

            {/* notification & profile */}
            {/* <NotificationSection />
            <ProfileSection /> */}
        </React.Fragment>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
