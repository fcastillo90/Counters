import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { INIT_COUNTERLIST_STATE } from '../constants';

export const CounterContext = React.createContext([{}, () => {}]);

export const CounterProvider = ({ children }) => {
  const [state, setState] = useState(INIT_COUNTERLIST_STATE);
  return (
    <CounterContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
