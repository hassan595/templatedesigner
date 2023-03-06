import './App.css';
import MainPanel from "./components/main-app-layout/MainPanel";
import TemplateDesigner from "./components/TemplateDesigner";
import {PanelList} from "./components/helper/AssetHelper";

function App() {
  return (
      <div className="App">
        {/*<MainPanel/>*/}
          <TemplateDesigner activePanel={PanelList.TextNameEditorPanel}/>

      </div>
  );
}

export default App;
