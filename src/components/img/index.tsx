import React, { useRef, useEffect, useState, ReactEventHandler, useMemo } from 'react';
import styles from './img.module.less';
import classNames from 'classnames';
import { AppProps } from '@/types';
import { LoadingOutlined } from '@ant-design/icons';
import Icon, { IconSize } from '@/components/icon';
import { classGenerator } from '@/utils';

export type IconOptions = {
  size?: IconSize;
  placement?: 'center' | 'bottom';
  hoverDisplay?: boolean;
};

interface Props extends AppProps {
  src?: string;
  icon?: boolean | IconOptions;
  alt?: string;
  banLoading?: boolean;
  onClick?: ReactEventHandler<HTMLImageElement>;
  onIconClick?: ReactEventHandler<HTMLSpanElement>;
}

const Img: React.FC<Props> = ({
  alt = '',
  banLoading = false,
  style,
  className,
  src,
  icon = false,
  onClick,
  onIconClick,
}) => {
  const getClass = classGenerator('img', styles);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showIcon, setShowIcon] = useState(false);

  const iconConfig = useMemo(() => {
    const defaultOptions: IconOptions = { size: 'small', placement: 'center', hoverDisplay: false };
    if (icon === false) return false;
    if (icon === true) return defaultOptions;
    return { ...defaultOptions, ...icon };
  }, [icon]);

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && ref && ref.current?.style) setVisible(true);
    });
  });

  function handleOnload() {
    setLoading(false);
  }

  useEffect(() => {
    if (!ref.current) return;
    io.observe(ref.current);

    return () => {
      if (!ref.current) return;
      io.unobserve(ref.current);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={classNames(getClass(), className)} style={style}>
      {visible && (
        <img
          src={src}
          alt={alt}
          onLoad={handleOnload}
          onMouseMove={() => setShowIcon(true)}
          onMouseLeave={() => setShowIcon(false)}
          onClick={onClick}
        />
      )}
      {!banLoading && loading && <LoadingOutlined className={getClass('loading')} />}
      {!loading && iconConfig && (
        <Icon
          size={iconConfig.size}
          className={classNames(
            getClass('play'),
            styles[`--${iconConfig.size}`],
            styles[`--${iconConfig.placement}`],
            { [styles['--show']]: !iconConfig.hoverDisplay || showIcon }
          )}
          onMouseMove={() => setShowIcon(true)}
          onClick={onIconClick}
        />
      )}
    </div>
  );
};

export default Img;
