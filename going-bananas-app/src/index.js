import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Camera } from "./camera";
import { Preview, Footer } from "./styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopMenu from './top-menu/top-menu.component';

import "./styles.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FEE440",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#A2D2FF",
            contrastText: "#FFFFFF"
        }
    }
})
// import {
//   Box,
//   Button,
//   Typography
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import AddIcon from "@mui/icons-material/Add";

//this is for the theme color
//theme color1: FEE440
//theme color2: A2D2FF
//using other colors: white, gray

/*
function Center({ children }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
        >
            {children}
        </div>
    );
}

const MainContent = () => {
  return (
    <div className="MainContent">
      <Box
        className="boxOne"
        sx={{
          height: 1000,
          backgroundColor: "white",
          border: 0
        }}
      >
        <Button
          className="uploadPicButton"
          sx={{ border: 1, height: 600, width: 500 }}
        >
          <AddIcon />
        </Button>
      </Box>
      <Box
        className="boxTwo"
        sx={{
          height: 1000,
          border: 0
        }}
      >
        <Center>
          <div className="allTitle">
            <Typography
              className="banaRecTitle"
              variant="h3"
              color="gray"
              sx={{ m: 1 }}
            >
              <div>Let's recognize some&nbsp;</div>
              <div className="banana">banana</div>
              <div>! </div>
            </Typography>
            <Typography variant="p" color="gray" sx={{ m: 1 }}>
              Click the yellow box on your left to take your first banana
              picture
            </Typography>
            <Box sx={{ height: 100 }}></Box>
            <div sx={{ m: 2 }}>
              <StyledButton />
            </div>
          </div>
        </Center>
      </Box>
    </div>
  );
};

const StyledButton = () => {
  return (
    <Button
      variant="contained"
      onClick={() => {
        //this alert fucntion should be changed into leading toward the next big frame
        alert("clicked");
      }}
      size="large"
    >
      upload your banana from here!
    </Button>
  );
};

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TopMenu />
        <MainContent />
      </ThemeProvider>
    </div>
  );
}

*/

const App = () => {

    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [cardImage, setCardImage] = useState();

    return (
        <div>
            <ThemeProvider theme = {theme}>
                <TopMenu />

                {isCameraOpen ? (
                <Camera
                    onCapture={blob => setCardImage(blob)}
                    onClear={() => setCardImage(undefined)}
                />
                ) : undefined}

                {cardImage && (
                <div>
                    <h2>Preview</h2>
                    <Preview src={cardImage && URL.createObjectURL(cardImage)} />
                </div>
                )}

                <Footer>
                <button 
                    onClick={() => 
                    setIsCameraOpen(true)
                    }
                >
                    Open Camera
                </button>

                <button
                    onClick={() => {
                    setIsCameraOpen(false);
                    setCardImage(undefined);
                    }}
                >
                    Close Camera
                </button>
                </Footer>
            </ThemeProvider>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);