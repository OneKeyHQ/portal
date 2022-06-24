import { useState } from 'react';

export function useMenu() {
  const [isActive, setIsActive] = useState(false);

  return {
    menuTriggerProps: {
      onClick: () => setIsActive(!isActive),
    },
    menuItemsProps: {
      onClickOutside: () => setIsActive(false),
      isActive,
    },
  };
}
