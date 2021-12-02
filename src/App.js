import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container }from '@mui/material';
import "./App.css";
import BookList from "./components/BookList";
import Header from "./components/Header";



function App() {

    return (
      <>
      <Router>
          <Header />
          <Container maxWidth="100%" className="container-book">
          <Routes>
            <Route path="/Book-Henri-Potier/cart" />
            <Route path="/Book-Henri-Potier/" element={<BookList />} />
          </Routes>
          </Container>
      </Router>
    </>
    );
  }

export default App;
