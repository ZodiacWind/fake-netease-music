import React, { useState, useEffect } from 'react';
import './collection.less';
import List, { ListData } from '@/components/list';
import { getAlbumSublist } from '@/api';
import disk from '@/assets/img/disk.svg';
import Header from './header';
import { classGenerator } from '@/utils';

const Collection: React.FC = () => {
  const getClass = classGenerator('collection');
  const myAlbums: ListData[] = [{ id: 0, imgUrl: disk, col2: '我的数字专辑' }];
  const [albumSublist, setAlbumSublist] = useState<ListData[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getAlbumSublist();
      const result = res.data.map(item => {
        const { id, picUrl: imgUrl, name: col2, artists, size } = item;
        const col3 = artists.reduce((acc, val) => `${acc}/${val.name}`, '').slice(1);
        const col4 = `${size}首`;
        return { id, imgUrl, col2, col3, col4 };
      });
      setAlbumSublist(result);
    })();
  }, []);

  return (
    <div className={getClass()}>
      <List data={myAlbums} />
      <Header title="收藏的专辑" count={2} style={{ marginTop: '4.5vh' }} />
      <List data={albumSublist} />
    </div>
  );
};

export default Collection;
