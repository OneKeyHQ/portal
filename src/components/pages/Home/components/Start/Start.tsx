import { useTheme } from '@emotion/react';
import { detect } from 'detect-browser';

import {
  DownloadTypes,
  useDownloadData,
} from '../../../../../data/useDownloadData';
import { useMediaQuery } from '../../../../../hooks';
import { Container, Flex, Img, Section, Span } from '../../../../base';

import arrowSvg from './images/arrow.svg';
import { StartItem } from './StartItem';

export const Start = () => {
  const theme = useTheme();
  const media = useMediaQuery();
  const detectResult = detect();
  const downloadData = useDownloadData();

  const items = [];

  if (media.medium) {
    items.push(downloadData.desktop);
    items.push(downloadData.mobile);
    items.push(downloadData.browserExtension);
  } else {
    // mobile
    if (detectResult?.os === 'iOS') {
      items.push(downloadData.ios);
    } else if (detectResult?.os === 'android') {
      items.push(downloadData.android);
    } else {
      items.push(downloadData.mobile);
    }

    items.push(downloadData.otherPlatforms);
  }

  return (
    <Section
      css={{
        position: 'relative',
      }}
    >
      <Container>
        <Flex
          xs={{
            paddingTop: 72,
            paddingBottom: 72,
            flexDirection: 'column',
            gap: 117,
          }}
          xl={{
            paddingTop: 164,
            paddingBottom: 164,
          }}
        >
          <Flex
            xs={{ gap: 16, flexDirection: 'column' }}
            m={{ flexDirection: 'row', alignItems: 'flex-end' }}
          >
            <Span
              css={{ color: theme.colors.test500 }}
              xs={{ ...theme.text.medium900 }}
              xl={{ ...theme.text.medium1200 }}
            >
              Start using
              <br />
              OneKey wallet today.
            </Span>

            <Img
              alt="arrow.svg"
              src={arrowSvg}
              css={{
                width: 106 / 2,
                height: 100 / 2,
              }}
            />
          </Flex>
          <Flex css={{ gap: 23 }}>
            {items.map((item) => {
              const iconType = item.image as DownloadTypes;
              return <StartItem key={item.type} {...item} image={iconType} />;
            })}
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};
