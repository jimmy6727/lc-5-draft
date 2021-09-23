import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    dropdownResults: {
        position: 'absolute',
        left: '20%',
        top: '80%',
        width: '400px',
        zIndex: '5',
        backgroundColor: 'white'
    },
    cardResult: {
        border: '1px solid rgba(131, 131, 131, 0.27)',
        boxSizing: 'border-box',
        borderRadius: '3px'
    },
    blockCards: {
        
    }
}))

const SearchResults = (props) => {
    const classes = useStyles();
    const { residents, communities } = props;
    const resResults = residents.map(resident => {
        return (
            <div className={classes.cardResult}>
                {resident.firstname} {resident.lastname}
            </div>
        )
    });

    const comResults = communities.map(community => {
        return (
            <div className={classes.cardResult}>
                {community.name}
            </div>
        )
    })

    return (
        <div className={classes.dropdownResults}>
            <div className={classes.blockCards}>
                <h3>Residents</h3>
                {resResults.length > 0 ? resResults : (
                    <div className={classes.cardResult}>
                        No results
                    </div>
                )}
            </div>
            <div className={classes.blockCards}>
                <h3>Communities</h3>
                {comResults.length > 0 ? comResults : (
                    <div className={classes.cardResult}>
                        No results
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResults;