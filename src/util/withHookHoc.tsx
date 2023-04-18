import React from 'react';

export const withHookHoc = <C extends {}, H>(
  Component: React.ComponentType<C>,
  hook: (props: H) => C,
) => {
  const HOC = (props: H) => <Component {...hook(props)} />;
  HOC.displayName = `Hooked(${getDisplayName(Component)})`;
  return HOC;
};

const getDisplayName = <C,>(WrappedComponent: React.ComponentType<C>) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
