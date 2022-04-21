import { FC } from 'react';

import { DevelopmentWrap } from '../../../base';

export const Header: FC = () => (
  <DevelopmentWrap>
    <div
      css={{
        height: '60vh',
        paddingLeft: 64,
        paddingRight: 64,
        paddingTop: 78,
        paddingBottom: 78,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#e9e9e9',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        label: 'Headline',
      }}
    >
      <div css={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <span css={{ fontSize: 48, color: '#101111' }}>
          All-in-One Crypto Wallet. Trusted by Millions.
        </span>
        <div css={{ display: 'flex', gap: 20 }}>
          <img
            alt="launchButton.png"
            src="data:image/png;base64,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"
            css={{ width: 151, height: 50 }}
          />
          <img
            alt="goShop.png"
            src="data:image/png;base64,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"
            css={{ width: 122, height: 50 }}
          />
        </div>
        <span css={{ fontSize: 12, color: '#101111' }}>
          Trustpilot score & review
        </span>
      </div>
    </div>
  </DevelopmentWrap>
);
