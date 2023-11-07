import React from "react";

export type StateAcces = {
  currentstep: number;
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

const initialData: StateAcces = {
  currentstep: 0,
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
export enum AccesActions {
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

type AccesAction = {
  type: AccesActions;
  payload: any;
};
export const AccesReducer = (state: StateAcces, action: AccesAction) => {
  switch (action.type) {
    case AccesActions.setCurrentStep:
      return { ...state, currentstep: action.payload };
    case AccesActions.setIdAces:
      return { ...state, idacesso: action.payload };
    case AccesActions.setIdEmp:
      return { ...state, idemp: action.payload };
    case AccesActions.setNmFant:
      return { ...state, nmfant: action.payload };
    case AccesActions.setIdUser:
      return { ...state, iduser: action.payload };
    case AccesActions.setIdNmUser:
      return { ...state, idnmuser: action.payload };
    case AccesActions.setPswUser:
      return { ...state, pswuser: action.payload };
    case AccesActions.setPin:
      return { ...state, pin: action.payload };
    case AccesActions.setMail:
      return { ...state, mail: action.payload };
    case AccesActions.setFoneC:
      return { ...state, fonec: action.payload };
    case AccesActions.setNet:
      return { ...state, net: action.payload };
    case AccesActions.setIdMod:
      return { ...state, idmod: action.payload };
    case AccesActions.setNmMod:
      return { ...state, nmmod: action.payload };
    case AccesActions.setMdRecep:
      return { ...state, mdrecep: action.payload };
    case AccesActions.setNmRecep:
      return { ...state, nmrecep: action.payload };
    case AccesActions.setMdDesig:
      return { ...state, mddesig: action.payload };
    case AccesActions.setNmDesig:
      return { ...state, nmdesig: action.payload };
    case AccesActions.setMdProdu:
      return { ...state, mdprodu: action.payload };
    case AccesActions.setNmProdu:
      return { ...state, nmprodu: action.payload };
    case AccesActions.setMdAcaba:
      return { ...state, mdacaba: action.payload };
    case AccesActions.setNmAcaba:
      return { ...state, nmacaba: action.payload };
    case AccesActions.setMdExped:
      return { ...state, mdexped: action.payload };
    case AccesActions.setNmExped:
      return { ...state, nmexped: action.payload };
    case AccesActions.setMdAdmin:
      return { ...state, mdadmin: action.payload };
    case AccesActions.setNmAdmin:
      return { ...state, nmadmin: action.payload };
    case AccesActions.setMdMaster:
      return { ...state, mdmaster: action.payload };
    case AccesActions.setNmMaster:
      return { ...state, nmmaster: action.payload };
    case AccesActions.setMdConfig:
      return { ...state, mdconfig: action.payload };
    case AccesActions.setNmConfig:
      return { ...state, nmconfig: action.payload };
    case AccesActions.setPinAdm:
      return { ...state, pinadm: action.payload };
    case AccesActions.setPathPage:
      return { ...state, pathpage: action.payload };
    case AccesActions.setLogado:
      return { ...state, logado: action.payload };
    case AccesActions.setDtIni:
      return { ...state, datetimei: action.payload };
    case AccesActions.setDtFim:
      return { ...state, datetimef: action.payload };
    case AccesActions.setTmp:
      return { ...state, tempo: action.payload };
    default:
      return state;
  }
};

// Context
type AccesContextType = {
  state: StateAcces;
  dispatch: (action: AccesAction) => void;
};
export const AccesContext = React.createContext<AccesContextType | undefined>(
  undefined
);

// Provider
type AccesProviderProps = {
  children: React.ReactNode;
};
export const AccesProvider = ({ children }: AccesProviderProps) => {
  const [state, dispatch] = React.useReducer(AccesReducer, initialData);
  const value = { state, dispatch };
  return (
    <AccesContext.Provider value={value}>{children}</AccesContext.Provider>
  );
};

// Context Hook
export const AccesUseForm = () => {
  const context = React.useContext(AccesContext);
  if (context === undefined) {
    throw new Error('"Useform" precisa ser usado dentro do Provider!');
  }
  return context;
};

export default AccesContext;
