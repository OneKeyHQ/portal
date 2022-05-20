import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../Box';
import { Flex } from '../Flex';
import { DiscordIcon, GithubIcon, TwitterIcon } from '../Icon';

import { Copyright } from './Copyright';
import { usePageFooterData } from './usePageFooterData';

export const MediaLinkList: FC = () => {
  const theme = useTheme();
  const { media: mediaData } = usePageFooterData();

  return (
    <Box
      xs={{
        paddingTop: 20,
        paddingBottom: 80,
        display: 'flex',
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
              color: theme.colors.brand400,
            },
          },
        }}
      >
        <a target="_blank" href={mediaData.twitter.url} rel="noreferrer">
          <TwitterIcon />
        </a>
        <a target="_blank" href={mediaData.github.url} rel="noreferrer">
          <GithubIcon />
        </a>
        <a target="_blank" href={mediaData.discord.url} rel="noreferrer">
          <DiscordIcon />
        </a>
      </Flex>

      {/* Copyright */}
      <Copyright />
    </Box>
  );
};
