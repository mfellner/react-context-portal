import Content from "./content";
import Header from "./header";
import { PageHeaderProvider } from "./page-header-context";
import "./styles.css";

export default function App() {
  return (
    <PageHeaderProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </PageHeaderProvider>
  );
}
