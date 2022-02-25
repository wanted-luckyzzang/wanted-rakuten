import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { ApiDataType } from "types";
import { getSession, inSession, setSession } from "utils";
import { NotData } from "pages/ErrorPage";
import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import GlobalStyle from "styles/GlobalStyle";

function App() {
  const [data, setData] = useState<ApiDataType>();
  const [baseDate, setBaseDate] = useState<number>(0);
  const [nowDate, setNowDate] = useState<number>(0);

  useEffect(() => {
    if (inSession("data")) {
      setData(getSession("data") as ApiDataType);
      setBaseDate(getSession("baseDate") as number);
    } else {
      const date = new Date().getTime();
      setSession("baseDate", date);
      setBaseDate(date);
      (async () => {
        try {
          const { data } = await axios({
            method: "GET",
            url: "https://cors-anywhere.herokuapp.com/https://storage-fe.fastraffic.io/homeworks/links",
          });
          setSession("data", data);
          setData(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
    setNowDate(new Date().getTime());
    const timer = setInterval(() => setNowDate(new Date().getTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {data ? (
        <BrowserRouter>
          <GlobalStyle />
          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  <LinkPage data={data} baseDate={baseDate} nowDate={nowDate} />
                }
              ></Route>
              <Route
                path="/:key"
                element={
                  <DetailPage
                    data={data}
                    baseDate={baseDate}
                    nowDate={nowDate}
                  />
                }
              ></Route>
            </Routes>
          </Container>
        </BrowserRouter>
      ) : (
        <NotData />
      )}
    </>
  );
}

export default App;
