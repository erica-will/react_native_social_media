import React from 'react';
import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import { Thread } from '@/store/threads';
import { useThreadsStore } from '@/store/threads';
import { timeAgo } from '@/utils/time';


export default function ThreadItem({ thread, showActions = true }: { thread: Thread; showActions?: boolean }) {
    const { toggleLike } = useThreadsStore();
    return (
        <Link href={`/${thread.id}`} asChild>
            <Pressable style={{ padding: 12 }}>
                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#ddd' }} />
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 6 }}>
                            <Text style={{ fontWeight: '700' }}>{thread.author.displayName}</Text>
                            <Text style={{ color: '#666' }}>@{thread.author.handle} · {timeAgo(thread.createdAt)}</Text>
                        </View>
                        <Text style={{ marginTop: 6 }}>{thread.text}</Text>
                        {showActions && (
                            <View style={{ flexDirection: 'row', gap: 16, marginTop: 8 }}>
                                <Pressable onPress={() => toggleLike(thread.id)}>
                                    <Text>♥ {thread.likes}</Text>
                                </Pressable>
                                <Text>💬 {thread.replies.length}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </Pressable>
        </Link>
    );
}