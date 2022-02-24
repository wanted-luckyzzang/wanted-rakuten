import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import GlobalStyle from "styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

function App() {
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
