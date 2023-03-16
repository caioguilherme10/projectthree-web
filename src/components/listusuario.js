import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

export default function MyList(props) {

  let objvalue = {
    id: 1,
    email: '',
    nome: '',
  }

  let navigate = useNavigate()

  const handleResumo = async () => {
      navigate("/resumousuario", { replace: true })
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
            sx={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', margin: '5px', bgcolor: '#EDF2F7'}}
            secondaryAction={
              <Button variant="contained" color="success" onClick={handleResumo}>Ver</Button>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemText id={labelId} primary={`Email: ${objvalue.email} - Nome: ${objvalue.nome}` } />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </ThemeProvider>
  );
}