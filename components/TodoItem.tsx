import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Fontisto, Octicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { useMutation } from '@apollo/client';
import { GET_TODOS } from '../lib/queries/queries';
import { REMOVE_TODO } from "../lib/mutations/mutations";
import { client } from "../lib/apollo";

export interface TodoItemDTO {
    todo: {
        id: number;
        title: string;
        detail: string | undefined;
    },
}

export const TodoItem = ({todo}: TodoItemDTO) => {
    const [removeTodo] = useMutation(REMOVE_TODO)

    async function handleRemoveTodo(id: number) {
        await removeTodo({
            variables: {
            removeTodoId: id
            },
            update: (cache) => {
                const { todos } = client.readQuery({query: GET_TODOS})

                cache.writeQuery({
                    query: GET_TODOS,
                    data: {
                        todos: {
                            ...todos
                        }
                    }
                })
            }
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.todoHeader}>
                <Text style={styles.headerTitle} numberOfLines={1}>{todo.title}</Text>
                <View style={styles.actionsContainer}>
                    <Link href={{ pathname: '/update-modal', params: { id: todo.id, title: todo.title, detail: todo.detail ? todo.detail : '' } }}>
                        <Octicons name="pencil" size={20} color="#00AEEF" />
                    </Link>
                    
                    <TouchableOpacity onPress={() => handleRemoveTodo(todo.id)}>
                        <Fontisto name="trash" size={20} color="#ad273f" />
                    </TouchableOpacity>
                </View>
            </View>
            {todo.detail ? <View>
                <Text style={styles.todoDetail}>{todo.detail}</Text>
            </View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: '#A09CB1',
        borderBottomWidth: 1,
        gap: 10
    },
    todoHeader: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '100%',
        gap: 15,
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    actionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15
    },
    todoDetail: {
        fontSize: 15,
        color: '#A09CB1'
    }
})