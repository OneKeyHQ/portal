import { EIPs } from './eipsList';
import {
  hardwareWalletSupports,
  mobileAppSupports,
  suggestList,
} from './suggestList';

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
    EIPs,
    mobileAppSupports,
    hardwareWalletSupports,
    suggestList,
  };
}
