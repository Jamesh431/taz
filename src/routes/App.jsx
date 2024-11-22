import { Outlet } from "react-router-dom";

import "../styles/app.scss";

function App() {
  return (
    <div className="app-container">
      <div className="render-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
