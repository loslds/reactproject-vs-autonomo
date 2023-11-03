import React, { createContext, useReducer } from "react";

export type StateAcesso = {
  correntstep: number;
  idacesso: number;
  idemp: number;
  nmfant: string;
  iduser: number;
  idnmuser: string;
  pswuser: string;
  pin: string;
  mail: string;
  fonec: string;
  net: number;
  idmod: number;
  nmmod: string;
  mdRecep: boolean;
  nmRecep: string;
  mdDesig: boolean;
  nmDesig: string;
  mdProdu: boolean;
  nmProdu: string;
  mdAcaba: boolean;
  nmAcaba: string;
  mdExped: boolean;
  nmExped: string;
  mdAdmin: boolean;
  nmAdmin: string;
  mdMaster: boolean;
  nmMaster: string;
  mdConfig: boolean;
  nmConfig: string;
  pinAdm: number;
  pathpage: string;
  logado: boolean;
  datetimei: string;
  datetimef: string;
  tempo: string;
};

const initialData: StateAcesso = {
  correntstep: 0,
  idacesso: 0,
  idemp: 0,
  nmfant: " ",
  iduser: 0,
  idnmuser: " ",
  pswuser: " ",
  pin: " ",
  mail: " ",
  fonec: " ",
  net: 0,
  idmod: 0,
  nmmod: "",
  mdRecep: false,
  nmRecep: " ",
  mdDesig: false,
  nmDesig: " ",
  mdProdu: false,
  nmProdu: " ",
  mdAcaba: false,
  nmAcaba: " ",
  mdExped: false,
  nmExped: " ",
  mdAdmin: false,
  nmAdmin: " ",
  mdMaster: false,
  nmMaster: " ",
  mdConfig: false,
  nmConfig: " ",
  pinAdm: 0,
  pathpage: " ",
  logado: false,
  datetimei: " ",
  datetimef: " ",
  tempo: " ",
};

// Reducer
export enum AcessoActions {
  setCurrentStep,
  setIdAces,
  setIdEmp,
  setNmFant,
  setIdUser,
  setIdNmUser,
  setPswUser,
  setPin,
  setMail,
  setFoneC,
  setNet,
  setIdMod,
  setNmMod,
  setMdRecep,
  setNmRecep,
  setMdDesig,
  setNmDesig,
  setMdProdu,
  setNmProdu,
  setMdAcaba,
  setNmAcaba,
  setMdExped,
  setNmExped,
  setMdAdmin,
  setNmAdmin,
  setMdMaster,
  setNmMaster,
  setMdConfig,
  setNmConfig,
  setPinAdm,
  setPathPage,
  setLogado,
  setDtIni,
  setDtFim,
  setTmp,
}

type AcessoAction = {
  type: AcessoActions;
  payload: any;
};
const AcessoReducer = (state: StateAcesso, action: AcessoAction) => {
  switch (action.type) {
    case AcessoActions.setCurrentStep:
      return { ...state, currentstep: action.payload };
    case AcessoActions.setIdAces:
      return { ...state, idacesso: action.payload };
    case AcessoActions.setIdEmp:
      return { ...state, idemp: action.payload };
    case AcessoActions.setNmFant:
      return { ...state, nmfant: action.payload };
    case AcessoActions.setIdUser:
      return { ...state, iduser: action.payload };
    case AcessoActions.setIdNmUser:
      return { ...state, idnmuser: action.payload };
    case AcessoActions.setPswUser:
      return { ...state, pswuser: action.payload };
    case AcessoActions.setPin:
      return { ...state, pin: action.payload };
    case AcessoActions.setMail:
      return { ...state, mail: action.payload };
    case AcessoActions.setFoneC:
      return { ...state, fonec: action.payload };
    case AcessoActions.setNet:
      return { ...state, net: action.payload };
    case AcessoActions.setIdMod:
      return { ...state, idmod: action.payload };
    case AcessoActions.setNmMod:
      return { ...state, nmmod: action.payload };
    case AcessoActions.setMdRecep:
      return { ...state, mdrecep: action.payload };
    case AcessoActions.setNmRecep:
      return { ...state, nmrecep: action.payload };
    case AcessoActions.setMdDesig:
      return { ...state, mddesig: action.payload };
    case AcessoActions.setNmDesig:
      return { ...state, nmdesig: action.payload };
    case AcessoActions.setMdProdu:
      return { ...state, mdprodu: action.payload };
    case AcessoActions.setNmProdu:
      return { ...state, nmprodu: action.payload };
    case AcessoActions.setMdAcaba:
      return { ...state, mdacaba: action.payload };
    case AcessoActions.setNmAcaba:
      return { ...state, nmacaba: action.payload };
    case AcessoActions.setMdExped:
      return { ...state, mdexped: action.payload };
    case AcessoActions.setNmExped:
      return { ...state, nmexped: action.payload };
    case AcessoActions.setMdAdmin:
      return { ...state, mdadmin: action.payload };
    case AcessoActions.setNmAdmin:
      return { ...state, nmadmin: action.payload };
    case AcessoActions.setMdMaster:
      return { ...state, mdmaster: action.payload };
    case AcessoActions.setNmMaster:
      return { ...state, nmmaster: action.payload };
    case AcessoActions.setMdConfig:
      return { ...state, mdconfig: action.payload };
    case AcessoActions.setNmConfig:
      return { ...state, nmconfig: action.payload };
    case AcessoActions.setPinAdm:
      return { ...state, pinadm: action.payload };
    case AcessoActions.setPathPage:
      return { ...state, pathpage: action.payload };
    case AcessoActions.setLogado:
      return { ...state, logado: action.payload };
    case AcessoActions.setDtIni:
      return { ...state, datetimei: action.payload };
    case AcessoActions.setDtFim:
      return { ...state, datetimef: action.payload };
    case AcessoActions.setTmp:
      return { ...state, tempo: action.payload };
    default:
      return state;
  }
};
// Context
type AcessoContextType = {
  state: StateAcesso;
  dispatch: (action: AcessoAction) => void;
};
export const AcessoContext = createContext<AcessoContextType | undefined>(
  undefined
);

// Provider
type AcessoProviderProps = {
  children: React.ReactNode;
};
export const AcessoProvider = ({ children }: AcessoProviderProps) => {
  const [state, dispatch] = useReducer(AcessoReducer, initialData);
  const value = { state, dispatch };
  return (
    <AcessoContext.Provider value={value}>{children}</AcessoContext.Provider>
  );
};

// Context Hook
export const AcessoUseForm = () => {
  const context = React.useContext(AcessoContext);
  if (context === undefined) {
    throw new Error('"Useform" precisa ser usado dentro do Provider!');
  }
  return context;
};

export default AcessoContext;
