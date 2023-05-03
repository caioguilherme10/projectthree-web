import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

export default function PaginationRounded(value) {
  console.log(value);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <ThemeProvider theme={theme}>
        <Stack spacing={2}>
            <Pagination count={value.count} page={page} onChange={handleChange} variant="outlined" shape="rounded" />
        </Stack>
    </ThemeProvider>
  );
}