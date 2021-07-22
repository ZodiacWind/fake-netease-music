import React, { useState } from 'react';
import styles from './sidebar.module.less';
import avatar from '@/assets/img/avatar.svg';
import {
  CustomerServiceOutlined,
  TeamOutlined,
  PlaySquareOutlined,
  DownloadOutlined,
  FieldTimeOutlined,
  CaretDownOutlined,
  PlusOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const List: React.FC = () => {
  type Menu = { name: string; icon: React.FC; path: string };
  const history = useHistory();

  const menuList: Array<Menu> = [
    { name: '发现音乐', icon: CustomerServiceOutlined, path: '' },
    { name: '私人FM', icon: TeamOutlined, path: '' },
    { name: '视频', icon: PlaySquareOutlined, path: '' },
    { name: '朋友', icon: TeamOutlined, path: '' },
    { name: 'iTunes音乐', icon: CustomerServiceOutlined, path: '' },
    { name: '下载管理', icon: DownloadOutlined, path: '' },
    { name: '最近播放', icon: FieldTimeOutlined, path: '' },
    { name: '我喜欢的音乐', icon: HeartOutlined, path: '' },
  ];

  const [selected, setSelected] = useState(0);

  function handleMenuClick(menu: Menu, i: number, plus = 0) {
    setSelected(i + plus);
    history.push(menu.path);
  }

  function getItem(menu: Menu, i: number, plus = 0) {
    return (
      <div
        key={i}
        className={`${styles.sidebar__item} ${i + plus === selected ? styles['--actived'] : ''}`}
        onClick={() => handleMenuClick(menu, i, plus)}
      >
        <menu.icon />
        <a>{menu.name}</a>
      </div>
    );
  }

  return (
    <aside className={styles.sidebar}>
      <header className={styles.sidebar__header}>
        <img src={avatar} alt="icon" />
        <span>未登录</span>
      </header>
      {menuList.slice(0, 4).map((item, i) => getItem(item, i))}
      <div className={styles.sidebar__title}>我的音乐</div>
      {menuList.slice(4, 7).map((item, i) => getItem(item, i, 4))}
      <div className={styles.sidebar__title}>
        <div className={styles['sidebar__title-left']}>
          <CaretDownOutlined />
          <a>创建的歌单</a>
        </div>
        <PlusOutlined className={styles['sidebar__title-right']} />
      </div>
      {menuList.slice(7).map((item, i) => getItem(item, i, 7))}
    </aside>
  );
};

export default List;
