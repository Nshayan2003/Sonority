import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  const faqsHeadingStyle = {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: "600",
    fontFamily: "Poppins",
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionStyle = {
    marginBottom: "10px",
    borderRadius: "10px",
  };

  const accordionSummaryStyle = {
    color: "white",
    backgroundColor: "#000",
    height: "78px",
    border: "2px solid #FFFFFF",
    borderRadius: "10px",
  };

  return (
    <div
      style={{
        borderRadius: "2px solid white",
        height: "345px",
        width: "1135px",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        top: "1661px",
        marginLeft: "250px",
        marginRight: "153px",
      }}
    >
      <h2 style={faqsHeadingStyle}>FAQS</h2>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleAccordionChange("panel1")}
          style={accordionStyle}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{
                  color: "#34C94B",
                  width: "35px",
                  height: "40px",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={accordionSummaryStyle}
          >
            <Typography>Is Qtify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ height: "35px", fontWeight: "bold" }}>
            <Typography>Yes! It is 100% free and 0% ads.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleAccordionChange("panel2")}
          style={accordionStyle}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{
                  color: "#34C94B",
                  width: "35px",
                  height: "40px",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
            style={accordionSummaryStyle}
          >
            <Typography>Can I download and listen to songs online?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ height: "35px", fontWeight: "bold" }}>
            <Typography>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
