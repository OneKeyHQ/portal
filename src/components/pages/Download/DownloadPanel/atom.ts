import { atom, useAtom } from 'jotai';

export type TabTypes =
  | 'desktop'
  | 'mobile'
  | 'browserExtension'
  | 'web'
  | 'bridge'
  | '';

export const currentTabAtom = atom<TabTypes>('');

export const useCurrentTabAtom = () => useAtom(currentTabAtom);
