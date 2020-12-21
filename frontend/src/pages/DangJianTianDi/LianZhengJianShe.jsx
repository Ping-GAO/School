import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
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
}));
const LianZhengJianShe = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.channel}>
                <div className={classes.channelIntro}>

                    <Typography variant="h2" gutterBottom className={classes.channelTitle}>
                        廉政建设
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>

                        <Link color="inherit" href="/" className={classes.link}>
                            <HomeIcon className={classes.icon} />
                            主页
                        </Link>
                        <Link color="inherit" href="/">
                            党建天地
                        </Link>
                        <Typography color="textPrimary"> 廉政建设</Typography>
                    </Breadcrumbs>
                </div>

            </div>

        </>
    );
};

export default LianZhengJianShe;
