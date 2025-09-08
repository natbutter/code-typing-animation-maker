import cx from 'classnames';

const Files = () => {
  return (
    <div className="pane">
      <div className="pane-header">
        <div className="flex">
          <button className={cx("tab-button", "active")}>
            Files
          </button>
          <button className={"tab-button"}>
            Plots
          </button>
          <button className={"tab-button"}>
            Packages
          </button>
        </div>
      </div>
      <div className="pane-content p-4">
        {/* Placeholder for Files pane */}
        <p>Files Pane</p>
      </div>
    </div>
  );
};

export default Files;
