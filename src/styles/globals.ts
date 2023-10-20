import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: #000000;
  font-size: 14px;
  color: #FFFFFF;
  font-family: sans-serif, Helvetica, -apple-system;
}

code {
  font-family: Courier, monospace ;
}
`;

// type DataGlob = {
//   idacesso: number;
//   idemp: number;
//   nmfant: string;
//   iduser: number;
//   idnmuser: string;
//   pswuser: string;
//   pin: string;
//   mail: string;
//   fonec: string;
//   net: number;
//   lvMod: number;
//   nmModulo: string;
//   pinAdm: string;
//   logado: boolean;
//   datetimei: string;
//   datetimef: string;
//   tempo: string
// }

// export const Datalog: DataGlob  = {

// }

//       // datalog[3] => fant;
//       // datalog[4] => id_user;
//       // datalog[5] => id_nmuser;
//       // datalog[6] => nm_modulo;
//       // datalog[7] => level_modulo;
//       // datalog[8] => datetime_ini;
//       // datalog[9] => datetime_fim;
