"use client";
import { FC, ReactNode, useEffect, useState } from "react";

interface Props {
   children: ReactNode;
}

const ClienteOnly: FC<Props> = ({ children }) => {
   const [hasMounted, setHasMounted] = useState(false);

   useEffect(() => {
      setHasMounted(true);
   }, []);

   if (!hasMounted) return null;

   return <>{children}</>;
};

export default ClienteOnly;
