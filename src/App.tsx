import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import GlobalStyle from "styles/GlobalStyle";
import axios from "axios";
import { getSession, inSession, setSession } from "utils";
import { ApiDataType } from "types";
import NotFound from 'pages/NotFound';

function App() {
  const [data, setData] = useState<ApiDataType>();
  const [baseDate, setBaseDate] = useState<number>(0);

  useEffect(() => {
    if (inSession("data")) {
      setData(getSession("data") as ApiDataType);
      setBaseDate(getSession("baseDate") as number);
    } else {
      (async () => {
        const { data } = await axios.get("homeworks/links");
        const baseDate = new Date().getTime();
        setSession("data", data);
        setData(data);
        setSession("baseDate", baseDate);
        setBaseDate(baseDate);
      })();
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route
            path="/"
            element={<LinkPage data={data} baseDate={baseDate} />}
          ></Route>
          <Route path="/:key" element={<DetailPage data={data} />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
