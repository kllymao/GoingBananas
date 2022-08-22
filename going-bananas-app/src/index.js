import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { Camera } from "./camera";
import { Root, Preview, Footer, GlobalStyle } from "./styles";
import Header from './header/header.component';

const App = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
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
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);