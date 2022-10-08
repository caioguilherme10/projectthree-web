import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

export default function UploadButtons() {
  return (
    <ThemeProvider theme={theme}>
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>
    </ThemeProvider>
  );
}