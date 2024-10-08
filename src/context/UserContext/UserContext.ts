import { createContext } from 'react';
import { UserContextProps } from './types';

export const UserContext = createContext<UserContextProps | undefined>(undefined);
