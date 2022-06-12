import React, { ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { ArrowRightIcon, Box, Button, CheckIcon, Flex, Span } from '../../base';

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

        {descriptions && (
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
        )}

        {points && (
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
        )}

        {button && (
          <Button
            size="large"
            fillWidth
            rightIcon={<ArrowRightIcon width={24} height={24} />}
          >
            {button.text}
          </Button>
        )}
      </Flex>

      {children}
    </Box>
  );
};
