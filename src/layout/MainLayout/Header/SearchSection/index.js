import React, { useEffect, useState, useRef } from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Box, ButtonBase, Card, CardContent, Grid, InputAdornment, OutlinedInput, Popper } from '@material-ui/core';

// third-party
import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state';
import { useHotkeys } from 'react-hotkeys-hook';

// project imports
import Transitions from '../../../../ui-component/extended/Transitions';
import CommunitiesService from '../../../../utils/CommunitiesService';
import RewardsCampaignsService from '../../../../utils/RewardsCampaignsService';
import ResidentsService from '../../../../utils/ResidentsService';

// assets
import { IconAdjustmentsHorizontal, IconSearch, IconX } from '@tabler/icons';
import SearchResults from '../../../../views/search';
import userGlobals from '../../../../utils/userGlobals';

// style constant
const useStyles = makeStyles((theme) => ({
    searchControl: {
        width: '450px',
        marginLeft: '16px',
        paddingRight: '16px',
        paddingLeft: '16px',
        '& input': {
            background: 'transparent !important',
            paddingLeft: '5px !important'
        },
        [theme.breakpoints.down('lg')]: {
            width: '400px'
        },
        [theme.breakpoints.down('md')]: {
            width: '300%',
            marginLeft: '4px',
            background: '#fff'
        }
    },
    startAdornment: {
        fontSize: '1rem',
        color: theme.palette.grey[500]
    },
    headerAvatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.dark,
        '&:hover': {
            background: theme.palette.secondary.dark,
            color: theme.palette.secondary.light
        }
    },
    closeAvatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        background: theme.palette.orange.light,
        color: theme.palette.orange.dark,
        '&:hover': {
            background: theme.palette.orange.dark,
            color: theme.palette.orange.light
        }
    },
    popperContainer: {
        zIndex: 1100,
        width: '99%',
        top: '-55px !important',
        padding: '12px 12px',
        [theme.breakpoints.down('sm')]: {
            padding: '0 10px'
        }
    },
    cardContent: {
        padding: '16px !important',
    },
    card: {
        background: '#fff',
        margin: '16px',
        [theme.breakpoints.down('sm')]: {
            border: 0,
            boxShadow: 'none'
        }
    }
}));

//-----------------------|| SEARCH INPUT ||-----------------------//

