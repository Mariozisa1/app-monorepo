import type { PropsWithChildren } from 'react';

export interface IPopoverContent extends PropsWithChildren {
  isOpen?: boolean;
  closePopover: () => void;
}

export interface IPopoverTooltip {
  tooltip: string;
  title: string;
}
