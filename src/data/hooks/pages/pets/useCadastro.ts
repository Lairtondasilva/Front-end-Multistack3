import {useState} from 'react'
import { apiService } from '../../../services/apiService';

export function useCadastro (){
  const [nome, setNome] = useState(""),
        [historia, setHistoria] = useState(""),
        [foto, setFoto] = useState(""),
        [mensagem, setMensagem] = useState("");

  function cadastrar (){
    if(validarFormulario()){
        apiService.post("/pets",{
          nome,
          historia,
          foto
        }).then(()=>{
          limpar()
          setMensagem("Pet cadastrado com suceeso")
        }).catch(error=>{
          setMensagem(error.response?.data.message)
        })
    }else{
      setMensagem("Preencha todos os campos!!!")
    }
  }
  function validarFormulario(){
    return nome.length > 2 && historia.length >20 && foto.length > 5;
  }
  function limpar (){
    setNome("");
    setHistoria("");
    setFoto("");
  }
  return {
    nome, 
    setNome, 
    historia, 
    setHistoria, 
    foto, 
    setFoto, 
    mensagem, 
    setMensagem,
    cadastrar
  }
}