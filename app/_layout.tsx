import { useAuth } from '@/src/hooks/useAuth';
import { Stack } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
    const { isReady, user } = useAuth();


    if (!isReady) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
            </View>
        );
    }


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack>
                {!user ? (
                    <Stack.Screen name="auth/sign-in" options={{ headerShown: false }} />
                ) : (
                    <>
                        <Stack.Screen name="index" options={{ title: 'Threads' }} />
                        <Stack.Screen name="compose" options={{ title: '發文' }} />
                        <Stack.Screen name="[id]" options={{ title: 'Thread' }} />
                        <Stack.Screen name="profile" options={{ title: '個人檔案' }} />
                    </>
                )}
            </Stack>
        </GestureHandlerRootView>
    );
}