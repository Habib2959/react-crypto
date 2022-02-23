import { Box } from '@mui/material';
import './App.css';
import Header from './header/Header';
import Body from './mainBody/Body';
import RightSideBar from './rightSideBar/RightSideBar';
import SideBar from './sidebar/Sidebar';
import Section from './mainBody/Section';
import Document from './mainBody/Document';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Box sx={{ display: "flex", bgcolor: "rgba(0, 0, 0, 1)", pt: 2, flexWrap: "wrap" }}>
          <SideBar />
          <Routes>
              <Route path="/" element={ <Body />} />
              <Route path="/section/:id" element={<Section />}/>
              <Route path="documentation" element={<Document />} />
          </Routes>
          <RightSideBar />
        </Box>
      </Box>
    </>
  );
}

export default App;
