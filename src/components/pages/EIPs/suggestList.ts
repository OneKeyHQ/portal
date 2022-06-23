import { EIPs } from './eipsList';

export const mobileAppSupports = [
  EIPs.EIP2,
  EIPs.EIP4,
  EIPs.EIP1052,
  EIPs.EIP1193,
  EIPs.EIP1363,
];

export const hardwareWalletSupports = [
  EIPs.EIP2,
  EIPs.EIP196,
  EIPs.EIP1014,
  EIPs.EIP1167,
  EIPs.EIP1193,
  EIPs.EIP1363,
  EIPs.EIP2678,
];

type Item = {
  title: string;
  id: string;
  supports: {
    mobileApp: boolean;
    hardwareWallet: boolean;
  };
};

export const suggestList: Item[] = Object.values(EIPs)
  .map((eip) => ({
    ...eip,
    supports: {
      mobileApp: mobileAppSupports.includes(eip),
      hardwareWallet: hardwareWalletSupports.includes(eip),
    },
  }))
  .filter((eip) => eip.supports.mobileApp || eip.supports.hardwareWallet);
