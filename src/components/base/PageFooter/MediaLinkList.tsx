import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Flex } from '../Flex';
import { DiscordIcon, GithubIcon, TwitterIcon } from '../Icon';
import { Link } from '../Link';

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
        <TwitterIcon />
      </Link>

      <Link to={mediaData.github.url}>
        <GithubIcon />
      </Link>

      <Link to={mediaData.discord.url}>
        <DiscordIcon />
      </Link>
    </Flex>
  );
};
