import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Head from 'next/head'

const styles = {
  header: {
    marginBottom: '2rem',
    color: 'white',
    backgroundColor: 'primary.main',
  },
  headerText: {
    margin: 0,
    padding: '1rem',
  },
}

export default function Layout ({ children }) {
  return (
    <Stack>
      <Head>
        <title>Fake Space</title>
        <meta
          name="description"
          content="Generated by create next app and Mauricio's noggin" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={styles.header} component="header">
        <Typography
          component="h1"
          variant="h3"
          sx={styles.headerText}
        >
          Fake Space
        </Typography>
      </Box>
      <Container component="main">
        {children}
      </Container>
    </Stack>
  )
}