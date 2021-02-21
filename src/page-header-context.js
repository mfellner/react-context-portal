import { createContext, useContext, useState } from "react";

const pageHeadersContext = createContext([null, () => {}]);

export function PageHeaderProvider({ children }) {
  const [element, setElement] = useState(null);

  return (
    <pageHeadersContext.Provider value={[element, setElement]}>
      {children}
    </pageHeadersContext.Provider>
  );
}

export function usePageHeader() {
  return useContext(pageHeadersContext);
}
