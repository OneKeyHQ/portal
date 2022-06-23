import { EIPs } from './eipsList';

const eipLink = 'https://eips.ethereum.org/EIPS/';

const mobileAppSupports = [
  EIPs.EIP2,
  EIPs.EIP4,
  EIPs.EIP1052,
  EIPs.EIP1193,
  EIPs.EIP1363,
];

const hardwareWalletSupports = [
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

const items: Item[] = Object.values(EIPs)
  .map((eip) => ({
    ...eip,
    supports: {
      mobileApp: mobileAppSupports.includes(eip),
      hardwareWallet: hardwareWalletSupports.includes(eip),
    },
  }))
  .filter((eip) => eip.supports.mobileApp || eip.supports.hardwareWallet);

export function useEIPs() {
  return {
    mainTitle: {
      title: 'Ethereum Improvement Proposals',
      subtitle: 'EIPs',
      description:
        'Ethereum Improvement Proposals (EIPs) describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards. Network upgrades are discussed separately in the Ethereum Project Management repository.',
    },
    thead: {
      EIPs: 'EIPs',
      mobileApp: 'MOBILE APP',
      hardwareWallet: 'HARDWARE WALLET',
    },
    eipLink,
    EIPs,
    mobileAppSupports,
    hardwareWalletSupports,
    items,
  };
}
