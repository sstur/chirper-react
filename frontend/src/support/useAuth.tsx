import { createContext, ReactNode, useContext, useState } from 'react';

type AuthContext = {
  userId: string | undefined;
  setUserId: (userId: string | undefined) => void;
};

const Context = createContext<AuthContext | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export function AuthContextProvider(props: Props) {
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const context = { userId, setUserId };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}

export function useAuth() {
  const context = useContext(Context);
  if (!context) {
    throw new Error(`useAuth must be used within AuthContextProvider`);
  }
  return context;
}
