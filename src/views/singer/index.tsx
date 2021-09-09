import React, { useEffect, useMemo, useState, Suspense, lazy } from 'react';
import './singer.less';
import Img from '@/components/img';
import { FileAddOutlined, UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import ButtonGroup from './button-group';
import { useParams, useLocation } from 'react-router-dom';
import { getArtistDetail, getArtistAlbum } from '@/api';
import { Album as AlbumType, Artist } from '@/types';
import { AlbumPageMode } from './album';
import { resizeImg } from '@/utils';

const { TabPane } = Tabs;
const Album = lazy(() => import('./album'));
const MV = lazy(() => import('./mv'));
const Detail = lazy(() => import('./detail'));
const Similar = lazy(() => import('./similar'));

const Singer: React.FC = () => {
  const params = useParams<{ id: string }>();
  const location = useLocation<string[]>();
  const alias = location.state;
  const [activeKey, setActiveKey] = useState('album');
  const id = useMemo(() => Number(params.id), [params.id]);
  const [artistDetail, setArtistDetail] = useState<Artist>();
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [activeButton, setActiveButton] = useState<AlbumPageMode>('overview');

  const extraContent =
    activeKey === 'album'
      ? { right: <ButtonGroup {...{ activeButton, setActiveButton }} /> }
      : undefined;

  async function loadArtistDetail() {
    const artistDetail = await getArtistDetail(id);
    artistDetail.data.artist.alias = alias;
    setArtistDetail(artistDetail.data.artist);
  }

  async function loadArtistAlbum() {
    const albums = await getArtistAlbum(id);
    setAlbums(albums.hotAlbums);
  }

  useEffect(() => {
    if (Number.isNaN(id)) return;
    loadArtistDetail();
    loadArtistAlbum();
    console.log(id);
  }, [id]);

  return (
    <div className="singer">
      <header className="singer__header">
        <Img src={artistDetail?.cover && resizeImg(artistDetail.cover)} className="singer__img" />
        <section className="singer__right">
          <h2>{artistDetail?.name}</h2>
          <h3>{artistDetail?.alias?.join(' ')}</h3>
          <div>
            <button className="singer__button">
              <FileAddOutlined />
              收藏
            </button>
            <button className="singer__button">
              <UserOutlined />
              个人主页
            </button>
          </div>
          <div className="singer__description">
            <span>
              单曲数:<strong>{artistDetail?.musicSize}</strong>
            </span>
            <span>
              专辑数:<strong>{artistDetail?.albumSize}</strong>
            </span>
            <span>
              MV数:<strong>{artistDetail?.mvSize}</strong>
            </span>
          </div>
        </section>
      </header>

      <Tabs destroyInactiveTabPane tabBarExtraContent={extraContent} onChange={setActiveKey}>
        <TabPane tab="专辑" key="album">
          <Suspense fallback="加载中...">
            <Album type={activeButton} id={id} albums={albums} />
          </Suspense>
        </TabPane>
        <TabPane tab="MV" key="mv">
          <Suspense fallback="加载中...">
            <MV id={id} />
          </Suspense>
        </TabPane>
        <TabPane tab="歌手详情" key="detail">
          <Suspense fallback="加载中...">{artistDetail && <Detail id={id} />}</Suspense>
        </TabPane>
        <TabPane tab="相似歌手" key="similar">
          <Suspense fallback="加载中...">
            <Similar id={id} />
          </Suspense>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Singer;