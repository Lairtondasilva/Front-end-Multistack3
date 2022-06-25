import {
    ListaStyled,
    ItemLista,
    Foto,
    Info,
    Nome,
    Descricao
} from  "./lista.style";
import { Button} from "@mui/material";
import { Pet } from "../../../data/@types/pets";
import {textService} from '../../../data/services/TextServices'

interface listaProps{
  pets : Pet[];
  onSelect: (pet:Pet)=>void;
}

export default function Lista (props:listaProps){
  const historiaTamanho = 200;
  return (
      <ListaStyled>
        {props.pets.map(pet=>(
        <ItemLista key={pet.id}>
                  <Foto src={pet.foto} alt={pet.nome} />
                  <Info>
                      <Nome>{pet.nome}</Nome>
                      <Descricao>
                       {textService.limitarTexto(pet.historia,historiaTamanho)}
                      </Descricao>
                      <Button variant={'contained'} fullWidth onClick={()=>props.onSelect(pet)} >Adotar {pet.nome}</Button>
                  </Info>
            </ItemLista>))}
      </ListaStyled>
  )
};