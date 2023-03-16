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
import DadosAuditor from './pages/auditor/dados';
import ListChecklistAuditor from './pages/auditor/checklist';
import ResumoAuditor from './pages/auditor/resumo';
import DadosDigitador from './pages/digitador/dados';
import ListChecklistDigitador from './pages/digitador/checklist';
import ResumoDigitador from './pages/digitador/resumo';
import DadosAdmin from './pages/admin/dados';
import CadastroAdmin from './pages/admin/cadastro';
import ListUsuarios from './pages/admin/listusuarios';
import ResumoUsuario from './pages/admin/usuario';

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
            <Route path="/dadosauditor" element={<DadosAuditor />}/>
            <Route path="/listchecklistauditor" element={<ListChecklistAuditor />}/>
            <Route path="/resumoauditor" element={<ResumoAuditor />}/>
            <Route path="/dadosdigitador" element={<DadosDigitador />}/>
            <Route path="/listchecklistdigitador" element={<ListChecklistDigitador />}/>
            <Route path="/resumodigitador" element={<ResumoDigitador />}/>
            <Route path="/dadosadmin" element={<DadosAdmin />}/>
            <Route path="/cadastroadmin" element={<CadastroAdmin />}/>
            <Route path="/listusuarios" element={<ListUsuarios />}/>
            <Route path="/resumousuario" element={<ResumoUsuario />}/>
        </Routes>
    );
};

export default Routess;