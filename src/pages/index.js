import Image from 'next/image'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'


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

export async function getServerSideProps() {
  // TODO: Hook this up to a mock API call
  const user = {
    name: 'Mauricio',
    id: 1,
    age: 30,
    sex: 'Male',
    city: 'Glendale',
    state: 'Arizona',
    country: 'United States',
    friends: [ '2', '3', '4' ],
    profileImage: mmProfileImage,
  }

  return {
    props: {
      user,
    },
  }
}

export default function Home({ user }) {
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
            src={user.profileImage}
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
      </Grid>
    </Grid>
  )
}
