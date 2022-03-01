import './ChartBar.css';

const ChartBar = props => {
  let BarFillheight = '0%';

  if (props.maxValue > 0)
    BarFillheight = Math.round((props.value / props.maxValue) * 100) + '%';

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: BarFillheight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
