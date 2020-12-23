import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkM from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Sticky from 'react-sticky-el';
import Scrollspy from 'react-scrollspy';
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
        fontSize: '1.5em',
    },
    stickyNav: {
        height: 300,
        backgroundColor: 'lightblue',
    },
    isCurrent: {
        fontWeight: 'bold',
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
                <div className={classes.contentWrap}>
                    <section id="section-1">
                        <h2>Section 1</h2>
                        <p>
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use
                            it? It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                            to using Content here, content here, making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as
                            their default model text, and a search for lorem ipsum will uncover many web
                            sites still in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).
                            Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply
                            random text. It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-
                            Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source. Lorem Ipsum
                            comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The
                            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
                            on the theory of ethics, very popular during the Renaissance. The first line of
                            Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section
                            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                            below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus
                            Bonorum et Malorum by Cicero are also reproduced in their exact original form,
                            accompanied by English versions from the 1914 translation by H. Rackham. Where
                            can I get some? There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour, or
                            randomised words which dont look even slightly believable. If you are going to
                            use a passage of Lorem Ipsum, you need to be sure there isnt anything
                            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                            the Internet tend to repeat predefined chunks as necessary, making this the
                            first true generator on the Internet. It uses a dictionary of over 200 Latin
                            words, combined with a handful of model sentence structures, to generate Lorem
                            Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                            free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                    </section>
                    <section id="section-2">
                        <h2>Section 2</h2>
                        <p>
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use
                            it? It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                            to using Content here, content here, making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as
                            their default model text, and a search for lorem ipsum will uncover many web
                            sites still in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).
                            Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply
                            random text. It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-
                            Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source. Lorem Ipsum
                            comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The
                            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
                            on the theory of ethics, very popular during the Renaissance. The first line of
                            Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section
                            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                            below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus
                            Bonorum et Malorum by Cicero are also reproduced in their exact original form,
                            accompanied by English versions from the 1914 translation by H. Rackham. Where
                            can I get some? There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour, or
                            randomised words which dont look even slightly believable. If you are going to
                            use a passage of Lorem Ipsum, you need to be sure there isnt anything
                            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                            the Internet tend to repeat predefined chunks as necessary, making this the
                            first true generator on the Internet. It uses a dictionary of over 200 Latin
                            words, combined with a handful of model sentence structures, to generate Lorem
                            Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                            free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                    </section>
                    <section id="section-3">
                        <h2>Section 3</h2>
                        <p>
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use
                            it? It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                            to using Content here, content here, making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as
                            their default model text, and a search for lorem ipsum will uncover many web
                            sites still in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).
                            Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply
                            random text. It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-
                            Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source. Lorem Ipsum
                            comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The
                            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
                            on the theory of ethics, very popular during the Renaissance. The first line of
                            Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section
                            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                            below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus
                            Bonorum et Malorum by Cicero are also reproduced in their exact original form,
                            accompanied by English versions from the 1914 translation by H. Rackham. Where
                            can I get some? There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour, or
                            randomised words which dont look even slightly believable. If you are going to
                            use a passage of Lorem Ipsum, you need to be sure there isnt anything
                            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                            the Internet tend to repeat predefined chunks as necessary, making this the
                            first true generator on the Internet. It uses a dictionary of over 200 Latin
                            words, combined with a handful of model sentence structures, to generate Lorem
                            Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                            free from repetition, injected humour, or non-characteristic words etc.
                        </p>

                    </section>

                </div>
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
                            <Scrollspy
                                className="scrollspy"
                                items={['section-1', 'section-2', 'section-3']}
                                currentClassName={classes.isCurrent}
                                offset={-64}
                            >
                                <li><a href="#section-1">section 1</a></li>
                                <li><a href="#section-2">section 2</a></li>
                                <li><a href="#section-3">section 3</a></li>
                            </Scrollspy>
                        </div>
                    </Sticky>
                </div>

            </div>
        </div>
    );
};

export default LianZhengJianShe;
