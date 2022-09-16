import React from 'react';

import { Routes, Route } from "react-router-dom";

import NewChecklist from './pages/analista/newchecklist';
import ChecklistClinico from './pages/analista/checklistclinico';
import ProcedimentosClinicoP1 from './pages/analista/procedimentosclinicop1';
import ProcedimentosClinicoP2 from './pages/analista/procedimentosclinicop2';
import ProcedimentosClinicoP3 from './pages/analista/procedimentosclinicop3';
import Procedimentosclinicop4 from './pages/analista/procedimentosclinicop4';
import Procedimentosclinicop5 from './pages/analista/procedimentosclinicop5';
import Procedimentosclinicop6 from './pages/analista/procedimentosclinicop6';

const Routess = () => {
    return (
        <Routes>
            <Route path="/" element={<NewChecklist />}/>
            <Route path="/checkclinico" element={<ChecklistClinico />}/>
            <Route path="/procedimentosclinicop1" element={<ProcedimentosClinicoP1 />}/>
            <Route path="/procedimentosclinicop2" element={<ProcedimentosClinicoP2 />}/>
            <Route path="/procedimentosclinicop3" element={<ProcedimentosClinicoP3 />}/>
            <Route path="/procedimentosclinicop4" element={<Procedimentosclinicop4 />}/>
            <Route path="/procedimentosclinicop5" element={<Procedimentosclinicop5 />}/>
            <Route path="/procedimentosclinicop6" element={<Procedimentosclinicop6 />}/>
        </Routes>
    );
};

export default Routess;