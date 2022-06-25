export  const textService = {
    limitarTexto(text:string, tamanhoMax:number ):string{
          if(text.length<tamanhoMax){
            return text;
          }
            return text.slice(0,tamanhoMax)+"...";
    }
}