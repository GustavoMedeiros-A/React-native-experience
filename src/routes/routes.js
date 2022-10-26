import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome/Welcome'
import Weather from '../pages/Weather/Weather'
import AppTodo from '../pages/ToDo/AppToDo'
import Choose from "../pages/Choose/Choose";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{headerShown:false}}
            />          
            <Stack.Screen
            name='Weather'
            component={Weather}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name='AppTodo'
            component={AppTodo}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name='Choose'
            component={Choose}
            options={{headerShown:false}}
            />

            
        </Stack.Navigator>
    )
}