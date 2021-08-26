import React, { useRef, useEffect } from 'react';
import styles from './footer.module.less';
import {
  HeartOutlined,
  VerticalRightOutlined,
  VerticalLeftOutlined,
  DeleteOutlined,
  ControlOutlined,
  UnorderedListOutlined,
  SoundOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { formatMS } from '@/utils';
import { useCurrentTime, usePause, usePlayMode } from './hooks';
import { changeSong, setSong } from '@/reducer';
import { Tooltip } from 'antd';
import { PlayMode } from '@/enum';

const List: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLProgressElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const currentTrack = useSelector((state: RootState) => {
    const { current, tracks } = state.currentTrack;
    if (current < 0) return;
    return tracks[current];
  });

  const isLastSong = useSelector((state: RootState) => {
    const { current, tracks } = state.currentTrack;
    return current + 1 === tracks.length;
  });

  const song = useSelector((state: RootState) => state.currentTrack.song);
  const { PlayIcon, pause, setPause } = usePause(audioRef);
  const { currentTime, setCurrentTime, handleTimeUpdate, handleProgressClick } = useCurrentTime(
    audioRef,
    progressRef,
    currentTrack?.dt
  );

  const { playMode, handleIconClick, currentPlayMode } = usePlayMode();

  const handlePlayEnded = () => {
    if (playMode === PlayMode.SOLO) return;
    if (playMode === PlayMode.IN_TURN && isLastSong) {
      setCurrentTime(0);
    } else {
      dispatch(changeSong({ mode: playMode, next: true }));
    }
  };

  useEffect(() => {
    if (!currentTrack?.id) return;
    dispatch(setSong(currentTrack.id));
  }, [currentTrack?.id]);

  return (
    <footer className={styles.footer}>
      {currentTrack?.dt && (
        <progress
          ref={progressRef}
          className={styles['footer__progress-bar']}
          value={currentTime}
          max={currentTrack.dt}
          onClick={handleProgressClick}
        />
      )}
      <div className={styles.footer__left}>
        {currentTrack && song && (
          <>
            <audio
              ref={audioRef}
              src={song.url}
              controls
              loop={playMode === PlayMode.SOLO}
              autoPlay
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setPause(false)}
              onPause={() => setPause(true)}
              onEnded={handlePlayEnded}
            />
            <img src={currentTrack.al.picUrl} alt="music" />
            <div className={styles['footer__left-name']}>
              <div>
                {currentTrack.name} -{' '}
                {currentTrack.ar.reduce((acc, val) => `${acc}/${val.name}`, '').slice(1)}
              </div>
              <div>
                {formatMS(currentTime)} / {formatMS(currentTrack.dt)}
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.footer__mid}>
        <HeartOutlined />
        <VerticalRightOutlined
          className={styles['--red']}
          onClick={() => dispatch(changeSong({ mode: playMode, next: false }))}
        />
        <PlayIcon
          className={classNames(styles['--big'], styles['--red'])}
          onClick={() => setPause(!pause)}
        />
        <VerticalLeftOutlined
          className={styles['--red']}
          onClick={() => dispatch(changeSong({ mode: playMode, next: true }))}
        />
        <DeleteOutlined />
      </div>
      <div className={styles.footer__right}>
        <ControlOutlined />
        <Tooltip title={currentPlayMode.tip}>
          <currentPlayMode.icon onClick={handleIconClick} />
        </Tooltip>
        <UnorderedListOutlined />
        <span>词</span>
        <SoundOutlined />
      </div>
    </footer>
  );
};
export default List;
