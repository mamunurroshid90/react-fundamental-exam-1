import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import TaskView from "./pages/TaskView";
import Contact from "./pages/Contact";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/taskView" element={<TaskView />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
