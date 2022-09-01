import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Camera } from "./camera";
import { Preview, Footer } from "./styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopMenu from './top-menu/top-menu.component';
import WelcomePage from "./main-content/welcome-page.component";

import "./styles.css";

/* this is for the theme color
 * theme color1: FEE440
 * theme color2: A2D2FF
 * using other colors: white, gray
 */

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

/*

export default function App() {
  return (
<<<<<<< HEAD
    <Fragment>
      <Root>
        <Header />

        {isCameraOpen && (
          <Camera
            onCapture={blob => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
          />
        )}

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
            variant = "outlined"
          >
              Open Camera
          </button>

          <button
            onClick={() => {
              setIsCameraOpen(false);
              setCardImage(undefined);
            }}
            variant = "outlined"
          >
            Close Camera
          </button>
        </Footer>
        
      </Root>
      <GlobalStyle />
    </Fragment>
=======
    <div className="App">
      <ThemeProvider theme={theme}>
        <TopMenu />
        <MainContent />
      </ThemeProvider>
    </div>
>>>>>>> 80ca679020bb833c2db7bd923b69b60de8907646
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

                {!isCameraOpen ? <WelcomePage 
                  setIsCameraOpen = {setIsCameraOpen}
                /> : undefined}

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
                {/* <button 
                    onClick={() => 
                    setIsCameraOpen(true)
                    }
                >
                    Open Camera
                </button> */}

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