import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import tema from '../ui/themes/tema';
import Cabecalho from '../ui/components/cabecalho/cabecalho';
import CabecalhoAdimin from '../ui/components/cabecalhoAdmin/cabecalhoAdmin';
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  return (
  <ThemeProvider theme={tema}>
    {route.pathname === '/' ? <Cabecalho/> : <CabecalhoAdimin/>}
      <Component {...pageProps} />
</ThemeProvider>);
}
export default MyApp
