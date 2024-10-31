import { useCallback, useEffect } from 'react';
import { useBeforeUnload, useBlocker } from 'react-router-dom';

export function usePrompt(message: string, when = true) {
  const blocker = useBlocker(when);

  useEffect(() => {
    if (blocker.state === 'blocked' && !when) {
      blocker.reset();
    }
  }, [blocker, when]);

  useEffect(() => {
    if (blocker.state === 'blocked') {
      const proceed = window.confirm(message);
      if (proceed) {
        blocker.proceed();
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);

  useBeforeUnload(
    useCallback(
      (event) => {
        if (when) {
          event.preventDefault();
          event.returnValue = message;
        }
      },
      [message, when]
    )
  );
}