import React, { ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, CheckIcon, CircleIcon, Divider, Flex } from '../../../../base';

import { OurOfferSectionItemButton } from './OurOfferSectionItemButton';
import { OurOfferSectionItemTitle } from './OurOfferSectionItemTitle';

export interface OurOfferSectionItemProps {
  children?: ReactNode;
  title?: string;
  button: {
    text: string;
    link: string;
  };
  points?: string[];
}

export const OurOfferSectionItem: React.FC<OurOfferSectionItemProps> = (
  props,
) => {
  const { children, button, points = [], title } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: theme.colors.test100,
        transition: theme.transitions.allEaseOut,
        borderRadius: 40,
        gap: 26,
        padding: '40px 32px',
        height: 'fit-content',
      }}
      m={{
        ':hover': {
          transform: 'translateY(-40px)',
          boxShadow: '0px 24px 48px rgba(0, 0, 0, 0.08)',
        },
      }}
      xl={{ gap: 60, padding: 80 }}
    >
      <Flex
        xs={{
          gap: 32,
          flexDirection: 'column',
        }}
      >
        <OurOfferSectionItemTitle>{title}</OurOfferSectionItemTitle>

        <Divider />

        <Flex xs={{ flexDirection: 'column', gap: 16 }}>
          {points.map((point, index) => (
            <Flex key={point}>
              {/* last item is circle icon */}
              {index === points.length - 1 ? (
                <Box xs={{ color: theme.colors.test300 }}>
                  <CircleIcon width={24} height={24} />
                </Box>
              ) : (
                <Box xs={{ color: theme.colors.brandAlt400 }}>
                  <CheckIcon width={24} height={24} />
                </Box>
              )}

              <Box
                xs={{
                  paddingLeft: 16,
                  color: theme.colors.test500,
                  ...theme.text.normal400,
                }}
              >
                {point}
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <OurOfferSectionItemButton link={button.link}>
        {button.text}
      </OurOfferSectionItemButton>

      {children}
    </Box>
  );
};
