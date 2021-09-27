import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/core/Autocomplete';
import { CircularProgress } from '@material-ui/core';
import ResidentsService from '../../../../utils/ResidentsService';
import CommunitiesService from '../../../../utils/CommunitiesService';
import RewardsCampaignsService from '../../../../utils/RewardsCampaignsService';
import { useHotkeys } from 'react-hotkeys-hook';
import { useHistory } from 'react-router-dom';
import { InputAdornment } from '@material-ui/core';
import userGlobals from '../../../../utils/userGlobals';


// style constant
const useStyles = makeStyles((theme) => ({
    searchControl: {
        width: '600px',
        height: '100%',
        maxHeight: 'calc(100vh - 205px)',
        marginLeft: '16px',
        paddingRight: '16px',
        paddingLeft: '16px',
        '& input': {
            background: 'transparent !important',
            paddingLeft: '5px !important'
        },
        [theme.breakpoints.down('lg')]: {
            width: '500px'
        },
        [theme.breakpoints.down('md')]: {
            width: '400px',
            marginLeft: '4px',
            background: '#fff'
        }
    }
}));

function NewSearchResults() {
    const searchDefault = {name:"", value:""}
    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [searchInput, setSearchInput] = React.useState(searchDefault)
    const [residents, setResidents] = React.useState([]);
    const [rewardsCampaigns, setRewardsCampaigns] = React.useState([]);
    const [communities, setCommunities] = React.useState([]);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    const searchInputField = React.useRef(null)
    useHotkeys('command+k', () => setOpen(open => open = (!open)));

    // residents search results
    React.useEffect(() => {
        ResidentsService.forAccount(userGlobals.account_sfid)    
        .then(res => {
            return res.data.data;
        })
        .then(data => {
            var residentsTypeAnnotated = data.map((r) => {
                r.type="Residents";
                return r;
            })
            setResidents(residentsTypeAnnotated)
        })
    }, [])

    // campaigns search results
    React.useEffect(() => {
        RewardsCampaignsService.forAccount(userGlobals.account_sfid)    
        .then(res => {
            return res.data.data;
        })
        .then(data => {
            var campaignsTypeAnnotated = data.map((r) => {
                r.type="Rewards Campaigns";
                return r
            })
            setRewardsCampaigns(campaignsTypeAnnotated)
        })
    }, [])

    // communities search results
    React.useEffect(() => {
        CommunitiesService.forAccount(userGlobals.account_sfid)    
        .then(res => {
            return res.data.data;
        })
        .then(data => {
            var communitiesTypeAnnotated = data.map((r) => {
                r.type="Communities";
                return r
            })
            setCommunities(communitiesTypeAnnotated)
        })
    }, [])


    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            
            if (active) {
                var results = communities.concat(rewardsCampaigns).concat(residents)
                setOptions([...results]);
            }

        })();

        return () => {
            active = false;
        };

    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            console.log('not open')
            setOptions([]);
        }
        else{
            searchInputField.current.focus();
        }
    }, [open]);

    return (
        <Autocomplete className={classes.searchControl}
        id="asynchronous-demo"
        open={open}
        value={searchInput}
        clearOnEscape={true}
        autoComplete={true}
        autoHighlight={true}
        clearOnBlur={true}
        blurOnSelect={true}
        fullWidth={true}
        selectOnFocus={true}
        onOpen={() => {
            setOpen(true);
        }}
        onClose={(e, reason) => {
            console.log(reason)
            setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => 
            option.name === value.name
        }
        onHighlightChange={(event, option, reason) => {
            console.log(event)
            console.log(reason)
            if (option && (reason == 'keyboard' || reason == 'mouse')){
                console.log(option.name)
            }
        }}
        onChange={(event, option) => {
            console.log(event)
            if (event = 'selectOption'){
                if (option){
                    switch (option.type){
                        case 'Residents':
                            history.push(`/resident/${option.sfid}`);
                            setOpen(false);
                            break;
                        case 'Communities':
                            history.push(`/community/${option.sfid}`);
                            setOpen(false);
                            break;
                        case "Rewards Campaigns":
                            history.push(`/campaigns/${option.sfid}`);
                            setOpen(false);
                            setSearchInput(searchDefault)
                            break;
                        }
                    }
                }
            }
        }
        options={options}
        loading={loading}
        noOptionsText='No results found...'
        groupBy={(option) => option.type}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
            <TextField
            {...params}
            inputRef={searchInputField}
            label="Search (⌘K)"
            InputProps={{
                ...params.InputProps,
                endAdornment: (
                <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {/* {params.InputProps.endAdornment} */}
                </React.Fragment>
                ),
            }}
            />
        )}
        />
    );
    }


export default NewSearchResults;