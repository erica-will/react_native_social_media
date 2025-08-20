import { useAuth } from '@/src/hooks/useAuth';
import { Button, SafeAreaView, Text, View } from 'react-native';


export default function Profile() {
    const { user, signOut } = useAuth();
    return (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>個人檔案</Text>
            <View style={{ marginVertical: 12 }}>
                <Text>ID: {user?.id}</Text>
                <Text>名稱: {user?.displayName}</Text>
                <Text>Handle: @{user?.handle}</Text>
            </View>
            <Button title="登出" onPress={signOut} />
        </SafeAreaView>
    );
}