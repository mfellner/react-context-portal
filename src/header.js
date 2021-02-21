import { usePageHeader } from "./page-header-context";

export default function Header() {
  const [element] = usePageHeader();

  return <header>{element}</header>;
}
