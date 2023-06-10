import { FC, useEffect, useState } from 'react';

interface HydratationZustandProps {
  children: React.ReactNode;
}

const HydratationZustand: FC<HydratationZustandProps> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait till Next.js rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <div>{children}</div> : null}</>;
};

export default HydratationZustand;
