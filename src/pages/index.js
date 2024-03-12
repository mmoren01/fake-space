import Image from 'next/image'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import mmProfileImage from '../../public/mm-profile-image.jpeg'

const styles = {
  pageRoot: {
    height: 'calc(100vh - 128px)',
  },
  imageContainer: {
    height: 200,
    width: 200,
    borderRadius: '50%',
    overflow: 'hidden',
  },
}

export async function getServerSideProps(context) {
  const postsResponse = await fetch('http://localhost:3000/api/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const userResponse = await fetch('http://localhost:3000/api/user/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  
  const posts = await postsResponse.json()
  const user = await userResponse.json()

  return {
    props: {
      user,
      posts,
    },
  }
}

export default function Home({ user, posts }) {
  return (
    <Grid container px={{ sm: 4, md: 8 }} sx={styles.pageRoot}>
      <Grid item xs={4} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography variant='h3'>{user.name}</Typography>
        <Box sx={styles.imageContainer}>
          <Image
            src={mmProfileImage}
            alt='Mauricio'
            height={200}
            width={200}
            priority
          />
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Stack>
          <Typography variant='body1' sx={{ mt: 10 }}>
            {`${user.age} years old`}
          </Typography>
          <Typography variant='body1'>{user.sex}</Typography>
          <Typography variant='body1'>
            {`${user.city}, ${user.state}`}
          </Typography>
          <Typography variant='body1'>{user.country}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={5}>
        Post Section
        {posts.map(({ author, id, content, date }) => {
          const formattedDate = new Date(date).toLocaleDateString()

          return (
            <Accordion key={id}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant='h6' sx={{ mr: 8 }}>{author}</Typography>
                <Typography variant='h6'>{formattedDate}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {content}
                </Typography>
              </AccordionDetails>
              
            </Accordion>
          )})}
      </Grid>
    </Grid>
  )
}
