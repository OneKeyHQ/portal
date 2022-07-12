import { FC, Fragment, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../../hooks';
import { Box, Divider, Flex, Img, Link, Span } from '../../../../base';

import { ComingSoonLabel } from './ComingSoonLabel';
import { RecommendSectionDataItem } from './useRecommendSectionData';

export interface ProductCardProps {
  children?: ReactNode;
  data: RecommendSectionDataItem;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { children, data } = props;
  const theme = useTheme();
  const { hoverProps, isHovered } = useHover({
    timeout: 10,
  });

  return (
    <Box
      {...hoverProps}
      xs={{
        borderRadius: 40,
        backgroundColor: theme.colors.test100,
      }}
    >
      <Link to={data.status === 'normal' ? data.path : ''}>
        <Fragment key={data.name}>
          <Flex
            xs={{ padding: 50, alignItems: 'center', justifyContent: 'center' }}
          >
            <Box xs={{ position: 'relative' }}>
              <Img
                xs={{
                  width: 'auto',
                  height: 220,
                }}
                m={{
                  height: 320,
                }}
                xxl={{
                  height: 420,
                }}
                src={data.image}
              />

              {data.status === 'normal' && (
                <Box
                  xs={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transition: theme.transitions.allCubicBezier,
                    opacity: isHovered ? 1 : 0,
                  }}
                >
                  {data.hoverImage}
                </Box>
              )}
            </Box>
          </Flex>

          <Box xs={{ paddingLeft: 24, paddingRight: 24 }}>
            <Divider />
          </Box>

          <Flex
            xs={{
              color: theme.colors.test500,
              padding: '24px 24px 40px 24px',
              gap: 24,
              flexDirection: 'column',
            }}
          >
            <Flex xs={{ gap: 8, flexDirection: 'column' }}>
              <Flex
                xs={{
                  gap: 8,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}
              >
                <Span xs={theme.text.medium700}>{data.name}</Span>
                {data.status === 'comingSoon' && <ComingSoonLabel />}
              </Flex>

              <Span xs={theme.text.normal400}>{data.description}</Span>
            </Flex>

            <Span xs={theme.text.normal700}>{data.formattedPrice}</Span>
          </Flex>
        </Fragment>
      </Link>

      {children}
    </Box>
  );
};
