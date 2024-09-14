import { createContext, useState } from 'react';
import { AuthContexType } from '../types/Context';

export const AuthContext = createContext<AuthContexType | null>(null);
