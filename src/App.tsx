import "./App.css";
import NavBar from "./state-management/NavBar";
import AuthProvider from "./state-management/Providers/AuthProvider";
import TaskProvider from "./state-management/Providers/TaskProvider";
import TaskList from "./state-management/TaskList";

function App() {
  return (
    <>
      <TaskProvider>
        <AuthProvider>
          <NavBar />
          <TaskList />
        </AuthProvider>
      </TaskProvider>
    </>
  );
}

export default App;
