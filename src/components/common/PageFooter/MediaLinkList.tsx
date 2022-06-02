import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Flex } from '../../base/Flex';
import { DiscordIcon, GithubIcon, TwitterIcon } from '../../base/Icon';
import { Link } from '../../base/Link';

import { usePageFooterData } from './usePageFooterData';

export const MediaLinkList: FC = () => {
  const theme = useTheme();
  const { media: mediaData } = usePageFooterData();

  return (
    <Flex
      css={{
        gap: 24,
        alignItems: 'center',
        svg: {
          color: theme.colors.white,
          ':hover': {
            opacity: 0.8,
          },
        },
      }}
    >
      <Link to={mediaData.twitter.url}>
        <TwitterIcon width={32} height={32} />
      </Link>

      <Link to={mediaData.github.url}>
        <GithubIcon width={32} height={32} />
      </Link>

      <Link to={mediaData.discord.url}>
        <DiscordIcon width={32} height={32} />
      </Link>
    </Flex>
  );
};
