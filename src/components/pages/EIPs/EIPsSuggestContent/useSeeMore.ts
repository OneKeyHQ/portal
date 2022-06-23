import { useState } from 'react';

interface UseSeeMoreParams<T> {
  list: T[];
  limit?: number;
}

export function useSeeMore<T>(params: UseSeeMoreParams<T>) {
  const { list: initialList, limit = 5 } = params;

  const [list, setList] = useState<T[]>(
    initialList.length > limit ? initialList.slice(0, limit) : initialList,
  );

  function onClick() {
    setList([...list, ...initialList.slice(list.length, list.length + limit)]);
  }

  return {
    list,
    hasMore: list.length < initialList.length,
    buttonProps: {
      onClick,
    },
  };
}
