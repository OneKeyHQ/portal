import { useState } from 'react';

export function useMenu() {
  const [isActive, setIsActive] = useState(false);

  return {
    menuItemsProps: {
      onClick: () => setIsActive(!isActive),
    },
    menuTriggerProps: {
      onClickOutside: () => setIsActive(false),
      isActive,
    },
  };
}
