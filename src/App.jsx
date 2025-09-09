import { CodeProvider } from './CodeContext';
import Header from './Header'; // Import the Header component
import Input from './Input';
import Controls from './Controls';
import Output from './Output';
import Environment from './Environment';
import Files from './Files';
import cx from 'classnames';

const App = () => {
  return (
    <CodeProvider>
      <div className={cx("flex flex-col h-screen w-screen bg-white p-0")}>
        <Header />
        <div className="flex-grow grid grid-cols-2 grid-rows-2 gap-1 bg-gray-300">
          {/* Top-left: Source */}
          <div className="bg-white flex flex-col">
            <Input />
            <Controls />
          </div>
          {/* Top-right: Environment */}
          <div className="bg-white">
            <Environment />
          </div>
          {/* Bottom-left: Console */}
          <div className="bg-white">
            <Output />
          </div>
          {/* Bottom-right: Files */}
          <div className="bg-white">
            <Files />
          </div>
        </div>
      </div>
    </CodeProvider>
  );
};

export default App;
