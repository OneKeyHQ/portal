import { FC, ReactNode } from 'react';

import { Button, Flex } from '../../../base';
import { InfoCard } from '../../../common/InfoCard';

import { useCardsData } from './useCardsData';

export interface CardsProps {
  children?: ReactNode;
}

export const Cards: FC<CardsProps> = (props) => {
  const { children } = props;
  const data = useCardsData();

  return (
    <Flex
      xs={{ flexDirection: 'column', gap: 40 }}
      m={{ flexDirection: 'row' }}
    >
      {data.map((item) => (
        <InfoCard
          link={item.link}
          key={item.mainTitle}
          mainTitle={item.mainTitle}
          imageNode={item.imageNode}
          buttonNode={<Button variant="outlined">{item.button}</Button>}
        />
      ))}

      {children}
    </Flex>
  );
};
