import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/App/App";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./constans/theme";
import "normalize.css";
import { Global, css } from "@emotion/react";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Global
                styles={css`
                    p {
                        padding: 0;
                        margin: 0;
                    }
                    ,
                    ul {
                        padding: 0;
                        margin: 0;
                        list-style: none;
                    }
                    span {
                        display: block;
                    }
                    body {
                        font-family: Roboto;
                    }
                `}
            />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.querySelector("#root")
);
