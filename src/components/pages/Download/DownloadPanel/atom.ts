import { atom, useAtom } from 'jotai';

export type TabTypes = 'desktop' | 'mobile' | 'browserExtension' | 'web' | '';

export const currentTabAtom = atom<TabTypes>('');

export const useCurrentTabAtom = () => useAtom(currentTabAtom);
