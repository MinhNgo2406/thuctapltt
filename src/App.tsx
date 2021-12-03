import React from 'react';
import './App.css';
import Login from './components/login/Login';
import Forgetpassword from './components/forgetpassword/forgetpassword';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuiEmail from './components/GuiEmail/GuiEmail';
import ComponentsRouter from './ComponentsRouter';
import DBRouterMonth from './components/DBRouter/DBRouterMonth/DBRouterMonth';
import DBRouterWeek from './components/DBRouter/DBRouterWeek/DBRouterWeek';
import DBRouterYear from './components/DBRouter/DBRouterYear/DBRouterYear';
import DBRouterMap from './components/DBRouter/DBRouterMap/DBRouterMap';
import DBRouterQLCB from './components/DBRouter/DBRouterQLCB/DBRouterQLCB';
import DBRouterPGD from './components/DBRouter/DBRouterPGD/DBRouterPGD';
import DBRouterATM from './components/DBRouter/DBRouterATM/DBRouterATM';
import DBRouterAL from './components/DBRouter/DBRouterAL/DBRouterAL';
import DBRouterQTC from './components/DBRouter/DBRouterQTC/DBRouterQTC';
import DBRouterUpdate from './components/DBRouter/DBRouterUpdate/DBRouterUpdate';
import DBRouterQTC_Add from './components/DBRouter/DBRouterQTC_Add/DBRouterQTC_Add';
import DBRouterQLND from './components/DBRouter/DBRouterQLND/DBRouterQLND';
import DBRouterQLND_Add from './components/DBRouter/DBRouterQLND_Add/DBRouterQLND_Add';
import DBRouterQLND_Update from './components/DBRouter/DBRouterQLND_Update/DBRouterQLND_Update';
import DBRouterQLTB_GSM from './components/DBRouter/DBRouterQLTB_GSM/DBRouterQLTB_GSM';
import DBRouterCDTB from './components/DBRouter/DBRouterCDTB/DBRouterCDTB';
import DBROuter_skk from './components/DBRouter/DBRouter_skk/DBRouter_skk';
import DBRouter_themsdt from './components/DBRouter/DBRouter_themsdt/DBRouter_themsdt';
import DBRouter_tt1 from './components/DBRouter/DBRouter_tt1/DBRouter_tt1';
import DBRouter_tt2 from './components/DBRouter/DBRouter_tt2/DBRouter_tt2';

function App() {
  return (
    <Router>
      <div className="BaiTap">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/GuiEmail" element={<GuiEmail />} />
          <Route path="/router" element={<ComponentsRouter />} />
          <Route path="/Month" element={<DBRouterMonth />} />
          <Route path="/Week" element={<DBRouterWeek />} />
          <Route path="/Year" element={<DBRouterYear />} />
          <Route path="/gsmmap" element={<DBRouterMap />} />
          <Route path="/db" element={<ComponentsRouter />} />
          <Route path="/qlcb" element={<DBRouterQLCB />} />
          <Route path="/PGD" element={<DBRouterPGD />} />
          <Route path="/ATM" element={<DBRouterATM />} />
          <Route path="/AL" element={<DBRouterAL />} />
          <Route path="/QTC" element={<DBRouterQTC />} />
          <Route path="/capnhat" element={<DBRouterUpdate />} />
          <Route path="/themmoi" element={<DBRouterQTC_Add />} />
          <Route path="/QLND" element={<DBRouterQLND />} />
          <Route path="/qlndadd" element={<DBRouterQLND_Add />} />
          <Route path="/QLNDU" element={<DBRouterQLND_Update />} />
          <Route path="/qltbgsm" element={<DBRouterQLTB_GSM />} />
          <Route path="/caidatdropdwon" element={<DBRouterCDTB />} />
          <Route path="/themsokhancap" element={<DBROuter_skk />} />
          <Route path="/themsdt" element={<DBRouter_themsdt />} />
          <Route path="/trangthai1" element={<DBRouter_tt1 />} />
          <Route path="/trangthai2" element={<DBRouter_tt2 />} />
        </Routes>
      </div>
    </Router>




  );
}

export default App;
