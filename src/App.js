import { Form1 } from "./components/Form1/Form1.jsx";
import { Form2 } from "./components/Form2/Form2.jsx";
import { FinalPage } from "./components/FinalPage/FinalPage.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form1} />
        <Route exact path="/step2" component={Form2} />
        <Route exact path="/step3" component={FinalPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