const SearchSection = () => {
    const classes = useStyles();
    const [searchInput, setSearchInput] = useState('');
    const [residents, setResidents] = useState([]);
    const [rewardsCampaigns, setrewardsCampaigns] = useState([]);
    const [communities, setCommunities] = useState([]);
    const [rewardsCampaignsSearchResults, setRewardsCampaignsResults] = useState([]);
    const [communitySearchResults, setCommunitySearchResults] = useState([]);
    const [residentsSearchResults, setResidentsSearchResults] = useState([]);
    const [searching, setSearching] = useState('hidden');

    const searchInputField = useRef(null)

    const toggleSearch = () => {
        console.log('called')
        if (searching == 'hidden') {
            console.log('showing')
            setSearching('visible')
            searchInputField.current.focus()
        } else {
            console.log('hiding')
            setSearchInput("")
            setSearching('hidden')
        }
    }
    
    useHotkeys('command+k', () => setSearching(searching => searching = (searching == 'hidden' ? 'visible':'hidden') ));
    useHotkeys('esc', () => console.log('esc'));

    useEffect(() => {
        ResidentsService.forAccount(userGlobals.account_sfid)    
        .then(res => {
            return res.data.data;
        })
        .then(data => {
            setResidents(data)
        })
    }, [])

    useEffect(() => {
        CommunitiesService.forAccount(userGlobals.account_sfid)    
        .then(res => {
            return res.data.data;
        })
        .then(data => {
            setCommunities(data)
        })
    }, [])

    useEffect(() => {
        RewardsCampaignsService.forAccount(userGlobals.account_sfid)    
        .then(res => {
            return res.data.data;
        })
        .then(data => {
            setrewardsCampaigns(data)
        })
    }, [])

    useEffect(() => {
        setCommunitySearchResults(communities.filter(ele => ele.name.toLowerCase().match("^"+searchInput)));
        setRewardsCampaignsResults(rewardsCampaigns.filter(ele => ele.name.toLowerCase().match("^"+searchInput)));
        setResidentsSearchResults(residents.filter(ele => ele.firstname.toLowerCase().match("^"+searchInput) || ele.lastname.toLowerCase().match("^"+searchInput)));
    }, [searchInput])

    useEffect(() => {
        if (searchInput.length > 0) {
            setSearching('visible')
        } else {
            setSearching('hidden')
        }
    }, [searchInput])

    useEffect(() => {
        if (searching == 'visible'){
            searchInputField.current.focus()
        }
    })

    return (
        <React.Fragment>

            <Box component="div" sx={{ visibility: `${searching}` }}>
                <SearchResults  residents={residentsSearchResults} communities={communitySearchResults} rewardsCampaigns={rewardsCampaignsSearchResults}/>
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <PopupState variant="popper" popupId="demo-popup-popper">
                    {(popupState) => (
                        <React.Fragment>
                            <Box
                                sx={{
                                    ml: 2
                                }}
                            >
                                <ButtonBase sx={{ borderRadius: '3px' }}>
                                    <Avatar variant="rounded" className={classes.headerAvatar} {...bindToggle(popupState)}>
                                        <IconSearch stroke={1.5} size="1.2rem" />
                                    </Avatar>
                                </ButtonBase>
                            </Box>
                            <Popper {...bindPopper(popupState)} transition className={classes.popperContainer}>
                                {({ TransitionProps }) => (
                                    <Transitions type="zoom" {...TransitionProps} sx={{ transformOrigin: 'center left' }}>
                                        <Card className={classes.card}>
                                            <CardContent className={classes.cardContent}>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item xs>
                                                        <OutlinedInput
                                                            className={classes.searchControl}
                                                            id="input-search-header"
                                                            value={searchInput}
                                                            onChange={(e) => setSearchInput(e.target.value)}
                                                            placeholder="Search"
                                                            startAdornment={
                                                                <InputAdornment position="start">
                                                                    <IconSearch
                                                                        stroke={1.5}
                                                                        size="1rem"
                                                                        className={classes.startAdornment}
                                                                    />
                                                                </InputAdornment>
                                                            }
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <ButtonBase sx={{ borderRadius: '3px' }}>
                                                                        <Avatar variant="rounded" className={classes.headerAvatar}>
                                                                            <IconAdjustmentsHorizontal stroke={1.5} size="1.3rem" />
                                                                        </Avatar>
                                                                    </ButtonBase>
                                                                    <Box
                                                                        sx={{
                                                                            ml: 2
                                                                        }}
                                                                    >
                                                                        <ButtonBase sx={{ borderRadius: '3px' }}>
                                                                            <Avatar
                                                                                variant="rounded"
                                                                                className={classes.closeAvatar}
                                                                                {...bindToggle(popupState)}
                                                                            >
                                                                                <IconX stroke={1.5} size="1.3rem" />
                                                                            </Avatar>
                                                                        </ButtonBase>
                                                                    </Box>
                                                                </InputAdornment>
                                                            }
                                                            aria-describedby="search-helper-text"
                                                            inputProps={{
                                                                'aria-label': 'weight'
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Transitions>
                                )}
                            </Popper>
                        </React.Fragment>
                    )}
                </PopupState>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <OutlinedInput
                    className={classes.searchControl}
                    inputRef={searchInputField}
                    id="input-search-header"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search (???K)"
                    startAdornment={
                        <InputAdornment position="start">
                            <IconSearch stroke={1.5} size="1rem" className={classes.startAdornment} />
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <ButtonBase sx={{ borderRadius: '3px' }}>
                                <Avatar variant="rounded" className={classes.headerAvatar}>
                                    <IconAdjustmentsHorizontal stroke={1.5} size="1.3rem" />
                                </Avatar>
                            </ButtonBase>
                        </InputAdornment>
                    }
                    aria-describedby="search-helper-text"
                    inputProps={{
                        'aria-label': 'weight'
                    }}
                />
            </Box>
        </React.Fragment>
    );
};

export default SearchSection;