
import React from 'react';

export type PageComponent<P = {}> = React.FC<P> & {
  Layout?: React.FC;
};
