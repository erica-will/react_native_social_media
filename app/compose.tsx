import { useThreadsStore } from '@/src/store/threads';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, SafeAreaView, TextInput } from 'react-native';


export default function Compose() {
    const [text, setText] = React.useState('');
    const { createThread } = useThreadsStore();
    const router = useRouter();


    return (
        <SafeAreaView style={{ flex: 1, padding: 16, gap: 12 }}>
            <TextInput
                placeholder="你在想什麼？"
                value={text}
                onChangeText={setText}
                multiline
                style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 12, padding: 12, minHeight: 120 }}
            />
            <Button
                title="送出"
                onPress={async () => {
                    if (!text.trim()) return;
                    await createThread(text.trim());
                    router.replace('/');
                }}
            />
        </SafeAreaView>
    );
}