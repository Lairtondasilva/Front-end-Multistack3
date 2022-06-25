import type { NextPage } from 'next'
import Titulo from '../ui/components/titulo/titulo'
import Lista from '../ui/components/Lista/lista'
import { Dialog , Grid, TextField, DialogActions, Button, Snackbar} from '@mui/material' //cria um modal
import { useIndex } from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {petsList, petSelecionado ,setPetSelecionado, email,
    setEmail, valor, setValor, message, setMessage, adotar
  } = useIndex();
  return (
    <div >
        <Titulo titulo="" subtitulo={
          <span>
                Com um pequeno valor mensal, você <br/>
                pode <strong>adotar um pet virtualmente</strong>
          </span>
        }/>
        <Lista pets={petsList} onSelect={(pet)=>setPetSelecionado(pet)}/>
        <Dialog open={petSelecionado !== null}
          fullWidth
          PaperProps={{sx:{p:5}}}//cria uma padding no modal
          onClose={()=>setPetSelecionado(null)}
        >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField 
                  label={"E-mail"}
                  type={"email"}
                  fullWidth
                  value = {email}
                  onChange = {(e)=>setEmail(e.target.value)}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  label={"Quantia por mês:"}
                  type={"number"}
                  fullWidth
                  value = {valor}
                  onChange={(e)=>setValor((isNaN(parseFloat(e.target.value))?
                    "" : parseFloat(e.target.value)
                    ))}
                  />
              </Grid>
            </Grid>
            <DialogActions sx={{mt:5}}>
              <Button color={'secondary'} onClick={()=>setPetSelecionado(null)}>
                Cancelar
              </Button>
              <Button variant={'contained'} onClick=
              {()=>adotar()}>
                confirmar Doação
              </Button>
            </DialogActions>
          </Dialog>
          <Snackbar open={message.length>0}
          message={message}
          autoHideDuration={2500}
          onClose={()=>setMessage("")}
          />
    </div>
  )
}

export default Home
