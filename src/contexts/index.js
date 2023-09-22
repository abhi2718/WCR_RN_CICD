import React from 'react';
import {providers} from './providerList';

const CombinedProviders = ({children}) => {
  return providers.reduce(
    (acc, Provider) => React.createElement(Provider, null, acc),
    children,
  );
};

export default CombinedProviders;
