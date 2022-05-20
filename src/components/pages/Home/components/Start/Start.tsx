import { useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';
import ua2os from 'ua2os';
import { OS } from 'ua2os/dist/types';

import { useMediaQuery } from '../../../../../hooks';
import { Container, Flex, Img, Section, Span } from '../../../../base';

import arrowSvg from './images/arrow.svg';
import { StartItem } from './StartItem';
import { getStartItemDataByType } from './useStartItemsData';

export const Start = () => {
  const theme = useTheme();
  const [type, setType] = useState<OS>();
  const media = useMediaQuery();

  useEffect(() => {
    setType(ua2os(window.navigator.userAgent));
  }, []);

  const items = [];

  if (media.medium) {
    items.push(getStartItemDataByType('desktop'));
    items.push(getStartItemDataByType('mobile'));
    items.push(getStartItemDataByType('browserExtension'));
  } else {
    // mobile
    if (type === 'ios') {
      items.push(getStartItemDataByType('ios'));
    } else if (type === 'android') {
      items.push(getStartItemDataByType('android'));
    } else {
      items.push(getStartItemDataByType('mobile'));
    }

    items.push(getStartItemDataByType('otherPlatforms'));
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
              css={{
                color: '#101111',
              }}
              xs={{
                ...theme.text.medium900,
              }}
              xl={{
                ...theme.text.medium1200,
              }}
            >
              Start using
              <br />
              OneKey wallet today
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
            {items.map((item) => (
              <StartItem key={item.type} {...item} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};
