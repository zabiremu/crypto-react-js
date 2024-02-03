import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Cryptocurrencies,
  CryptoDetails,
  Homepage,
  Exchanges,
  News,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route excat path="/" element={<Homepage />} />
              <Route excat path="/exchanges" element={<Exchanges />} />
              <Route
                excat
                path="/crypto-currency"
                element={<Cryptocurrencies />}
              />
              <Route
                excat
                path="/crypto-details/:coinId"
                element={<CryptoDetails />}
              />
              <Route excat path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptomeria <br />
            All right reserved
          </Typography.Title>
          <Space>
            <Link to="/"> Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
