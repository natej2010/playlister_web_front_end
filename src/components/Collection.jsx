import React, { Component } from 'react';
import { styled, withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AppBar from './AppBar'
import GameModal from './GameModal';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const MyInfoIcon = styled(InfoIcon)({
    color: 'white',
});

const Collection = ({ classes, username, collection, urls }) => {
    collection = JSON.parse(collection);
    var server_routes = JSON.parse(urls) 

    const [open, setOpen] = React.useState(false);
    const [activeTile, setActiveTile] = React.useState(null);


    const handleOpen = (tile) => {
        setActiveTile(tile);
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div>
            <AppBar urls={ server_routes }/>
            <GridList cellHeight={500}>
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                    <ListSubheader component="div">{username}'s Collection</ListSubheader>
                </GridListTile >
                {collection.map(tile => (
                    <GridListTile key={tile.bgg_id}>
                        <img src={tile.image} alt={tile.thumbnail}/>
                        <GridListTileBar
                            title={tile.title}
                            titlePosition="top"
                            actionIcon={
                                <IconButton className={classes.icon} />
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                        <GridListTileBar
                            title={tile.name}
                            subtitle={<span>Plays: {tile.num_plays}</span>}
                            actionIcon={
                                <IconButton onClick={() => handleOpen(tile)}>
                                    <MyInfoIcon/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
            <GameModal open={open} handleClose={handleClose} tile={activeTile}/>
        </div>
    );
};

export default withStyles(styles)(Collection);

