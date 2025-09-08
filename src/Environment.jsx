import cx from 'classnames';

const Environment = () => {
  return (
    <div className="pane">
      <div className="pane-header">
        <div className="flex">
          <button className={cx("tab-button", "active")}>
            Environment
          </button>
          <button className={"tab-button"}>
            History
          </button>
        </div>
      </div>
      <div className="pane-content p-4">
        {/* Placeholder for Environment pane */}
        <p>Environment Pane</p>
      </div>
    </div>
  );
};

export default Environment;
