import React, { Fragment, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  ArrowRightIcon,
  Box,
  Button,
  CheckIcon,
  Flex,
  Link,
  Span,
} from '../../base';

export interface FeatureInformationCardProps {
  children?: ReactNode;
  title?: string;
  button?: {
    text: string;
    link: string;
  };
  descriptions?: string[];
  points?: string[];
}

export const FeatureInformationCard: React.FC<FeatureInformationCardProps> = (
  props,
) => {
  const { children, button, points, descriptions, title } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 40,
        borderStyle: 'solid',
        borderColor: theme.colors.test200,
        transition: theme.transitions.allEaseOut,
      }}
      m={{
        ':hover': {
          transform: 'translateY(-40px)',
          boxShadow: '0px 24px 48px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      <Flex
        xs={{
          flex: 1,
          width: '100%',
          textAlign: 'left',
          gap: 32,
          padding: 32,
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
        l={{ gap: 40, padding: 40 }}
        xl={{ gap: 50, padding: 50 }}
        xxl={{ gap: 80, padding: 80 }}
      >
        <Span
          xs={{ ...theme.text.medium700, textAlign: 'center' }}
          l={{ ...theme.text.medium800 }}
          xl={{ ...theme.text.medium900 }}
        >
          {title}
        </Span>

        {descriptions && (
          <Flex xs={{ flexDirection: 'column', ...theme.text.normal400 }}>
            {descriptions.map((description, index) => {
              const isLast = index === descriptions.length - 1;

              return (
                <Fragment key={description}>
                  <Span>{description}</Span>
                  {!isLast && <br />}
                </Fragment>
              );
            })}
          </Flex>
        )}

        {points && (
          <Flex
            xs={{ flexDirection: 'column', gap: 16, ...theme.text.medium400 }}
          >
            {points.map((point) => (
              <Flex key={point}>
                <Box
                  xs={{
                    color: theme.colors.brandAlt400,
                    opacity: point ? 1 : 0,
                  }}
                >
                  <CheckIcon width={24} height={24} />
                </Box>
                <Box xs={{ paddingLeft: 16 }}>{point}</Box>
              </Flex>
            ))}
          </Flex>
        )}

        {button && (
          <Box xs={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}>
            <Link css={{ width: '100%' }} to={button.link}>
              <Button
                size="large"
                fillWidth
                rightIcon={<ArrowRightIcon width={24} height={24} />}
              >
                {button.text}
              </Button>
            </Link>
          </Box>
        )}
      </Flex>

      {children}
    </Box>
  );
};
