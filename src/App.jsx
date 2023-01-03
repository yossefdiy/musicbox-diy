import { Typography, TextField, AppBar, Paper, Grid, Button } from '@mui/material'
import { Container } from '@mui/system'
import './App.css'
import useSound from 'use-sound'
import audio1 from './souns/b1.mp3'
import audio2 from './souns/s1.mp3'
import audio3 from './souns/h1.mp3'
import audio4 from './souns/t1.mp3'

function App() {
  const [play1] = useSound(audio1)
  const [play2] = useSound(audio2)
  const [play3] = useSound(audio3)
  const [play4] = useSound(audio4)




  
  return (


    <div className='app'>

      <Container sx={{
        backgroundColor: '#efc61c',
        color: '#b1844a',

        width: '100%',
        height: '450px'
      }}>
        <Typography

          fontSize={'50px'}
        >drum kit
        </Typography>


        <TextField id="outlined-basic" label="Outlined" variant="outlined" Color='white'
        />
        <Paper sx={{ backgroundColor: 'black', height: '200px' }} elevation={20}>drum kit

          <Grid container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center">
            <Grid><Button onClick={play1} sx={{ color: 'pink' }} size='large'>BD</Button></Grid>
            <Grid><Button onClick={play2} sx={{ color: 'red' }} size='large'>SD</Button></Grid>
            <Grid><Button onClick={play3} sx={{ color: 'green' }} size='large'>HT</Button></Grid>
          </Grid>
          <Grid container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center">
            <Grid><Button onClick={play4} sx={{ Color: 'red' }} size='large'>T1</Button></Grid>
            <Grid><Button onClick={play1}sx={{ Color: 'green' }} size='large'>df</Button></Grid>
            <Grid><Button   onClick={play3}sx={{ Color: 'yellow' }} size='large'>dg</Button></Grid>
          </Grid>
          <Grid container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center">
            <Grid><Button onClick={play4}  sx={{ Color: 'gray' }} size='large'>db</Button></Grid>
            <Grid><Button onClick={play2} sx={{ Color: 'red' }} size='large'>df</Button></Grid>
            <Grid><Button onClick={play3}  sx={{ Color: 'blue' }} size='large'>dg</Button></Grid>
          </Grid>
          <Typography>drum kit 80s style</Typography>
        </Paper>

        <AppBar sx={{ color: '#b1844a', fontFamily: 'revert-layer', fontSize: '50px', backgroundColor: '#efc61c', padding: '20px' }}>diy music</AppBar>

      </Container>
    </div>
  )
}

export default App
