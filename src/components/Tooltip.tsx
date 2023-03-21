import React, { type PropsWithChildren } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

type TooltipComponentProps = {
    stack: JSX.Element[]
}

export const TooltipComponent = ({children, stack}: PropsWithChildren<TooltipComponentProps>) => {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {/* <button className="IconButton"> */}
            {/* <div className="w-full"> */}
              {children}
              {/* </div> */}
          {/* </button> */}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={5}>
            {stack}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
