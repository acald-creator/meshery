import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import DeleteIcon from "../../../../assets/icons/DeleteIcon";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "../../../../assets/icons/ExpandMoreIcon"
import { IconButton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  accordionRoot : {
    width : "100%",
    marginBottom : "0rem"
  },
  heading : {
    fontSize : theme.typography.pxToRem(15),
    fontWeight : theme.typography.fontWeightRegular
  }
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();
  const accordionDetailsRef = React.useRef(null);

  useEffect(() => {
    // for managing focus
    if (accordionDetailsRef.current) {
      accordionDetailsRef.current.scrollIntoView({
        behavior : "smooth",
        block : "nearest",
      });
    }

  }, [accordionDetailsRef.current]);

  return (
    <div className={classes.accordionRoot}>
      <MuiAccordion defaultExpanded elevation={0}>
        <MuiAccordionSummary
          expandIcon={<ExpandMoreIcon width="14px" height="14px" fill="gray"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor : "F7F7F7" }}
        >

          <Typography className={classes.heading}>{props.heading?.charAt(0).toUpperCase() + props.heading?.slice(1)}{" "}</Typography>

          {props.childProps.hasRemove && (

            <IconButton
              style={{ padding : "0" }}
              // style={btnStyle}
              disabled={props.childProps.disabled || props.childProps.readonly}
              onClick={props.childProps.onDropIndexClick(
                props.childProps.index
              )}
            >
              <DeleteIcon width="18px" height="18px" fill="gray"/>
            </IconButton>
          )}
        </MuiAccordionSummary>
        <MuiAccordionDetails ref={accordionDetailsRef} >{props.children}</MuiAccordionDetails>

      </MuiAccordion>
    </div>
  );
}
