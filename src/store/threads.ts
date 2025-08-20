import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { immer } from 'zustand/middleware/immer';


export type User = { id: string; handle: string; displayName: string };
export type Reply = { id: string; author: User; text: string; createdAt: number };
export type Thread = { id: string; author: User; text: string; createdAt: number; likes: number; replies: Reply[] };


function uid() { return Math.random().toString(36).slice(2); }


type State = {
    isLoading: boolean;
    threads: Thread[];
    me: User;
    fetchThreads: () => Promise<void>;
    createThread: (text: string) => Promise<void>;
    replyToThread: (id: string, text: string) => Promise<void>;
    toggleLike: (id: string) => void;
    getThreadById: (id: string) => Thread | undefined;
};


export const useThreadsStore = create<State>()(
    persist(
        immer((set, get) => ({
            isLoading: false,
            threads: [],
            me: { id: 'u_' + uid(), handle: 'alice', displayName: 'Alice' },


            fetchThreads: async () => {
                set((s) => { s.isLoading = true; });
                await new Promise((r) => setTimeout(r, 300));
                set((s) => { s.isLoading = false; });
            },


            createThread: async (text) => {
                const now = Date.now();
                const me = get().me;
                const t: Thread = { id: 't_' + uid(), author: me, text, createdAt: now, likes: 0, replies: [] };
                set((s) => { s.threads.unshift(t); });
            },


            replyToThread: async (id, text) => {
                const me = get().me;
                const r: Reply = { id: 'r_' + uid(), author: me, text, createdAt: Date.now() };
                set((s) => {
                    const t = s.threads.find((x) => x.id === id);
                    if (t) t.replies.push(r);
                });
            },


            toggleLike: (id) => set((s) => {
                const t = s.threads.find((x) => x.id === id);
                if (t) t.likes = Math.max(0, t.likes + (t.likes_toggle ? -1 : 1));
                // @ts-ignore store a flag not in type for demo purposes
                if (t) t.likes_toggle = !t.likes_toggle;
            }),


            getThreadById: (id) => get().threads.find((t) => t.id === id),
        })),
        { name: 'threads-store', getStorage: () => AsyncStorage }
    )
);