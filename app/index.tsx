import React from 'react';
import { Link } from 'expo-router';
import { FlatList, RefreshControl, SafeAreaView, View, Text, Button } from 'react-native';
import { useThreadsStore } from '@/store/threads';
import ThreadItem from '@/components/ThreadItem';


export default function Feed() {
    const { threads, fetchThreads, isLoading } = useThreadsStore();


    React.useEffect(() => { fetchThreads(); }, [fetchThreads]);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 22, fontWeight: '700' }}>Threads</Text>
                <Link href="/compose" asChild>
                    <Button title="發文" />
                </Link>
            </View>
            <FlatList
                data={threads}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ThreadItem thread={item} />}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchThreads} />}
                contentContainerStyle={{ paddingBottom: 24 }}
            />
        </SafeAreaView>
    );
}