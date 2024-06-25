import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import TodoList from "./pages/todo_list";
import CreatePage from "./pages/create";
import EditPage from "./pages/edit";
import ViewPage from "./pages/view";
import AppLayout from "./layouts/app_layout";

function AppSetUp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/create" element={<CreatePage />} />
          <Route path="/todos/edit/:id" element={<EditPage />} />
          <Route path="/todos/view/:id" element={<ViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default AppSetUp;