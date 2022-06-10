import React, { ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  ArrowRightIcon,
  Box,
  Button,
  CheckIcon,
  Flex,
  Span,
} from '../../../base';

export interface AffiliateProgramCardProps {
  children?: ReactNode;
  title: string;
  button: {
    text: string;
    link: string;
  };
  descriptions: string[];
  points: string[];
}

export const AffiliateProgramCard: React.FC<AffiliateProgramCardProps> = (
  props,
) => {
  const { children, button, points, descriptions, title } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        flex: 1,
        borderWidth: 1,
        borderRadius: 40,
        borderStyle: 'solid',
        borderColor: theme.colors.test200,
      }}
    >
      <Flex
        xs={{
          textAlign: 'left',
          gap: 32,
          padding: 32,
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
        m={{
          gap: 80,
          padding: 80,
        }}
      >
        <Span
          xs={{ ...theme.text.medium700, textAlign: 'center' }}
          m={{ ...theme.text.medium800 }}
          l={{ ...theme.text.medium900 }}
        >
          {title}
        </Span>

        <Flex xs={{ flexDirection: 'column', ...theme.text.normal400 }}>
          {descriptions.map((description, index) => {
            const isLast = index === descriptions.length - 1;

            return (
              <>
                <Span>{description}</Span>
                {!isLast && <br />}
              </>
            );
          })}
        </Flex>

        <Flex
          xs={{ flexDirection: 'column', gap: 16, ...theme.text.medium400 }}
        >
          {points.map((point) => (
            <Flex>
              <Box xs={{ color: theme.colors.brandAlt400 }}>
                <CheckIcon width={24} height={24} />
              </Box>
              <Box xs={{ paddingLeft: 16 }}>{point}</Box>
            </Flex>
          ))}
        </Flex>

        <Button
          size="large"
          fillWidth
          rightIcon={<ArrowRightIcon width={24} height={24} />}
        >
          {button.text}
        </Button>
      </Flex>

      <Box
        xs={{
          textAlign: 'center',
          paddingBottom: 32,
          paddingLeft: 32,
          paddingRight: 32,
        }}
        m={{
          paddingBottom: 80,
          paddingLeft: 80,
          paddingRight: 80,
        }}
        xl={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Span xs={{ ...theme.text.normal200 }}>
          Contact our customer success team to{' '}
          <Span
            xs={{
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            learn more
          </Span>{' '}
          details about our affiliate program.
        </Span>
      </Box>

      {children}
    </Box>
  );
};
