import { View, Text, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../lib/queries/queries';
import { StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { AppWrapper } from '../components/AppWrapper';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import { TodoItem } from '../components/TodoItem';
import { useCallback, useState } from 'react';

interface TodoDTO {
  id: number;
  title: string;
  detail: string;
}

export default function Home() {
  const [refreshing, setIsRefreshing] = useState(false)
  const {data, loading, refetch} = useQuery(GET_TODOS)

  const onRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await refetch()
    setIsRefreshing(false);
  }, []);

  return (
      <AppWrapper>
        <View style={styles.todoList}>   
          <Header/>
          {loading ? <Text>Loading...</Text> : null}
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            data.todos.length > 0 ? 
            <ScrollView style={styles.scrollView} refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            } scrollEnabled={true}>
              {data.todos.length > 0 && data.todos.map((todo: TodoDTO) => (
                <TodoItem key={todo.id} todo={todo}/>
              ))}
            </ScrollView>
            
            : <Text style={styles.notTodosText}>You dont have todos yet</Text>
          )}
          
        </View>
      </AppWrapper>
  );
}

const styles = StyleSheet.create({
  todoList: {
    position: 'absolute',
    width: '95%',
    minHeight: 400,
    height: 'auto',
    maxHeight: 550,
    backgroundColor: '#27272A',
    borderRadius: 16,
    top: 90,
    padding: 30,
  },
  scrollView: {
    width: '100%',
    // height: '100%',
    minHeight: 300,
    maxHeight: 500,
    marginTop: 20,
  },
  notTodosText: {
    marginTop: 30,
    fontSize: 30,
      fontWeight: 'bold',
      color: '#A09CB1'
  }
});