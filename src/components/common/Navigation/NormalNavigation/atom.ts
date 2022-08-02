import { atom, useAtom } from 'jotai';

export const currentActiveMenuItem = atom<string>('');

export const useCurrentActiveMenuItem = () => useAtom(currentActiveMenuItem);
