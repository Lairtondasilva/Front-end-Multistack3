import { CabecalhoContainer, Logo, LinksContainer} from "./cabecalhoAdmin.style";
import {Link, Box} from '@mui/material'
import NextLink from 'next/link'

export default function CabecalhoAdmin(){
  return(
    <CabecalhoContainer>
      <div>
        <Logo src='/img/logo.svg' alt="logo do site adote um pet"></Logo>
        <LinksContainer>
          <Link component={NextLink} href="/pets/cadastro">
            <a>Cadastrar Pet</a>
          </Link>
          <Link component={NextLink} href="/pets/relatorio">
            <a>Relatório <Box component={'span'} 
              sx={{display:{sm:'initial', xs:'none'}}}>de Adoções</Box></a>
          </Link>
        </LinksContainer>
      </div>
    </CabecalhoContainer>
  );
}