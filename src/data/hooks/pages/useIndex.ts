import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { apiService } from "../../services/apiService";
import {Pet} from "./../../../data/@types/pets"

export function useIndex(){
  const [petsList, setPetList] = useState<Pet[]>([]);

  useEffect(()=>{
    apiService.get('/pets')
    .then(response=>{
      setPetList(response.data)
    })
  },[])

  const [petSelecionado, setPetSelecionado] = useState<Pet | null>(null);
  const [email,setEmail] = useState<string>("");
  const [valor, setValor] = useState<number | string>("");
  const [message, setMessage] = useState("");

  useEffect(()=>{
    if(petSelecionado===null){
      limparFormulario();
    }
  },[petSelecionado])
  
  function adotar(){
    if(petSelecionado !== null){
      if(validarDadosAdoção()){
        apiService.post('adocoes',{
          pet_id:petSelecionado.id,
          email,
          valor
        })
        .then(()=>{
          setPetSelecionado(null);
          setMessage('Pet adotado com sucesso!')
        })
        .catch((error : AxiosError)=>{
          const typeErro = Object.keys(error.response.data.errors)
          console.log(TypeError)
          setMessage(Object.keys(error.response.data.errors).length>1?
          "Email inválido e o valor tem que está entre 10 a 100 reais":
          error.response.data.errors[typeErro]
          )
        })

      }
    }
  }
  function limparFormulario(){
    setEmail("");
    setValor("");
  }
  function validarDadosAdoção(){
    return email.length>0 && valor > 0;
  }

  return {petsList, petSelecionado, setPetSelecionado,email,setEmail,valor,
    setValor,message,setMessage, adotar
  }
}