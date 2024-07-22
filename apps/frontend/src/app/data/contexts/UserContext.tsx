'use client';
import { createContext, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@barba/core';
import useLocalStorage from '../hooks/useLocalStorage';

export interface UserContextProps {
  loading: boolean;
  user: User | null;
  logIn: (user: User) => Promise<void>;
  logOut: () => void;
}

const UserContext = createContext<UserContextProps>({} as any);

export function UserProvider({ children }: any) {
  const { get, set } = useLocalStorage();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const loadUser = useCallback(
    function () {
      try {
        const userLocal = get('user');
        if (userLocal) {
          setUser(userLocal);
        }
      } finally {
        setLoading(false);
      }
    },
    [get]
  );

  async function logIn(user: User) {
    setUser(user);
    set('user', user);
  }

  function logOut() {
    router.push('/');
    setUser(null);
    set('user', null);
  }

  useEffect(() => loadUser(), [loadUser]);

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        logIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
