type NavigationFunction = (...args: any[]) => void;
type Navigation = {
    addListener: NavigationFunction;
    canGoBack: NavigationFunction;
    dispatch: NavigationFunction;
    getId: NavigationFunction;
    getParent: NavigationFunction;
    getState: NavigationFunction;
    goBack: NavigationFunction;
    isFocused: NavigationFunction;
    navigate: NavigationFunction;
    pop: NavigationFunction;
    popToTop: NavigationFunction;
    push: NavigationFunction;
    removeListener: NavigationFunction;
    replace: NavigationFunction;
    reset: NavigationFunction;
    setOptions: NavigationFunction;
    setParams: NavigationFunction;
  };
  
  type RouteParams = {
    uid: string;
  };
  
  type Route = {
    key: string;
    name: string;
    params: RouteParams;
    path?: undefined;
  };
  
  type NavigationObject = {
    navigation: Navigation;
    route: Route;
  };