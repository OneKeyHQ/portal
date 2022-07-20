import { FC, Fragment, ReactNode } from 'react';

import { Box, Flex, OnlyDisplay, VideoPlayer } from '../../../../../base';
import { IntroductionText } from '../IntroductionText';

export interface ImageIntroductionProps {
  children?: ReactNode;
  items: {
    name: string | string[];
    description: string;
    video?: string;
    videoPoster?: string;
    images: {
      s?: ReactNode;
      m?: ReactNode;
      l?: ReactNode;
      xl?: ReactNode;
    };
  }[];
}

export const ImageIntroduction: FC<ImageIntroductionProps> = (props) => {
  const { children, items = [] } = props;

  return (
    <Flex xs={{ flexDirection: 'column', gap: 20 }} m={{ gap: 40 }}>
      {items.map((item) => (
        <Box xs={{ position: 'relative' }} key={JSON.stringify(item.name)}>
          <Box
            xs={{
              borderRadius: 40,
              overflow: 'hidden',
              transform: 'translateZ(0)',
            }}
          >
            {item.video && (
              <Fragment key={item.description}>
                <OnlyDisplay xs>{item.images.s}</OnlyDisplay>

                <OnlyDisplay s m l xl xxl>
                  <VideoPlayer
                    poster={item.videoPoster}
                    style={{
                      width: '100%',
                    }}
                    loop
                    src={item.video}
                  />
                </OnlyDisplay>
              </Fragment>
            )}

            {!item.video && (
              <Fragment key={item.description}>
                <OnlyDisplay xs>{item.images.s}</OnlyDisplay>
                <OnlyDisplay s>{item.images.m}</OnlyDisplay>
                <OnlyDisplay m l>
                  {item.images.l}
                </OnlyDisplay>
                <OnlyDisplay xl xxl>
                  {item.images.xl}
                </OnlyDisplay>
              </Fragment>
            )}
          </Box>
          <Box
            xs={{
              position: 'absolute',
              padding: 12,
              left: 24,
              bottom: 24,
            }}
            m={{
              left: '3vw',
              bottom: '3vw',
            }}
          >
            <IntroductionText name={item.name} description={item.description} />
          </Box>
        </Box>
      ))}
      {children}
    </Flex>
  );
};
