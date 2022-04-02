import Routes from "./src/navigation/routes";
import GlobalState from "./src/context/GlobalState";
import HeaderBar from "./src/components/HeaderBar";

export default function App() {
  return (
    <GlobalState>
      <Routes />
    </GlobalState>
  );
}
