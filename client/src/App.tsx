import AppRouter from "./routing/AppRouter";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <ToastContainer
        closeOnClick={true}
        autoClose={3000}
        hideProgressBar={true}
        draggable={false}
        limit={3}
        transition={Slide}
        pauseOnHover={true}
      />
      <AppRouter />

    </>
  )

}

export default App;
