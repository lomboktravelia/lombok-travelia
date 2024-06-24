"use client";
import { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const pathname = usePathname();

  const checkExpiration = async () => {
    const response = await fetch(`/api/session`);
    const session = await response.json();
    if(session){
      setCurrentUser(session)
    } else {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    checkExpiration();
  }, [pathname]);

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {children}
    </UserContext.Provider>
  );
}
