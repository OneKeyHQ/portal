import { useMemo } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import {
  DownloadTypes,
  useDownloadData,
} from '../../../../../data/useDownloadData';
import { useMediaQuery, useRuntimeDetect } from '../../../../../hooks';
import {
  Container,
  Flex,
  Img,
  MultilineText,
  Section,
  Span,
} from '../../../../base';

import arrowSvg from './images/arrow.svg';
import { StartItem } from './StartItem';

export const Start = () => {
  const theme = useTheme();
  const media = useMediaQuery();
  const downloadData = useDownloadData();
  const { isIOS, isAndroid } = useRuntimeDetect();
  const { t } = useTranslation();

  const items = useMemo(() => {
    const innerItems = [];

    if (media.medium) {
      innerItems.push(downloadData.desktop);
      innerItems.push(downloadData.mobile);
      innerItems.push(downloadData.browserExtension);
    } else {
      // mobile
      if (isIOS) {
        innerItems.push(downloadData.ios);
      } else if (isAndroid) {
        innerItems.push(downloadData.android);
      } else {
        innerItems.push(downloadData.mobile);
      }

      innerItems.push(downloadData.otherPlatforms);
    }

    return innerItems;
  }, [
    downloadData.android,
    downloadData.browserExtension,
    downloadData.desktop,
    downloadData.ios,
    downloadData.mobile,
    downloadData.otherPlatforms,
    isAndroid,
    isIOS,
    media.medium,
  ]);

  return (
    <Section css={{ position: 'relative' }}>
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
              <MultilineText
                text={t('title__start_using_onekey_wallet_today')}
              />
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
