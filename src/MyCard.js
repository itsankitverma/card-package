import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
  createStyles({
    parentRoot: {
      display: "flex",
      height: theme.spacing(47),
      margin: 10,
      fontFamily: theme.typography.fontFamily,
      maxWidth: "28em",
    },
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: theme.typography.fontFamily,
    },
    media: {
      height: 160,
      width: "50%",
      display: "none",
    },
    imgContainer: {
      backgroundSize: "cover",
      width: "100%",
      height: "100%",
      marginBottom: "0",
      borderRadius:"10%"
    },
    promoBannerBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: theme.palette.common.black,
      width: "70%",
      position: "relative",
      top: "-20px",
    },
    bannerSubtitle: {
      color: theme.palette.common.black,
      width: "180px",
      fontSize: "0.9rem",
      wordBreak: "break-word",
      textAlign: "justify",
      padding: "0 5px",
      fontFamily: theme.typography.fontFamily,
    },
    description: {
      color: theme.palette.common.black,
      fontSize: "1.6rem",
      lineHeight: "38px",
      textAlign: "left",
      fontFamily: theme.typography.fontFamily,
    },
    button: {
      background: theme.palette.common.black,
      color: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
      position: "absolute",
      top: "7rem",
      width: "10rem",
      "&:hover": {
        background: theme.palette.common.black,
        color: theme.palette.common.white,
      },
    },
    cardContent: {
      position: "relative",
      top: "-15px",
      height: "35%",
    },
    cardActions: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
    },
    // media-query for the tablet screens
    "@media(max-width:834px) and (min-width:415px)": {
      parentRoot: {
        height: theme.spacing(47),
        margin: 10,
      },
    },
    // media-query for large mobile screens
    "@media(max-width:414px) and (min-width:321px)": {
      root: {
        width: theme.spacing(35),
        height: "88%",
      },
      imgContainer: {
        display: "none",
      },
      bannerSubtitle: {
        width: "100%",
        padding: "0rem",
      },
      description: {
        fontSize: "1.2rem",
        textAlign: "left",
        lineHeight: "24px",
      },
      media: { display: "block", width: "100%", height: "37%" },
      button: {
        padding: "0px 20px",
        top: "15px",
      },
      cardContent: {
        position: "relative",
        top: "-15px",
        height: "35%",
      },
    },
    // media-query for the small mobile screens
    "@media(max-width:320px) and (min-width:0px)": {
      root: {
        width: theme.spacing(32),
        height: "90%",
      },
      parentRoot: { height: "70vh" },
      imgContainer: {
        display: "none",
      },
      bannerSubtitle: {
        width: "100%",
        padding: "0rem",
      },
      description: {
        fontSize: "1.2rem",
        textAlign: "left",
        lineHeight: "24px",
      },
      media: { display: "block", width: "100%", height: "37%" },
      button: {
        padding: "0px 20px",
        top: "10px",
      },
      cardContent: {
        position: "relative",
        top: "-15px",
        height: "35%",
      },
    },
  })
);
/**
 * Returns the responsive card component
 *
 * This is the responsive card, which also includes the media queries for
 * small screens, large screens and the tablet views. This component returns
 * various props like responsiveImage, responsiveAlttitle, heading, subText,
 * primaryBtnText, image, altTitle, handlePrimaryBtn
 *
 * This component also consists of test cases.
 */

 export const responsiveImage = "https://www.chipotle.com/content/dam/poc/order/images/secondary-promo-banners/spring-catering/v2-mobile-secondary-tout_CateringGrad@2x.jpg"
 export const responsiveAltTitle = "chipotle"
 export const heading = "CELEBRATE THE CLASS OF 2021"
 export const subText = "Easily build & customize a grad-worthy spread with Burritos by the Box. It’s perfect for any celebration. Order at least 24 hours in advance."
 export const primaryBtnText = "ORDER NOW"
 export const image = "https://www.chipotle.com/content/dam/poc/order/images/secondary-promo-banners/spring-catering/v2-desktop-secondary-tout_CateringGrad@2x.jpg"
 export const altTitle = "chipotle by default"
 export const handlePrimaryBtn = () => {}

export default function ResponsiveCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.parentRoot}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={responsiveImage}
          title={responsiveAltTitle}
        />
        <CardContent className={classes.cardContent}>
          <h1 className={classes.description} >
            {heading}
          </h1>
          <p className={classes.bannerSubtitle} >
            {subText}
          </p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            variant="contained"
            data-testid="handleChangeId"
            onClick={handlePrimaryBtn}
            className={classes.button}
          >
            {primaryBtnText}
          </Button>
        </CardActions>
      </Card>
      <CardMedia
        className={classes.imgContainer}
        image={image}
        title={altTitle}
      />
    </div>
  );
}
