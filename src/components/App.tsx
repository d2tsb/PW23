import { image_map } from "../resources/image_source/image_map";
import "./App.scss";
import "./Texts/Texts";
import "./GithubCrawler/GithubCrawler";
import "./BottomBar/BottomBar";
import "./CopyRight/CopyRight";
import Page from "./Page/Page";
import Impressum from "./Impressum/Impressum";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FNF from "../fnf/FNF";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="Impressum" element={<Impressum />} />
        <Route path="FNF" element={<FNF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;