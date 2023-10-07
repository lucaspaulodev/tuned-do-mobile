import { Button, Platform, StyleSheet, TextInput, View, Text } from 'react-native';
import {useForm, Controller} from 'react-hook-form'
import { useMutation } from '@apollo/client';
import { CREATE_TODO, UPDATE_TODO } from '../lib/mutations/mutations';
import { client } from '../lib/apollo';
import { GET_TODOS } from '../lib/queries/queries';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useLocalSearchParams } from 'expo-router';

interface FormInputsDTO {
  title: string;
  detail?: string;
}

export default function ModalScreen() {
    const params = useLocalSearchParams();

    const {
        control, handleSubmit, formState: { errors }
    } = useForm<FormInputsDTO>();

    const [updateTodo] = useMutation(UPDATE_TODO)

    async function handleUpdateTodo(data: any) {
        if(data.title === '') {
        return 
        }

        await updateTodo({
            variables: {
            updateTodoId: Number(params.id),
            updateTodoInput: {
                title: data.title,
                detail: data.detail
            }
            },
        })
    }

    return (
        <View style={styles.container}>
        <View style={styles.fieldset}>
            <Text style={styles.label}>Title</Text>
            <Controller
            control={control}
            rules={{
            required: true,
            }}
            defaultValue={`${params.title}`}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                style={errors.title ? styles.error  : styles.input}
                placeholder={errors.title ? 'This field is required' : 'Type a title to your Todo'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                defaultValue={`${params.title}`}
                placeholderTextColor={errors.title && '#ad273f'}
            />
            )}
            name="title"
            />
        </View>

        <View style={styles.fieldset}>
            <Text style={styles.label}>Details</Text>
            <Controller
            control={control}
            rules={{
            required: false,
            }}
            defaultValue={`${params.detail}`}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                style={styles.input}
                placeholder="Type details about your new Todo"
                onBlur={onBlur}
                onChangeText={onChange}
                defaultValue={`${params.detail}`}
                value={value}
            />
            )}
            name="detail"
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
            style={{width: '100%'}}
            onPress={handleSubmit(handleUpdateTodo)}
            >
            <Text style={styles.buttonText}>{'UPDATE TODO'}</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#27272A',
        padding: 20,
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    fieldset: {
        marginBottom: 20,
        width: '80%',
        backgroundColor: '#27272A',
    },
    label: {
        fontSize: 20,
        fontWeight: '600',
        color: '#6550b9',
        textAlign: 'left',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#BAA7FF',
        padding: 15,
        borderRadius: 8,
        fontSize: 20,
        color: '#BAA7FF'
    },
    error: {
        borderWidth: 1,
        borderColor: '#ad273f',
        padding: 15,
        borderRadius: 8,
        fontSize: 20,
        color: '#BAA7FF',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        padding: 15,
        marginTop: 25,
        borderRadius: 8,
        backgroundColor: '#00AEEF',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF'
    }
});
