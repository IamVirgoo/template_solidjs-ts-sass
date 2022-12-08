import { Routes, Router, Route } from "solid-app-router";
import { render } from "solid-js/web";

import Index from "./pages/index";
import Admin from "./pages/admin";

import AppLayout from "./layouts/AppLayout";

import "./index.css";
import "./styles/index.sass";

const mountPoint = document.getElementsByTagName('body')[0];
const App = () => {
  return <>
      <Router>
          <Routes>
              <Route path='/' element={<Index/>}></Route>
              <Route path='/app' element={<AppLayout/>}>
                  <Route path='/' element={<Admin/>}></Route>
              </Route>
          </Routes>
      </Router>
  </>
};

render(App, mountPoint)
