import { useContext } from 'react';
import { CodeContext } from './CodeContext';
import cx from 'classnames';

const Input = () => {
  const { input, handleInputChange, onKeyDown } = useContext(CodeContext);

  return (
    <div className="pane">
      <div className="pane-header">
        <div className="flex">
          <button className={cx("tab-button", "active")}>
            Source
          </button>
        </div>
      </div>
      <div className="pane-content">
        <textarea
          value={input}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          placeholder="Paste your code here..."
          className="w-full h-full p-2 text-black bg-white resize-none"
          style={{ outline: 'none', border: 'none' }}
        />
      </div>
    </div>
  );
};

export default Input;
