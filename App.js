
import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/TabNavigator';
export default function App() {
const [count, setCount] = useState(0);

return (
  <NavigationContainer> 
{/* ... other components */}

<TabNavigator />
</NavigationContainer>
);
}


