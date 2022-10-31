import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

export default function MyList(props) {

  let objvalue = {
    id: 1,
    prontuario: '',
    paciente: '',
    data: ''
  }

  return (
    <ThemeProvider theme={theme}>
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {props.objetarray.map((value) => {
        objvalue = value
        const labelId = `checkbox-list-label-${objvalue.id}`;

        return (
          <ListItem
            key={objvalue.id}
            sx={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', margin: '5px', bgcolor: '#EDF2F7', width: '100%'}}
            secondaryAction={
              <div>
                <Button variant="contained" color="error">Ver Erros</Button>
                <Button sx={{ marginLeft:'5px' }} variant="contained" color="success">Continuar</Button>
              </div>
            }
          >
            <ListItemText id={labelId} primary={`Prontuario: ${objvalue.prontuario} - Paciente: ${objvalue.paciente} - Data: ${objvalue.data}` } />
          </ListItem>
        );
      })}
    </List>
    </ThemeProvider>
  );
}