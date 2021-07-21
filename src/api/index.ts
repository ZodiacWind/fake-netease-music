import { Data } from '@/types';
import { get } from './api';

export type Banners = { banners: Array<{ imageUrl: string }> };
export const getBanner = () => get<Banners>('/banner');

export type PersonalizedList = Array<{ name: string; picUrl: string }>;
export const getPersonalized = (params: Data) => get<PersonalizedList>('/personalized', params);

export const getPersonalizedPrivatecontent = () =>
  get<PersonalizedList>('/personalized/privatecontent');

export const getPersonalizedMV = () => get<PersonalizedList>('/personalized/mv');

export type AlbumNewest = {
  albums: Array<{ picUrl: string; name: string; artist: { name: string } }>;
};
export const getAlbumNewest = () => get<AlbumNewest>('/album/newest');
