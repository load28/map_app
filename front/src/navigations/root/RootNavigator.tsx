import { AuthStackNavigator } from '../stack/AuthStackNavigator.tsx';
import { MainDrawerNavigator } from '../drawer/MainDrawerNavigator.tsx';

export const RootNavigator = () => {
  const isLogin = false;

  return <>{isLogin ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
};
