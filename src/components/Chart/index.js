import createG2 from 'g2-react';
import style from './index.scss';
import classnames from 'classnames/bind';

const ChartView = ({ className, data, name, tab, color, size = 32, firstItem }) => {
  const Data = data[name];
  let content = [];
  const Config = firstItem ? { min: 0, max: firstItem } : { min: 0 };
  if (!Data || Data.length <= 1) {
    content = <div className={style.loading}>等待数据积累...</div>;
  } else {
    const Chart = createG2(chart => {
      chart.col('time', {
        range: [0, 1],
      });
      chart.col(tab, Config);
      chart
        .area()
        .position(`time*${tab}`)
        .color(color);
      chart
        .line()
        .position(`time*${tab}`)
        .color(color);
      chart.axis(false);
      chart.tooltip(false);
      chart.animate(false);
      chart.render();
    });

    content = (
      <Chart
        data={data[name]}
        plotCfg={{
          margin: [0, 0, 0, 0],
        }}
        width={100}
        height={size}
        syncXYScales={true}
        forceFit={true}
      />
    );
  }
  return (
    <div
      className={classnames.bind(style)(style.chart, className)}
      style={{ height: `${size}px`, lineHeight: `${size}px` }}
    >
      {content}
    </div>
  );
};

export default ChartView;
