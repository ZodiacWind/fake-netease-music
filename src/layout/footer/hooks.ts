import {
  useState,
  useMemo,
  useEffect,
  RefObject,
  MouseEventHandler,
  useRef,
  ReactEventHandler,
} from 'react';
import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';
import {
  RetweetOutlined,
  DoubleRightOutlined,
  RollbackOutlined,
  EnterOutlined,
} from '@ant-design/icons';
import { Track } from '@/types';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState, setPause, setCurrentTime, setPlayMode } from '@/store';

export const usePause = (audio?: RefObject<HTMLAudioElement>, currentTrack?: Track) => {
  const pause = useSelector((state: RootState) => state.controller.pause);
  const dispatch = useDispatch<AppDispatch>();
  const PlayIcon = useMemo(() => (pause ? PlayCircleFilled : PauseCircleFilled), [pause]);

  function handlePause(pause: boolean) {
    if (!currentTrack) return;
    dispatch(setPause(pause));
  }

  useEffect(() => {
    if (!audio?.current) return;
    pause ? audio.current.pause() : audio.current.play();
  }, [pause]);

  return { PlayIcon, pause, handlePause };
};

export const useCurrentTime = (
  audioRef?: RefObject<HTMLAudioElement>,
  progressRef?: RefObject<HTMLProgressElement>,
  duration?: number
) => {
  const currentTime = useSelector((state: RootState) => state.controller.currentTime);
  const dispatch = useDispatch();

  const handleTimeUpdate = () => {
    if (!audioRef?.current) return;
    dispatch(setCurrentTime(audioRef.current.currentTime * 1000));
  };

  const handleProgressClick: MouseEventHandler<HTMLProgressElement> = e => {
    if (!progressRef?.current || !audioRef?.current || !duration) return;
    const { pageX } = e;
    const { left, width } = progressRef.current.getBoundingClientRect();

    const currentTime = (((pageX - left) / width) * duration) / 1000;
    audioRef.current.currentTime = currentTime;
    dispatch(setCurrentTime(currentTime));
  };

  return { currentTime, handleTimeUpdate, handleProgressClick };
};

export const usePlayMode = () => {
  const playMode = useSelector((state: RootState) => state.controller.playMode);
  const dispatch = useDispatch();

  const playModeList = [
    { key: 'inTurn', tip: '顺序播放', icon: DoubleRightOutlined },
    { key: 'loop', tip: '循环播放', icon: RetweetOutlined },
    { key: 'solo', tip: '单曲循环', icon: RollbackOutlined },
    { key: 'random', tip: '随机播放', icon: EnterOutlined },
  ];

  const currentPlayMode = useMemo(() => playModeList[playMode], [playMode]);

  const handleIconClick = () => {
    const result = playMode === 3 ? 0 : playMode + 1;
    dispatch(setPlayMode(result));
  };

  return { playMode, handleIconClick, currentPlayMode };
};

export const useMusicList = () => {
  const listButtonRef = useRef<HTMLElement>(null);
  const [showList, setShowList] = useState(false);

  return { listButtonRef, showList, setShowList };
};

export const useLyric = () => {
  const [lyricActive, setLyricActive] = useState(false);

  return { lyricActive, setLyricActive };
};

export const useVolume = (audioRef: RefObject<HTMLAudioElement>) => {
  const [volume, setVolume] = useState(100);

  const handleVolumeChange: ReactEventHandler<HTMLAudioElement> = e => {
    setVolume(e.currentTarget.volume * 100);
  };

  const handleSliderChange = (value: number) => {
    if (!audioRef?.current) return;
    audioRef.current.volume = value / 100;
  };

  return { volume, setVolume, handleVolumeChange, handleSliderChange };
};
