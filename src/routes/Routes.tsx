import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RoutesParams } from "../types";
import { Home } from "../views/Home";
import { Detalles } from "../views/Detalles";

const Stack = createNativeStackNavigator<RoutesParams>();
const routerScreenDefault = {
    headerStyle: {
        backgroundColor: '#003FA1',
    },
    headerTitleStyle: {
        color: '#fff',
    }
}

export const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={routerScreenDefault}/>
                <Stack.Screen name="Detalles" component={Detalles} options={routerScreenDefault}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};