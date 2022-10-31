import React from 'react';

import { Routes, Route } from "react-router-dom";

import Login from './pages/etc/login';
import NewChecklist from './pages/analista/newchecklist';
import ChecklistClinico from './pages/analista/checklistclinico';
import ProcedimentosClinicoP1 from './pages/analista/procedimentosclinicop1';
import ProcedimentosClinicoP2 from './pages/analista/procedimentosclinicop2';
import ProcedimentosClinicoP3 from './pages/analista/procedimentosclinicop3';
import Procedimentosclinicop4 from './pages/analista/procedimentosclinicop4';
import Procedimentosclinicop5 from './pages/analista/procedimentosclinicop5';
import Procedimentosclinicop6 from './pages/analista/procedimentosclinicop6';
import Resumeclinico from './pages/analista/resumeclinico';
import DadosAnalista from './pages/analista/dados';
import Listchecklist from './pages/analista/listchecklist';
import Listcorrecoes from './pages/analista/listcorrecoes';

const Routess = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path="/checklist" element={<NewChecklist />}/>
            <Route path="/checkclinico" element={<ChecklistClinico />}/>
            <Route path="/procedimentosclinicop1" element={<ProcedimentosClinicoP1 />}/>
            <Route path="/procedimentosclinicop2" element={<ProcedimentosClinicoP2 />}/>
            <Route path="/procedimentosclinicop3" element={<ProcedimentosClinicoP3 />}/>
            <Route path="/procedimentosclinicop4" element={<Procedimentosclinicop4 />}/>
            <Route path="/procedimentosclinicop5" element={<Procedimentosclinicop5 />}/>
            <Route path="/procedimentosclinicop6" element={<Procedimentosclinicop6 />}/>
            <Route path="/resumeclinico" element={<Resumeclinico />}/>
            <Route path="/dadosanalista" element={<DadosAnalista />}/>
            <Route path="/listchecklist" element={<Listchecklist />}/>
            <Route path="/listcorrecoes" element={<Listcorrecoes />}/>
        </Routes>
    );
};

export default Routess;