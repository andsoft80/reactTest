import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

// const useStyles = makeStyles({
//     list: {
//         width: 250,
//     },
//     fullList: {
//         width: 'auto',
//     },

// });

export default function MyDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Заказы
                    </ListSubheader>
                }
            >
                <ListItemLink href="/mama" >
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary="Новые" />
                </ListItemLink>
                {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (

                    <ListItemLink href="/mama" key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary="Spam" />
                    </ListItemLink>

                    // <ListItem button key={text}>
                    //     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>

                    //     <ListItemText primary={text} />

                    // </ListItem>
                ))} */}
            </List>
            <Divider />
            <List>

                <ListItemLink href="/papa" >
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary="Закрытые" />
                </ListItemLink>
                {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>

                        <ListItemText primary={text} />

                    </ListItem>
                ))} */}
                {/* <ListItem button onClick={handleClick}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>

                    <ListItemText primary={"Sub Menu"} />
                     {open ? <ExpandLess /> : <ExpandMore />} 

                </ListItem> */}
                {/* <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse> */}
            </List>
        </div >
    );

    // const fullList = side => (
    //     <div
    //         className={classes.fullList}
    //         role="presentation"
    //         onClick={toggleDrawer(side, false)}
    //         onKeyDown={toggleDrawer(side, false)}
    //     >
    //         <List>
    //             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //                 <ListItem button key={text}>
    //                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //                     <ListItemText primary={text} />
    //                 </ListItem>
    //             ))}
    //         </List>
    //         <Divider />
    //         <List>
    //             {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //                 <ListItem button key={text}>
    //                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //                     <ListItemText primary={text} />
    //                 </ListItem>
    //             ))}
    //         </List>
    //     </div>
    // );

    return (
        <div>
            {/* <Button onClick={toggleDrawer('left', true)} color="inherit"><MenuIcon /></Button> */}

            <IconButton
                onClick={toggleDrawer('left', true)}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
            >
                <MenuIcon />
            </IconButton>


            {/* <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
      <Button onClick={toggleDrawer('top', true)}>Open Top</Button>
      <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button> */}
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                
                {sideList('left')}
            </Drawer>
            {/* <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </Drawer>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer> */}
        </div>
    );
}
