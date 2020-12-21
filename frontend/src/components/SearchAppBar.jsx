import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SchoolIcon from '@material-ui/icons/School';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ApartmentIcon from '@material-ui/icons/Apartment';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import EcoIcon from '@material-ui/icons/Eco';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        cursor: 'pointer',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    fullList: {
        width: 'auto',
    },
    girdContainer: {
        margin: 0,
    },
    listText: {
        textAlign: 'center',
    },
}));

export default function SearchAppBar() {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    function ListItemTextCenter(props) {
        return <ListItem button className={classes.listText} {...props} />;
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        className={classes.title}
                        variant="h6"
                        noWrap
                        onClick={() => {
                            history.push('/');
                        }}
                    >
                        进华中学
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer anchor="top" open={open} onClose={handleDrawerClose}>
                <div
                    className={classes.fullList}
                    role="presentation"
                    onClick={handleDrawerClose}
                    onKeyDown={handleDrawerClose}
                >
                    <Grid container item spacing={1} xs={12} className={classes.girdContainer}>
                        <Grid container item xs={4}>
                            <Grid item xs={4}>
                                <List component="nav">
                                    <ListItem>
                                        <ListItemIcon>
                                            <SchoolIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="学校管理" />
                                    </ListItem>
                                </List>
                                <Divider />
                                <List component="nav">
                                    <ListItemTextCenter>
                                        <ListItemText primary="Default" />
                                    </ListItemTextCenter>
                                </List>
                            </Grid>
                            <Grid item xs={4}>
                                <List component="nav">
                                    <ListItem>
                                        <ListItemIcon>
                                            <WorkOutlineIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="党建天地" />
                                    </ListItem>
                                </List>
                                <Divider />
                                <List component="nav">
                                    <ListItemTextCenter onClick={() => {
                                        history.push('/DangJianTianDi/LianZhengJianShe');
                                    }}
                                    >
                                        <ListItemText primary="廉政建设" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter onClick={() => {
                                        history.push('/DangJianTianDi/QunTuanHuoDong');
                                    }}
                                    >
                                        <ListItemText primary="群团活动" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter onClick={() => {
                                        history.push('/DangJianTianDi/DangJianLianJian');
                                    }}
                                    >
                                        <ListItemText primary="党建联建" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="党员风采" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="党务公开" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="工作动态" />
                                    </ListItemTextCenter>
                                </List>
                            </Grid>
                            <Grid item xs={4}>
                                <List component="nav">
                                    <ListItem>
                                        <ListItemIcon>
                                            <AccessibilityNewIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="德育之窗" />
                                    </ListItem>
                                </List>
                                <Divider />
                                <List component="nav">
                                    <ListItemTextCenter>
                                        <ListItemText primary="德育活动" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="团队建设" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="家校互动" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="心理教育" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="德育常规" />
                                    </ListItemTextCenter>
                                </List>
                            </Grid>

                        </Grid>
                        <Grid container item xs={4}>
                            <Grid item xs={4}>
                                <List component="nav">
                                    <ListItem>
                                        <ListItemIcon>
                                            <AssessmentIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="教学风采" />
                                    </ListItem>
                                </List>
                                <Divider />

                                <List component="nav">
                                    <ListItemTextCenter>
                                        <ListItemText primary="学生荣誉" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="学籍管理" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="课堂展示" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="体育卫生" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="教学常规" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="课表查询" />
                                    </ListItemTextCenter>
                                </List>
                            </Grid>
                            <Grid item xs={4}>
                                <List component="nav">
                                    <ListItem>
                                        <ListItemIcon>
                                            <EmojiEventsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="科研师训" />
                                    </ListItem>
                                </List>
                                <Divider />
                                <List component="nav">
                                    <ListItemTextCenter>
                                        <ListItemText primary="论文发表" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="课题研究" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="科研资讯" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="数学基地" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="科研获奖" />
                                    </ListItemTextCenter>

                                </List>
                            </Grid>
                            <Grid item xs={4}>
                                <List component="nav">
                                    <ListItem>
                                        <ListItemIcon>
                                            <ApartmentIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="总务后勤" />
                                    </ListItem>
                                </List>
                                <Divider />
                                <List component="nav">

                                    <ListItemTextCenter>
                                        <ListItemText primary="教育后勤" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="生活后勤" />
                                    </ListItemTextCenter>

                                </List>
                            </Grid>
                        </Grid>
                        <Grid container item xs={4}>
                            <Grid item xs={4}>
                                <List component="nav">
                                    <ListItem>
                                        <ListItemIcon>
                                            <EcoIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="学生园地" />
                                    </ListItem>
                                </List>
                                <Divider />
                                <List component="nav">
                                    <ListItemTextCenter>
                                        <ListItemText primary="Default" />
                                    </ListItemTextCenter>
                                </List>
                            </Grid>
                            <Grid item xs={4}>
                                <List component="nav">
                                    <ListItem>
                                        <ListItemIcon>
                                            <LocalLibraryIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="责任督学" />
                                    </ListItem>
                                </List>
                                <Divider />
                                <List component="nav">
                                    <ListItemTextCenter>
                                        <ListItemText primary="公示公报" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="督导动态" />
                                    </ListItemTextCenter>
                                    <ListItemTextCenter>
                                        <ListItemText primary="政策法规" />
                                    </ListItemTextCenter>
                                </List>
                            </Grid>
                            <Grid item xs={4}>
                                <List component="nav">
                                    <ListItem>
                                        <ListItemIcon>
                                            <VisibilityIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="依法治校" />
                                    </ListItem>
                                </List>
                                <Divider />
                                <List component="nav">
                                    <ListItemTextCenter>
                                        <ListItemText primary="Default" />
                                    </ListItemTextCenter>
                                </List>
                            </Grid>
                        </Grid>

                    </Grid>

                </div>
            </Drawer>
        </div>
    );
}
