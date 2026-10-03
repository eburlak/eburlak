'use client';

import { Tooltip } from '@eburlak/tooltip';
import React from 'react';

const TooltipProvider = () => {
  React.useEffect(() => {
    const tooltip = new Tooltip({
        theme: {
            background: 'white',
            color: 'black',
            radius: 0
        }
    });

    return () => tooltip.destroy();
  }, []);

  return null;
};

export default TooltipProvider;
