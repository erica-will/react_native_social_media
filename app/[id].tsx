import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, TextInput, Button, SafeAreaView } from 'react-native';
import { useThreadsStore } from '@/store/threads';
import ThreadItem from '@/components/ThreadItem';


export default function ThreadDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { getThreadById, replyToThread } = useThreadsStore();
    const thread = getThreadById(id!);
    const [text, setText] = React.useState('');


    if (!thread) return <Text>找不到貼文</Text>;


    return (
        <SafeAreaView style={{ flex: 1, padding: 12 }}>
            <ThreadItem thread={thread} showActions={false} />
            <View style={{ height: 1, backgroundColor: '#eee', marginVertical: 8 }} />
            <FlatList
                data={thread.replies}
                keyExtractor={(r) => r.id}
                renderItem={({ item }) => (
                    <View style={{ paddingVertical: 8 }}>
                        <Text style={{ fontWeight: '600' }}>{item.author.displayName}</Text>
                        <Text>{item.text}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text>尚無回覆</Text>}
            />
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <TextInput
                    placeholder="回覆..."
                    value={text}
                    onChangeText={setText}
                    style={{ flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 12, padding: 10 }}
                />
                <Button title="送出" onPress={async () => { if (!text.trim()) return; await replyToThread(thread.id, text.trim()); setText(''); }} />
            </View>
        </SafeAreaView>
    );
}