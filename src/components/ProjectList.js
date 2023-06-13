import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, ImageList } from "@mui/material";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProjectContent from "./ProjectContent";

//Images


const colors = {
  1: "#FFFFFF", // Letra Tabs seleccionada
  2: "#0057a9", // Letra Tabs no seleccionada
  3: "#959595", // Extra
  4: "#0057a9", // Fondo Tabs hover
  5: "#9fcffc", // Fondo Tabs seleccionando
  100: "#9fcffc", // Read more +
};

const grey = {
  50: "#f6f8fa",
  100: "#9fcffc",
  200: "#9fcffc",
  300: "#9fcffc",
  400: "#9fcffc",
  500: "#9fcffc",
  600: "#9fcffc",
  700: "#9fcffc",
  800: "#9fcffc",
  900: "#9fcffc",
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${colors[2]};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  /* width: 100%; */
  padding: 10px 15px;
  margin: 6px 6px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${colors[5]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${colors[4]};
    color: ${colors[1]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  // background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  // border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  // border-radius: 12px;
  // opacity: 0.6;
  `
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  // min-width: 400px;
  // background-color: ${colors[500]};
  // border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `
);

function ProjectList() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [open, setOpen] = useState(false);

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>All</Tab>
        <Tab>Web Development</Tab>
        <Tab>App Development</Tab>
        <Tab>Design</Tab>
      </TabsList>
      <Box className="sa sa-right">
        <TabPanel className="letterEffectLeft" value={0}>
          <Grid container spacing={1}>
            {itemData1.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectContent {...item} />
              </Grid>
            ))}

            {itemData2.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectContent {...item} />
              </Grid>
            ))}
            {itemData3.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectContent {...item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel className="letterEffectLeft" value={1}>
          <Grid container spacing={1}>
            {itemData1.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectContent {...item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel className="letterEffectLeft" value={2}>
          <Grid container spacing={1}>
            {itemData2.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectContent {...item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel className="letterEffectLeft" value={3}>
          <Grid container spacing={1}>
            {itemData3.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectContent {...item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Box>
    </TabsUnstyled>
  );
}

export default ProjectList;

const itemData1 = [
  {
    id: 1,
    pjType: "Web Development",
    pjSImage:
      "https://cdn.discordapp.com/attachments/901722469033996288/1110400459593756783/image.png",
    pjImage:
      "https://cdn.discordapp.com/attachments/901722469033996288/1110400459593756783/image.png",
    pjTitle: "Portfolio",
    pjSubTitle: "",
    pjDuration: "",
    pjLecSite: "",
    pjSite: "",
    pjGithub: "",
    pjBlog: "",
    pjYouTube: "",
    pjDeTitle1: "LANGUAGE & TOOLS",
    pjDeContent1_1: "React",
    pjDeContent1_2: "MUI",
    pjDeContent1_3: "JavaScript",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "Front-end Developer",
    pjDeTitle3: "",
    pjDeContent3: "",
    pjDeTitle4: "",
    pjDeContent4: "",
    pjDef:
      "I think that every developer should have their own web page so I made mine to have a place to keep my resume updated.",
    pjPrototype:
      "",
    pjPrototypeAlt: "",
    pjVideo: "",
  },
  {
    id: 2,
    pjType: "Web Development",
    pjSImage:
      "https://cdn.discordapp.com/attachments/889690178032119839/1073406913141817384/5Paths.png",
    pjImage:
      "https://cdn.discordapp.com/attachments/889690178032119839/1073412280806555669/image.png",
    pjTitle: "Journeys",
    pjSubTitle: "",
    pjDuration: "FEBRUARY 2022 - JUNE 2022",
    pjLecSite: "",
    pjSite: "",
    pjGithub: "",
    pjBlog: "",
    pjYouTube: "",
    pjDeTitle1: "LANGUAGE & TOOLS",
    pjDeContent1_1: "React",
    pjDeContent1_2: "NodeJS",
    pjDeContent1_3: "Express",
    pjDeContent1_4: "",
    pjDeTitle2: "",
    pjDeContent2: "",
    pjDeTitle3: "ROLE",
    pjDeContent3: "Designer and Front-End Developer",
    pjDeTitle4: "DURATION",
    pjDeContent4: "5 Months",
    pjDef:
      "Website made to improve the efficiency and effectiveness of learning in employees, thus motivating them to continue learning on their own and thus creating a healthy learning environment",
    pjPrototype:
      "https://cdn.discordapp.com/attachments/889690178032119839/1073654325143945346/Poster_Frase_Motivacional_Fondo_Acuarela_Pastel_Rosa_1.png",
    pjPrototypeAlt: "",
    pjVideo: "",
  },
  {
    id: 3,
    pjType: "Web Development",
    pjSImage:
      "https://cdn.discordapp.com/attachments/889690178032119839/1073664531861086259/image.png",
    pjImage:
      "https://cdn.discordapp.com/attachments/889690178032119839/1073664531861086259/image.png",
    pjTitle: "Educrece",
    pjSubTitle: "",
    pjDuration: "DECEMBER 2019 - MARCH 2020",
    pjLecSite: "https://educrece.org/",
    pjSite: "",
    pjGithub: "",
    pjBlog: "",
    pjYouTube: "",
    pjDeTitle1: "LANGUAGE & TOOLS",
    pjDeContent1_1: "HTML",
    pjDeContent1_2: "CSS",
    pjDeContent1_3: "WebsiteBuilder",
    pjDeContent1_4: "",
    pjDeTitle2: "",
    pjDeContent2: "",
    pjDeTitle3: "ROLE",
    pjDeContent3: "Designer and Front-End Developer",
    pjDeTitle4: "DURATION",
    pjDeContent4: "3 Months",
    pjDef:
      "Official website made for Educrece Kindergarten.",
    pjPrototype:
      "https://cdn.discordapp.com/attachments/889690178032119839/1073680403497492541/Poster_Frase_Motivacional_Fondo_Acuarela_Pastel_Rosa_2.png",
    pjPrototypeAlt: "",
    pjVideo: "",
  },
];
const itemData2 = [
  {
    id: 1,
    pjType: "App Development",
    pjSImage:
    'https://media.discordapp.net/attachments/889690178032119839/1072964311967866990/Screenshot_20230208_133658.jpg?width=822&height=473',
    pjImage:
    'https://cdn.discordapp.com/attachments/889690178032119839/1072960675506303048/discordbots.png',
    pjTitle: "Discord Bot",
    pjSubTitle: "A Discord bot with many functionalities!",
    pjDuration: "NOVEMBER 2021 - IN PROGRESS",
    pjLecSite: "",
    pjSite: "",
    pjGithub: "",
    pjBlog: "",
    pjYouTube: "",
    pjDeTitle1: "LANGUAGE & TOOLS",
    pjDeContent1_1: "JavaScript",
    pjDeContent1_2: "",
    pjDeContent1_3: "",
    pjDeContent1_4: "",
    pjDeTitle3: "ROLE",
    pjDeContent3: "Solo",
    pjDeTitle4: "DURATION",
    pjDeContent4: "In progress",
    pjDef:
      "Jihyo Bot is a Discord bot with many functionalities, including fun, interaction and music commands used by more than 700 people. It supports Slash and Prefix commands.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fbric%2FbricPrototype.jpg?alt=media&token=613e6c52-6e55-4eac-87a5-cbd08d987956",
    pjPrototypeAlt: "",
    pjVideo: "",
  },
  {
    id: 2,
    pjType: "App Development",
    pjSImage:
    'https://media.discordapp.net/attachments/889690178032119839/1073400464227454976/EVE14042020.png?width=840&height=473',
    pjImage:
    'https://cdn.discordapp.com/attachments/889690178032119839/1073402244176822442/marco.png',
    pjTitle: "Museum iOS App",
    pjSubTitle: "Our Museum one click away of you.",
    pjDuration: "AUGUST 2021 - OCTOBER 2021",
    pjLecSite: "",
    pjSite: "",
    pjGithub: "",
    pjBlog: "",
    pjYouTube: "",
    pjDeTitle1: "LANGUAGE & TOOLS",
    pjDeContent1_1: "Swift",
    pjDeContent1_2: "SwiftUI",
    pjDeContent1_3: "PHP",
    pjDeContent1_4: "NodeJS",
    pjDeTitle3: "ROLE",
    pjDeContent3: "App Design and Swift Developer",
    pjDeTitle4: "DURATION",
    pjDeContent4: "3 Months",
    pjDef:
      "This is an iOS app made for a famous museum in Monterrey, Nuevo León, México. The app purpose is to include the most recent paintings, artists and items of the museum directly to your hands.",
    pjPrototype:
      "https://media.discordapp.net/attachments/889690178032119839/1073403073956954172/image.png?width=840&height=473",
    pjPrototypeAlt: "",
    pjVideo: "",
  },
  {
    id: 3,
    pjType: "App Development",
    pjSImage:
    'https://cdn.discordapp.com/attachments/889690178032119839/1073393755966685184/image.png',
    pjImage:
    'https://cdn.discordapp.com/attachments/889690178032119839/1073393755966685184/image.png',
    pjTitle: "Urban Traffic Simulation",
    pjSubTitle: "",
    pjDuration: "NOVEMBER 2021 - DECEMBER 2021",
    pjLecSite: "",
    pjSite: "",
    pjGithub: "",
    pjBlog: "",
    pjYouTube: "",
    pjDeTitle1: "LANGUAGE & TOOLS",
    pjDeContent1_1: "C#",
    pjDeContent1_2: "Unity",
    pjDeContent1_3: "Python",
    pjDeContent1_4: "",
    pjDeTitle3: "ROLE",
    pjDeContent3: "Unity designer and C# Developer",
    pjDeTitle4: "",
    pjDeContent4: "",
    pjDef:
      "This was a proposal to solve the problem of traffic in overpopulated cities, this through a 3D unity simulation where the traffic lights are intelligent and reduce the traffic congestion.",
    pjPrototype:
      "",
    pjPrototypeAlt: "",
    pjVideo: "",
  },
];

const itemData3 = [
];
