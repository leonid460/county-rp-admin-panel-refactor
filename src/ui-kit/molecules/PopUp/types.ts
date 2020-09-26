import React from 'react';

export type TAlign = 'left' | 'right';

export interface IPopUpProps {
  openerContent: React.ReactNode;
  align?: TAlign;
}
