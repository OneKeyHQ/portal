import { FC, ReactNode } from 'react';

import { Box } from '../../../../../base';

import { ContentColumn } from './ContentColumn';
import { ContentItem } from './ContentItem';
import { ContentItemDescription } from './ContentItemDescription';
import { ContentItemDescriptions } from './ContentItemDescriptions';
import { ContentItemTitle } from './ContentItemTitle';
import { ContentItemTitle2 } from './ContentItemTitle2';

export type DynamicContentItems = {
  title: string;
  content: {
    title2?: string;
    description?: string;
    descriptions?: string[];
  }[];
}[];

export interface DynamicContentProps {
  children?: ReactNode;
  items: DynamicContentItems;
}

export const DynamicContent: FC<DynamicContentProps> = (props) => {
  const { children, items = [] } = props;

  if (items.length === 0) {
    return null;
  }

  return (
    <ContentColumn>
      {items.map((item) => (
        <ContentItem key={item.title}>
          <ContentItemTitle>{item.title}</ContentItemTitle>

          {item.content.map((item2) => (
            <Box key={JSON.stringify(item2)}>
              <ContentItemTitle2>{item2.title2}</ContentItemTitle2>

              {item2.description && (
                <ContentItemDescription>
                  {item2.description}
                </ContentItemDescription>
              )}

              {item2.descriptions && (
                <ContentItemDescriptions>
                  {item2.descriptions.map((description) => (
                    <ContentItemDescription key={description}>
                      {description}
                    </ContentItemDescription>
                  ))}
                </ContentItemDescriptions>
              )}
            </Box>
          ))}
        </ContentItem>
      ))}

      {children}
    </ContentColumn>
  );
};
