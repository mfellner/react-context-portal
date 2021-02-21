import { useEffect } from "react";
import { usePageHeader } from "./page-header-context";

export default function PageHeaderAddon({ children }) {
  const [, setElement] = usePageHeader();

  useEffect(() => {
    console.log("set children");
    setElement(children);
  }, [children, setElement]);

  return null;
}
