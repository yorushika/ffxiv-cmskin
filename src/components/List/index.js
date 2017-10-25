import classnames from 'classnames/bind';
import style from './index.scss';
import path from 'path';
import { Link } from 'dva/router';
import { connect } from 'dva';
import { Avatar, Chart, Progress } from '../';

const State = state => ({ setting: state.setting });
const ListView = ({ tab, chart, item, firstItem, setting }) => {
  const {
    fullscreen,
    uiTrans,
    name,
    nameActive,
    hideName,
    diyHideName,
    diyHideNameDefault,
    diyHideNameActive,
    img,
    imgActive,
    miniMode,
  } = setting;
  if (!item.job || item.job === 'you') return [];
  if (!fullscreen && !item.isMy) return [];

  const tabData = {
    dps: {
      desc: [['暴击', item.damage.criticals.percent], ['直击', item.damage.directhit.percent]],
      title: item.damage.highest.full ? item.damage.highest.full : '输出',
      number: item.damage.ps,
      progress: parseInt(item.damage.ps) / parseInt(firstItem.damage.ps),
      color: '#d86f87',
    },
    heal: {
      desc: [['暴击', item.healing.criticals.percent], ['溢出', item.healing.over]],
      title: item.healing.highest.full ? item.healing.highest.full : '治疗',
      number: item.healing.ps,
      progress: parseInt(item.healing.ps) / parseInt(firstItem.healing.ps),
      color: '#649029',
    },
    tank: {
      desc: [['招架', item.tanking.parry], ['格挡', item.tanking.block]],
      title: '承伤总量',
      number: item.tanking.total,
      progress: parseInt(item.tanking.total) / parseInt(firstItem.damage.total),
      color: '#4488fc',
    },
  };

  const firstTabData = {
    dps: parseInt(firstItem.damage.ps),
    heal: parseInt(firstItem.healing.ps),
    tank: parseInt(firstItem.tanking.total),
  };

  const listClass = classnames.bind(style)({
    [style.list]: true,
    [style.my]: item.isMy && fullscreen,
    [style.trans]: uiTrans,
    [style.fullscreen]: !fullscreen,
    [style.mini]: miniMode,
  });

  let Name, Img;

  if (item.isMy) {
    Name = nameActive ? name : item.name;
    Img = imgActive ? img : item.job;
  } else {
    Name = item.name;
    Img = item.job;
  }
  if (hideName) {
    if (Name !== '极限技' && Name !== '陆行鸟') {
      Name = diyHideNameActive ? diyHideName : diyHideNameDefault;
    }
  }

  return (
    <Link
      to={path.join('/detail', item.name)}
      className={classnames.bind(style)(listClass, {
        [style.miniMode]: miniMode,
        [style.fullMode]: !miniMode,
      })}
    >
      <Avatar
        deaths={item.deaths}
        job={Img}
        diy={imgActive && item.isMy}
        size={miniMode ? '1.5rem' : '2.5rem'}
      />
      <div className={style.header}>
        <div className={style.name}>{Name}</div>
        {miniMode ? null : (
          <div className={style.desc}>
            {tabData[tab].desc.map((desc, i) => (
              <span key={i}>
                {desc[0]}: {desc[1]}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={style.info}>
        <Chart
          firstItem={firstTabData[tab]}
          data={chart}
          name={item.name}
          tab={tab}
          color={tabData[tab].color}
          size={miniMode ? 20 : 32}
        />
      </div>
      <Progress
        className={style.right}
        title={miniMode ? false : tabData[tab].title}
        number={tabData[tab].number}
        progress={tabData[tab].progress}
        color={tabData[tab].color}
      />
    </Link>
  );
};
export default connect(State)(ListView);
