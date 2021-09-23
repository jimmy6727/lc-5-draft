import { makeStyles } from '@material-ui/styles';
import { React } from 'react';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    dropdownResults: {
        position: 'absolute',
        left: '20%',
        top: '80%',
        width: '400px',
        zIndex: '5',
        padding: '20px',
        backgroundColor: 'white',
        height: 'fit-content',
        maxHeight: 'calc(100vh - 60px)',
        overflowX: 'hidden'
    },
    cardResult: {
        border: '1px solid rgba(131, 131, 131, 0.27)',
        boxSizing: 'border-box',
        borderRadius: '3px',
        padding: '8px',
        marginBottom: '4px'
    },
    blockCards: {

    }
}))

const SearchResults = (props) => {
    const history = useHistory();
    const classes = useStyles();
    const { residents, communities, rewardsCampaigns } = props;
    const resResults = residents.map(resident => {
        return (
                
            <Link to={"/resident/"+resident.sfid}>
                <div key={resident.sfid} className={classes.cardResult}>
                    {resident.firstname} {resident.lastname}
                </div>
            </Link>

        )
    });

    const comResults = communities.map(community => {
        return (
            <div onClick={() => history.push(`/community/${community.sfid}`)} key={community.sfid} className={classes.cardResult}>
                {community.name}
            </div>
        )
    })

    const rewardsCampaignResults = rewardsCampaigns.map(campaign => {
        return (
            <Link to={"/rewards_campaigns/"+campaign.sfid}>
                <div key={campaign.sfid} className={classes.cardResult}>
                    {campaign.name}
                </div>
            </Link>
        )
    })

    return (
        <div className={classes.dropdownResults}>
            <div className={classes.blockCards}>
                <h3>Communities</h3>
                {comResults.length > 0 ? comResults : (
                    <div className={classes.cardResult}>
                        No results
                    </div>
                )}
            </div>
            <div className={classes.blockCards}>
                <h3>Rewards Campaigns</h3>
                {rewardsCampaignResults.length > 0 ? rewardsCampaignResults : (
                    <div className={classes.cardResult}>
                        No results
                    </div>
                )}
            </div>
            <div className={classes.blockCards}>
                <h3>Residents</h3>
                {resResults.length > 0 ? resResults : (
                    <div className={classes.cardResult}>
                        No results
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResults;