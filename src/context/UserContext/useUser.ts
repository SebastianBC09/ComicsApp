// contexts/UserContext/useUser.ts

import { useContext } from 'react';
import { UserContext } from './UserContext';
import { UserContextProps } from './types';

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser debe ser usado dentro de un UserProvider');
  }
  return context;
};
