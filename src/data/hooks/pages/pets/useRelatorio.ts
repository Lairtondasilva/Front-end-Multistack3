import { useEffect, useState } from "react";
import { Relatorio } from "../../../@types/relatorio";
import { apiService } from "../../../services/apiService";

export function useRelatorio(){
  const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([]);
  useEffect(()=>{
    apiService.get('/adocoes').then(resp => 
      setListaRelatorio(resp.data)
      
      )
  },[])
  return {
    listaRelatorio
  }
}