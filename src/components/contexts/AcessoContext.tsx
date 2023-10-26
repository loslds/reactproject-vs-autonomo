import React from "react";

type StateAcesso = {
  correntStep: number;
  idacesso: string;
  idemp: string;
  nmfant: string;
  iduser: string;
  idnmuser: string;
  pswuser: string;
  pin: string;
  mail: string;
  fonec: string;
  net: string;
  lvMod: string;
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
  pinAdm: string;
  page: string;
  logado: boolean;
  datetimei: string;
  datetimef: string;
  tempo: string;
};

export const initialDataAcesso: StateAcesso = {
  correntStep: 0 | 1 | 2 | 3 | 4,
  idacesso: "0",
  idemp: "0",
  nmfant: "",
  iduser: "0",
  idnmuser: "",
  pswuser: "",
  pin: "",
  mail: "",
  fonec: "",
  net: "0",
  lvMod: "0",
  mdRecep: false,
  nmRecep: "Recepção",
  mdDesig: false,
  nmDesig: "Design",
  mdProdu: false,
  nmProdu: "Produção",
  mdAcaba: false,
  nmAcaba: "Acabamento",
  mdExped: false,
  nmExped: "Expedição",
  mdAdmin: false,
  nmAdmin: "Administração",
  mdMaster: false,
  nmMaster: "Master",
  mdConfig: false,
  nmConfig: "Config",
  pinAdm: "9999",
  page: "",
  logado: false,
  datetimei: "",
  datetimef: "",
  tempo: "",
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
  setLvMod,
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
  setPage,
  setLogado,
  setDtIni,
  setDtFim,
  setTmp,
}
// Context
type AcessoContextType = {
  state: StateAcesso;
  dispatch: (action: AcessoAction) => void;
};
const AcessoContext = React.createContext<AcessoContextType | undefined>(
  undefined
);

type AcessoAction = {
  type: AcessoActions;
  payload: string | number;
};
const AcessoReducer = (state: StateAcesso, action: AcessoAction) => {
  switch (action.type) {
    case AcessoActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
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
    case AcessoActions.setLvMod:
      return { ...state, lvMod: action.payload };
    case AcessoActions.setMdRecep:
      return { ...state, ndrecep: action.payload };
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
    case AcessoActions.setPage:
      return { ...state, page: action.payload };
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
// Provider
type AcessoProviderProps = {
  children: React.ReactNode;
};
export const AcessoProvider = ({ children }: AcessoProviderProps) => {
  const [state, dispatch] = React.useReducer(AcessoReducer, initialDataAcesso);

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
