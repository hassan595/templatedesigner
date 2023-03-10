import './App.css';
import TemplateDesigner from "./components/TemplateDesigner";
import {PanelList} from "./components/helper/AssetHelper";

function App() {
  return (
      <div className="App">
          <TemplateDesigner activePanel={PanelList.TextNameEditorPanel}/>

      </div>
  );
}

export default App;
