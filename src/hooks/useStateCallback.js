import { useCallback, useEffect, useRef, useState } from 'react';

export function useStateCallback(initialState) {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null); // mutable ref to store current callback

  const setStateCallback = useCallback((state, cb) => {
    cbRef.current = cb; // store passed callback to ref
    setState(state);
  }, []);

  useEffect(() => {
    // cb.current is `null` on initial render, so we only execute cb on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}

/**** usage example ****
 *
 *
 const handleSomeClick = () => {
  setState(
    prev => prev + 1,
    // important: use `s`, not the stale/old closure value `state`
    s => {
      console.log('I am called after setState, state:', s);
    },
  );
 };
 *
 *
****/
