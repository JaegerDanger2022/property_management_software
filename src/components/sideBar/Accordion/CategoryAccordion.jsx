import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Home } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { SideBarNavButtons } from "../Buttons/SideBarNavButtons";
import "@fontsource/material-icons";
import Icon from "@mui/material/Icon";
import { useTheme } from "@emotion/react";

export default function CategoryAccordion({
  categoryIcon,
  categoryOptionsList,
  categoryLabel,
}) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const theme = useTheme();

  return (
    <div>
      <MuiAccordion disableGutters elevation={0} square>
        <MuiAccordionSummary
          sx={{ height: "5px" }}
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.95rem" }} />}
        >
          <SideBarNavButtons
            label={categoryLabel}
            path={"/"}
            startIcon={<Icon>{categoryIcon}</Icon>}
            // disabled={true}
            sx={{ color: theme.palette.text.primary }}
          />
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          {categoryOptionsList.map((data, key) => {
            const { label, startIcon, path } = data;
            return (
              <SideBarNavButtons
                key={key}
                label={label}
                startIcon={<Icon>{startIcon}</Icon>}
                path={path}
                // disabled={false}
              />
            );
          })}
        </MuiAccordionDetails>
      </MuiAccordion>
    </div>
  );
}
