import Routes from "./src/navigation/routes";
import GlobalState from "./src/context/GlobalState";

export default function App() {
  return (
    <GlobalState>
      <Routes />
    </GlobalState>
  );
}
