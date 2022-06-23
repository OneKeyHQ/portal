import { EIPs } from './eipsList';

const eipLink = 'https://eips.ethereum.org/EIPS/';

const mobileAppSupports = [
  EIPs.eip2,
  EIPs.eip4,
  EIPs.eip1052,
  EIPs.eip1193,
  EIPs.eip1363,
];

const hardwareWalletSupports = [
  EIPs.eip2,
  EIPs.eip1014,
  EIPs.eip1167,
  EIPs.eip1363,
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
