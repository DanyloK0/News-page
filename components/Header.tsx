"use client";
import React from "react";
import Link from "next/link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Modal, Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const tabsData = [
  { label: "Tutti i temi" },
  { label: "Ambiente" },
  { label: "Economia" },
  { label: "Mondo" },
  { label: "Non Profit" },
  { label: "Politica" },
  { label: "Società" },
  { label: "Welfare" },
];

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Header = () => {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="fixed top-0 bg-white text-black w-full flex flex-wrap items-center z-10">
      <div className="h-12 w-full grid grid-cols-2 px-10 py-4">
        <div className="space-x-4">
          <Link href="https://dona-ora.savethechildren.it/donazione-regolare-malnutrizione?causale=20194&utm_source=google&utm_medium=pmax&utm_campaign=rf-rg-malnutrizione&utm_content=auto&utm_term=other-samV2&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv-poGysnit6sIxSEG-mjKStdqkITljW0gd1of4a7gnYdLhzAIgrAXRoCyXQQAvD_BwE">
            Contribuisci
          </Link>
          <Link href="https://dona-ora.savethechildren.it/donazione-regolare-malnutrizione?causale=20194&utm_source=google&utm_medium=pmax&utm_campaign=rf-rg-malnutrizione&utm_content=auto&utm_term=other-samV2&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv-poGysnit6sIxSEG-mjKStdqkITljW0gd1of4a7gnYdLhzAIgrAXRoCyXQQAvD_BwE">
            Abbonati
          </Link>
        </div>
        <div className="flex justify-end">
          <PersonOutlineOutlinedIcon />
          <Link href="https://dona-ora.savethechildren.it/donazione-regolare-malnutrizione?causale=20194&utm_source=google&utm_medium=pmax&utm_campaign=rf-rg-malnutrizione&utm_content=auto&utm_term=other-samV2&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv-poGysnit6sIxSEG-mjKStdqkITljW0gd1of4a7gnYdLhzAIgrAXRoCyXQQAvD_BwE">
            Accedi
          </Link>
        </div>
      </div>
      <div className="h-24 flex w-full justify-between border border-y-black">
        <button
          onClick={handleOpen}
          className="w-24 h-24 p-8 border border-r-black text-red-500"
        >
          <MenuOutlinedIcon />
        </button>
        <button className="w-24 h-24 p-8 border border-l-black text-red-500">
          <SearchOutlinedIcon />
        </button>
      </div>
      <div className="h-12 flex w-full text-black justify-between px-4">
        <Box>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {tabsData.map((data, index) => (
                <Tab
                  key={index}
                  label={data.label}
                  {...a11yProps(index)}
                  className="text-black"
                />
              ))}
            </Tabs>
          </Box>
        </Box>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          className="h-12"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <AbcOutlinedIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <ImageOutlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="bg-white w-full h-full top-0 bottom-0 text-black">
          <div className="h-12 grid grid-cols-2 px-10 py-4">
            <div className="space-x-4">
              <Link href="https://dona-ora.savethechildren.it/donazione-regolare-malnutrizione?causale=20194&utm_source=google&utm_medium=pmax&utm_campaign=rf-rg-malnutrizione&utm_content=auto&utm_term=other-samV2&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv-poGysnit6sIxSEG-mjKStdqkITljW0gd1of4a7gnYdLhzAIgrAXRoCyXQQAvD_BwE">
                Contribuisci
              </Link>
              <Link href="https://dona-ora.savethechildren.it/donazione-regolare-malnutrizione?causale=20194&utm_source=google&utm_medium=pmax&utm_campaign=rf-rg-malnutrizione&utm_content=auto&utm_term=other-samV2&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv-poGysnit6sIxSEG-mjKStdqkITljW0gd1of4a7gnYdLhzAIgrAXRoCyXQQAvD_BwE">
                Abbonati
              </Link>
            </div>
            <div className="flex justify-end">
              <PersonOutlineOutlinedIcon />
              <Link href="https://dona-ora.savethechildren.it/donazione-regolare-malnutrizione?causale=20194&utm_source=google&utm_medium=pmax&utm_campaign=rf-rg-malnutrizione&utm_content=auto&utm_term=other-samV2&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv-poGysnit6sIxSEG-mjKStdqkITljW0gd1of4a7gnYdLhzAIgrAXRoCyXQQAvD_BwE">
                Accedi
              </Link>
            </div>
          </div>
          <div className="h-24 flex w-full justify-between border border-y-black">
            <button
              onClick={handleClose}
              className="w-24 h-24 p-8 border border-r-black text-red-500"
            >
              X
            </button>
          </div>
          <div className="grid grid-cols-3 h-80 border border-b-black">
            <div className="p-8 content-end">
              <h2 className="text-3xl font-bold pb-2"> Articoli</h2>
              <p className="text-xs">Trend, dati e novità del Terzo Settore.</p>
            </div>
            <div className="p-8 content-end border border-x-black">
              <h2 className="text-3xl font-bold pb-2"> Storie</h2>
              <p className="text-xs">
                Letture ed approfondimenti dei fenomeni complessi.
              </p>
            </div>
            <div className="p-8 content-end">
              <h2 className="text-3xl font-bold pb-2"> Interviste</h2>
              <p className="text-xs">
                Racconti reali di persone ed organizzazioni.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 h-80 border border-b-black">
            <div className="p-8 content-end">
              <h2 className="text-3xl font-bold pb-2"> Opinioni</h2>
              <p className="text-xs">
                Riflessioni e confronti dei nostri opinionisti.
              </p>
            </div>
            <div className="p-8 content-end border border-x-black">
              <h2 className="text-3xl font-bold pb-2"> Podcast</h2>
              <p className="text-xs">
                Un luogo per dare voce ai protagonisti della sostenibilità.
              </p>
            </div>
            <div className="p-8 content-end">
              <h2 className="text-3xl font-bold pb-2"> Bookazine</h2>
              <p className="text-xs">
                Una rivista da leggere e un libro da conservare.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 h-32">
            <div className="grid text-xs content-center justify-items-center border border-r-black">
              <p>Chi siamo</p>
            </div>
            <div className="grid text-xs content-center justify-items-center border border-r-black">
              <p>Contatto editoriale</p>
            </div>
            <div className="grid text-xs content-center justify-items-center border border-r-black">
              <p>Servizi</p>
            </div>
            <div className="grid text-xs content-center justify-items-center border border-r-black">
              <p>Agenda/Eventi</p>
            </div>
            <div className="grid text-xs content-center justify-items-center border border-r-black">
              <p>Mappa dell’attivismo</p>
            </div>
            <div className="grid text-xs content-center justify-items-center border border-r-black">
              <p>Inchieste crowdfunding</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Header;
