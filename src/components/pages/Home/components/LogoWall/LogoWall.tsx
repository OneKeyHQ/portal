import { FC } from 'react';

import { useMediaQuery } from '../../../../../hooks';
import { Box, Container } from '../../../../base';
import { FadeIn } from '../../../../base/FadeIn';

import { LogoItem } from './LogoItem';
import { useLogoWallData } from './useLogoWallData';

export const LogoWall: FC = () => {
  const logos = useLogoWallData();
  const media = useMediaQuery();

  let logosGroup = [
    logos.slice(0, 2),
    logos.slice(2, 4),
    logos.slice(4, 6),
    logos.slice(6, 8),
  ];

  if (media.xlarge) {
    logosGroup = [[...logos]];
  } else if (media.medium) {
    logosGroup = [logos.slice(0, 4), logos.slice(4, 8)];
  } else if (media.small) {
    logosGroup = [logos.slice(0, 3), logos.slice(3, 6)];
  }

  return (
    <FadeIn>
      <Container>
        <Box
          xs={{
            paddingTop: 30,
            paddingBottom: 30,
            label: 'LogoWall',
          }}
        >
          {logosGroup &&
            logosGroup.map((innerLogos) => (
              <Box
                key={JSON.stringify(innerLogos)}
                xs={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
                xl={{
                  justifyContent: 'space-between',
                }}
              >
                {innerLogos.map((logo) => (
                  <LogoItem key={logo.name} {...logo} />
                ))}
              </Box>
            ))}
        </Box>
      </Container>
    </FadeIn>
  );
};
