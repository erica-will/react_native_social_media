import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useThreadsStore } from '@/store/threads';


export function useAuth() {
    const [isReady, setReady] = React.useState(false);
    const [user, setUser] = React.useState<{ id: string; handle: string; displayName: string } | null>(null);
    const { me } = useThreadsStore();
    React.useEffect(() => {
        (async () => {
            const raw = await AsyncStorage.getItem('auth');
            if (raw) setUser(JSON.parse(raw));
            setReady(true);
        })();
    }, []);


    return {
        isReady,
        user,
        signIn: async (handle: string) => {
            const u = { id: 'me', handle, displayName: handle };
            await AsyncStorage.setItem('auth', JSON.stringify(u));
            setUser(u);
        },
        signOut: async () => {
            await AsyncStorage.removeItem('auth');
            setUser(null);
        },
        me,
    } as const;
}