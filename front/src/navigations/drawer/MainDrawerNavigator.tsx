import { createDrawerNavigator } from '@react-navigation/drawer';
import { MapHomeScreen } from '../../screens/mapHomeScreen.tsx';

export const MainDrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
    </Drawer.Navigator>
  );
};
