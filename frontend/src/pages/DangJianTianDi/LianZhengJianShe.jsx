import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkM from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Sticky from 'react-sticky-el';
import a from '../../asserts/images/admission_title.jpg';

const useStyles = makeStyles((theme) => ({
    channel: {
        position: 'relative',
        backgroundImage: `url(${a})`,
        height: 600,
        background: 'no-repeat top center',
        backgroundSize: 'cover',
    },
    channelIntro: {
        position: 'absolute',
        left: 0,
        right: 200,
        width: 'auto',
        bottom: 0,
        fontSize: '2em',
        color: 'white',

    },
    channelTitle: {
        padding: '0px 0px 0px 70px',
    },
    breadcrumbs: {
        backgroundColor: 'white',
        padding: '20px 0px 20px 70px',
    },
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
    mainWrap: {
        margin: '30px 70px 0px 70px',
        height: 2000,
        backgroundColor: 'white',
        display: 'flex',
    },
    navWrap: {
        // backgroundColor: 'lightblue',
        width: 130,
        margin: '0px 0px 0px 15px',

    },
    contentWrap: {
        flex: 1,
        backgroundColor: 'lightgreen',
    },
    stickyNav: {
        height: 300,
        backgroundColor: 'lightblue',
    },
}));
const LianZhengJianShe = () => {
    const classes = useStyles();

    // intergrate material ui link and react router link
    // this give us the default material ui appearance and react router onClick beheavior
    // if u just use material ui link when user click it, the page will refresh and could be very slow
    // deny the whole purpose of SPA so i avoid it
    return (
        <div>
            <div className={classes.channel}>
                <div className={classes.channelIntro}>

                    <Typography variant="h2" gutterBottom className={classes.channelTitle}>
                        廉政建设
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
                        <LinkM color="inherit" component={Link} to="/" className={classes.link}>
                            <HomeIcon className={classes.icon} />
                            主页
                        </LinkM>
                        <LinkM color="inherit" component={Link} to="/DangJianTianDi">
                            党建天地
                        </LinkM>
                        <Typography color="textPrimary"> 廉政建设</Typography>
                    </Breadcrumbs>
                </div>

            </div>
            <div className={classes.mainWrap}>
                <div className={classes.contentWrap}>mainContent</div>
                <div className={classes.navWrap}>
                    {
                        // 64 here is the length of the appBar
                        // for smooth ui, need to set both stickyStyle and topOffset
                        // stickyStyle set the distance from window when sticky is triggered
                        // topOffset is used to set when to tigger the sticky, its negative
                        // due to the appbar is fixed taken out of the normal flow
                    }
                    <Sticky
                        stickyStyle={{ top: '64px' }}
                        topOffset={-64}
                    >
                        <div className={classes.stickyNav}>
                            sticky navbar
                        </div>
                    </Sticky>
                </div>

            </div>
        </div>
    );
};

export default LianZhengJianShe;
