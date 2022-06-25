import { NextPage } from "next";
import Titulo from "../../ui/components/titulo/titulo";
import {Table, TableBody, TableRow, TableHead, Paper, TableCell, TableContainer} from '@mui/material';
import {useRelatorio} from "../../data/hooks/pages/pets/useRelatorio";

 const Relatorio: NextPage = ()=>{
  const {listaRelatorio} = useRelatorio();
  return (
    <>
      <Titulo
        titulo={"Relatório de Adoções"}
        subtitulo={"Veja a lista de pets adotados"}
      />
      <TableContainer component={Paper} sx={{maxWidth:970, margin:'auto', p:{xs:3, md:5}}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Email
              </TableCell>
              <TableCell>
                Pet
              </TableCell>
              <TableCell align="right">
                Valor Mensal
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaRelatorio.map(adocao =>(
            <TableRow key={adocao.id}>
              <TableCell>
                {adocao.pet.nome}
              </TableCell>
              <TableCell>
                {adocao.email}
              </TableCell>
              <TableCell align="right">
                {adocao.valor}
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Relatorio;