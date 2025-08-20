import { useAuth } from '@/src/hooks/useAuth';
import React from 'react';
import { Button, SafeAreaView, Text, TextInput } from 'react-native';


export default function SignIn() {
    const { signIn } = useAuth();
    const [handle, setHandle] = React.useState('alice');


    return (
        <SafeAreaView style={{ flex: 1, padding: 16, gap: 12 }}>
            <Text style={{ fontSize: 22, fontWeight: '700' }}>登入</Text>
            <TextInput placeholder="你的 handle" value={handle} onChangeText={setHandle} style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 12, padding: 12 }} />
            <Button title="開始使用" onPress={() => signIn(handle)} />
        </SafeAreaView>
    );
}