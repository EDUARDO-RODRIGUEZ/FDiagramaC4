import { AuthContextProvider } from "./context/authContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
