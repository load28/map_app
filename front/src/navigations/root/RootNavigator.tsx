import { AuthStackNavigator } from '../AuthStackNavigator.tsx';
import { MainDrawerNavigator } from '../drawer/MainDrawerNavigator.tsx';

export const RootNavigator = () => {
  const isLogin = true;

  return <>{isLogin ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
};
