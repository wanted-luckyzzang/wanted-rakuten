import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import GlobalStyle from "styles/GlobalStyle";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("homeworks/links");
      setData(data);
    })();
  }, []);
  console.log(data);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<LinkPage />}></Route>
          <Route path="/:id" element={<DetailPage />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
