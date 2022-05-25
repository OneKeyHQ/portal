import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Flex } from '../Flex';
import { DiscordIcon, GithubIcon, TwitterIcon } from '../Icon';
import { Link } from '../Link';

import { Copyright } from './Copyright';
import { usePageFooterData } from './usePageFooterData';

export const MediaLinkList: FC = () => {
  const theme = useTheme();
  const { media: mediaData } = usePageFooterData();

  return (
    <Flex
      xs={{
        paddingTop: 20,
        paddingBottom: 80,
        flexDirection: 'column',
        gap: 32,
      }}
      m={{
        padding: 0,
      }}
    >
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

      {/* Copyright */}
      <Copyright />
    </Flex>
  );
};
