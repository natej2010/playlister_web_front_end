import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing(50),
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
    },
});

function GameModal({ classes, open, handleClose, tile}) {


    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
            <div style={getModalStyle()} className={classes.paper}>
                <Typography variant="h6" id="modal-title">
                    {(tile) ? tile.name[0] : ''}
                </Typography>
                <Typography variant="subtitle1" id="simple-modal-description">
                    {(tile) ? `${ tile.description[0].substring(0,500) }...`  : ''}
                </Typography>
                <Button onClick={()=>window.open(tile.link)} variant="contained" color="default">
                    BGG Page
                </Button>
                <SimpleModalWrapped/>
            </div>
        </Modal>
    );
}


GameModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(GameModal);

export default SimpleModalWrapped;