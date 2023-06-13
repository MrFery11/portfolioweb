import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CareerTimelineList from "./CareerTimelineList";

const careerList1 = [
  {
    id: 1,
    timeDate: "August 1, 2022 - Today",
    timeTitle:
      "PERFICIENT, Inc.",
    timeTitleLink: "https://www.perficient.com/",
    timeSubTitle: "Software Engineer Intern - Front-End Developer",
    content1: "Front-end development using Angular and TypeScript, a website for internal use to organize employee schedules, see their availability for other projects and their resumes. Optimized software development by creating recyclable components. Currently working on an AI project.",
    content1Date: "",
    content1Link: "",
    content2: "",
    content2Date: "",
    content2Link: "",
  },
  {
    id: 2,
    timeDate: "March 1, 2022 - February 1, 2023",
    timeTitle: "ITESM",
    timeTitleLink: "https://tec.mx/es",
    timeSubTitle: "On Campus Intern - Microsoft Power Apps Developer",
    content1: "Got involved in the planning, UI and UX design, development, and testing processes of a Microsoft Power Apps application for ITESM. This was an app for “Tec Food”, it was an application to keep track of students and teachers who had a special food diet to help them reach their ideal weight based on calculations.",
    content1Date: "",
    content1Link: "",
    content2: "",
    content2Date: "",
    content2Link: "",
  },
  {
    id: 3,
    timeDate: "February 2022 - June 2022",
    timeTitle: "WIZELINE",
    timeTitleLink: "https://tec.mx/es",
    timeSubTitle: "Software Engineer Intern - Front-End Developer",
    content1: "Developed a web page for the company Wizeline using React, Javascript and CSS so that employees could see their growth within the company and have all the resources to keep learning new abilities and technologies. I was part of the front-end team, so I developed some of the web page views and hosting, besides working on the design of the UI and UX mockups.",
    content1Date: "",
    content1Link: "",
    content2: "",
    content2Date: "",
    content2Link: "",
  },
];

const careerList2 = [
];

function CareerTimeline() {
  return (
    <Grid container spacing={1} sx={{ mt: { sm: "5", xs: "0" } }}>
      <Grid className="sa sa-left" item xs={12} sm={6}>
        <Box>
          <Typography
            color="#1C1B1F"
            sx={{
              typography: { sm: "h6", xs: "subtitle1" },
            }}
          >
            <b>EXPERIENCE</b>
          </Typography>
          <CareerTimelineList careerList={careerList1} />
        </Box>
      </Grid>
      <Grid className="sa sa-left" item xs={12} sm={6}>
        <Box>
          <Typography
            color="#1C1B1F"
            sx={{ typography: { sm: "h6", xs: "subtitle1" } }}
          >
            {/* <b>EDUCATION</b> */}
          </Typography>
          <CareerTimelineList careerList={careerList2} />
        </Box>
      </Grid>
    </Grid>
  );
}
export default CareerTimeline;
