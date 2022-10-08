import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

export default function PaginationRounded() {
  return (
    <ThemeProvider theme={theme}>
        <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
    </ThemeProvider>
  );
}