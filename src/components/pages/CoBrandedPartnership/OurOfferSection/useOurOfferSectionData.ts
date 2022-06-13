export function useOurOfferSectionData() {
  return {
    title: 'Our Offer',
    description:
      'Customize your hardware wallet & reward your community, partners or employees.',
    cards: [
      {
        title: 'Standard',
        points: ['Logo engraving', 'Minimum 100 units', '', ''],
        button: {
          text: 'Lean More',
          link: '#',
        },
      },
      {
        title: 'Pro Team',
        points: ['Logo engraving', 'Custom packaging', 'Minimum 300 units', ''],
        button: {
          text: 'Lean More',
          link: '#',
        },
      },
      {
        title: 'Dropshipping',
        points: [
          'Logo engraving',
          'Custom packaging',
          'Deliver to end-users',
          'Minimum 1000 units',
        ],
        button: {
          text: 'Lean More',
          link: '#',
        },
      },
    ],
  };
}
