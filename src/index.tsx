import * as React from "react";
import * as ReactDom from "react-dom";

import  App from "./components/app";

ReactDom.render(
    <App compiler = "TypeScript" framework ="React" />,
    document.getElementById("app")
);