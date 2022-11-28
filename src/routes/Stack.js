import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import PassoStack from "../components/PassoStack";

const Stack = createNativeStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="TelaA"
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name="TelaA"
            options={{ title: 'Informações Iniciais' }}>
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB">
            {props => (
                <PassoStack
                    {...props}
                    voltar
                    avancar="TelaC"
                    avancarParams={{ numero: parseInt(Math.random() * 100) }}
                >
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {props => (
                <PassoStack
                    {...props}
                    voltar
                    avancar="TelaC"
                    avancarParams={{ numero: parseInt(Math.random() * 100) }}
                >
                    <TelaC {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)