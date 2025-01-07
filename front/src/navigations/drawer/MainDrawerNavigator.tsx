import { createDrawerNavigator } from '@react-navigation/drawer';
import { MapHomeScreen } from '../../screens/map/mapHomeScreen.tsx';
import { FeedHomeScreen } from '../../screens/feed/FeedHomeScreen.tsx';
import { CalendarHomeScreen } from '../../screens/calendar/CalendarHomeScreen.tsx';

const Drawer = createDrawerNavigator();

export const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
};
