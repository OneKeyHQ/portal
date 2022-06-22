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
    items: [
      {
        id: 'EIP 721',
        name: 'ERC-721 non-fungible token standard',
        suggested: {
          mobileApp: true,
          hardwareWallet: true,
        },
      },
      {
        id: 'EIP 722',
        name: 'ERC-722 non-fungible token standard',
        suggested: {
          mobileApp: true,
          hardwareWallet: false,
        },
      },
      {
        id: 'EIP 723',
        name: 'ERC-723 non-fungible token standard',
        suggested: {
          mobileApp: false,
          hardwareWallet: false,
        },
      },
    ],
  };
}
