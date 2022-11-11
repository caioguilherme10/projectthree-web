import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MyList(props) {

  let objvalue = {
    id: 1,
    prontuario: '',
    paciente: '',
    data: ''
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                <Button variant="contained" color="error" onClick={handleOpen}>Ver Erros</Button>
                <Button sx={{ marginLeft:'5px' }} variant="contained" color="success">Continuar</Button>
              </div>
            }
          >
            <ListItemText id={labelId} primary={`Prontuario: ${objvalue.prontuario} - Paciente: ${objvalue.paciente} - Data: ${objvalue.data}` } />
          </ListItem>
        );
      })}
    </List>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comentarios do Auditor
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            comentarios...
          </Typography>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}