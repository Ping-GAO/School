import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkM from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
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

    // intergrate material ui link and react router link
    // this give us the default material ui appearance and react router onClick beheavior
    // if u just use material ui link when user click it, the page will refresh and could be very slow
    // deny the whole purpose of SPA so i avoid it
    return (
        <>
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
            <div style={{ height: '500px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam orci nunc, auctor et augue tempus, varius fermentum erat.
                Maecenas euismod pellentesque diam et sollicitudin. Integer
                interdum enim tincidunt magna euismod, faucibus tincidunt erat
                auctor. In hendrerit elit lacus, non euismod turpis dictum ac.
                Sed elementum venenatis pharetra. Etiam neque nibh, pellentesque sed
                interdum vitae, faucibus quis lacus. Nulla a massa sit amet arcu blandit
                vulputate. Mauris tempor, ex sit amet consectetur porta, sapien dui sodales
                lorem, molestie porttitor purus enim in est. Donec id porttitor dolor.

                Nulla iaculis velit vitae auctor ornare. Nam non dui imperdiet,
                malesuada est at, feugiat ante. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Sed sed lacinia
                quam, quis feugiat mi. Curabitur purus mi, euismod a blandit quis, commodo
                sed nisl. Morbi lectus turpis, luctus at porta vel, sollicitudin ac urna.
                Nulla mattis, ipsum vitae vestibulum posuere, nunc sapien vestibulum dui,
                et pulvinar turpis metus a nulla. Etiam rutrum tempus mauris, sit amet tristique
                purus commodo nec. Sed nec fermentum justo. Proin dignissim risus quam, a maximus
                leo pharetra eget. Phasellus nisl enim, faucibus a viverra at, semper sed magna.
                Praesent lectus velit, imperdiet eget erat at, placerat condimentum erat.
                Etiam consectetur, metus quis hendrerit hendrerit, arcu quam aliquam erat,
                a lacinia risus elit in odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Proin vel ullamcorper lorem, et tincidunt sem.

                Curabitur egestas auctor neque vel commodo. Donec in tristique mi.
                Nunc blandit ante sit amet urna lacinia, quis interdum mauris ultricies.
                Nam laoreet tincidunt arcu, vel dictum justo viverra id. Praesent consectetur
                eget mi consectetur rutrum. Aenean at arcu sed purus pretium hendrerit.
                Proin sem nulla, ullamcorper eget magna ut, aliquet accumsan mauris.
                Suspendisse elit tortor, elementum ac aliquet ac, fringilla id ipsum.
                Suspendisse fringilla, lectus eu porta consequat, dui odio ornare mauris,
                et rutrum nisl neque sit amet leo. Suspendisse fringilla justo id libero maximus,
                a convallis tortor viverra. Integer non sagittis purus.

            </div>
        </>
    );
};

export default LianZhengJianShe;
