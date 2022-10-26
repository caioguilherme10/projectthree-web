import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function createData1(procedimento, codigo, comp1, comp2, comp3) {
  return { procedimento, codigo, comp1, comp2, comp3 };
}

function createData2(procedimento, codigo, qtd, nome) {
  return { procedimento, codigo, qtd, nome };
}

function createData3(profissional, cbo, qtd, nome) {
  return { profissional, cbo, qtd, nome };
}

function createData4(opm, codigo, comp, qtd, fornecedor, nnf) {
  return { opm, codigo, comp, qtd, fornecedor, nnf };
}

function createData5(exame, codigo, qtd) {
  return { exame, codigo, qtd };
}

const rows1 = [
  createData1('CONSULTAS MEDICAS', '03.01.01.017-0', 3, 4, 6),
  createData1('DIA ACOM MENOR', '08.02.01.002-4', 9, 7, 4),
  createData1('PERM.MAIOR', '08.02.01.019-9', 6, 4, 6),
  createData1('SONDA VESICAL', '03.01.10.005-5', 3, 7, 4),
  createData1('SONDA VESICAL ALIVIO', '03.01.10.004-7', 6, 9, 3),
  createData1('PVC', '03.01.10.008-0', 6, 9, 3),
];

const rows2 = [
  createData2('CURATIVO II', '04.01.01.001-5', 6, ''),
  createData2('SEDAÇAO', '04.17.01.006-0', 9, ''),
  createData2('ANASTESIA GERAL', '04.17.01.004-4', 1, ''),
  createData2('RETIRADA DRENO', '04.12.03.012-8', 3, ''),
  createData2('TRAQUEOSTOMIA', '04.12.01.012-7', 1, ''),
  createData2('TORACOCENTESE', '04.12.05.017-0', 1, ''),
];

const rows3 = [
  createData3('EFE - Enfermagem Emergencia', '223505', 6, ''),
  createData3('FNA - Fonoaudiologia', '223810', 9, ''),
];

const rows4 = [
  createData4('BALAO DESTACAVEL', '07.02.01.00.14', 6, 1, '', ''),
  createData4('CAT CENTRAL', '07.02.04.015-0', 9, 1, '', ''),
];

const rows5 = [
  createData5('ACIDO URICO', '02.02.01.012.0', 6),
  createData5('AMILASE', '02.02.01.018-0', 9),
  createData5('ASLO', '02.02.03.047-4', 1),
  createData5('CALCIO', '02.02.01.021-0', 3),
  createData5('HEMOGRAMA COMPLETO', '02.02.02.038-0', 1),
  createData5('LATEX', '02.02.09.030-2', 1),
];

const row6 = 'sdfasdfsadfsdfsdfsdfsdfasdfasdfasdfsdfafasdfasdfasfasdfsadfdsfsad'

export default function DenseTable() {
  return (
    <ThemeProvider theme={theme}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Procedimentos</TableCell>
            <TableCell align="right">Codigo</TableCell>
            <TableCell align="right">Comp</TableCell>
            <TableCell align="right">Comp</TableCell>
            <TableCell align="right">Comp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow
              key={row.procedimento}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.procedimento}
              </TableCell>
              <TableCell align="right">{row.codigo}</TableCell>
              <TableCell align="right">{row.comp1}</TableCell>
              <TableCell align="right">{row.comp2}</TableCell>
              <TableCell align="right">{row.comp3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell>Procedimentos</TableCell>
            <TableCell align="right">Codigo</TableCell>
            <TableCell align="right">QTD</TableCell>
            <TableCell align="right">Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow
              key={row.procedimento}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.procedimento}
              </TableCell>
              <TableCell align="right">{row.codigo}</TableCell>
              <TableCell align="right">{row.qtd}</TableCell>
              <TableCell align="right">{row.nome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell>Profissional</TableCell>
            <TableCell align="right">CBO</TableCell>
            <TableCell align="right">QTD</TableCell>
            <TableCell align="right">Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows3.map((row) => (
            <TableRow
              key={row.profissional}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.profissional}
              </TableCell>
              <TableCell align="right">{row.cbo}</TableCell>
              <TableCell align="right">{row.qtd}</TableCell>
              <TableCell align="right">{row.nome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell>OPM</TableCell>
            <TableCell align="right">Codigo</TableCell>
            <TableCell align="right">Comp</TableCell>
            <TableCell align="right">QTD</TableCell>
            <TableCell align="right">Fornecedor</TableCell>
            <TableCell align="right">NªNF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows4.map((row) => (
            <TableRow
              key={row.opm}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.opm}
              </TableCell>
              <TableCell align="right">{row.codigo}</TableCell>
              <TableCell align="right">{row.comp}</TableCell>
              <TableCell align="right">{row.qtd}</TableCell>
              <TableCell align="right">{row.fornecedor}</TableCell>
              <TableCell align="right">{row.nnf}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell>Exame</TableCell>
            <TableCell align="right">Codigo</TableCell>
            <TableCell align="right">QTD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows5.map((row) => (
            <TableRow
              key={row.exame}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.exame}
              </TableCell>
              <TableCell align="right">{row.codigo}</TableCell>
              <TableCell align="right">{row.qtd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell>Observaçoes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row6}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
  );
}