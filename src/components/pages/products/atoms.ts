import { atom, useAtom } from 'jotai';

export const firstScreenIsOver = atom<boolean>(false);
export const introductionSectionCenterPosition = atom<boolean>(false);

export const useFirstScreenIsOver = () => useAtom(firstScreenIsOver);
export const useIntroductionSectionCenterPosition = () =>
  useAtom(introductionSectionCenterPosition);
