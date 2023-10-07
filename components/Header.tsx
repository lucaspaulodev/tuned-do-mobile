import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export const Header = () => {
    return (
        <View style={styles.header}>
          <Text style={styles.title}>Tuned Do</Text>
          <Link href="/create-modal" asChild>
            <TouchableOpacity style={styles.createTodo}>
            <Entypo name="plus" size={16} color="white" />
              <Text style={styles.buttonText}>New todo</Text>
            </TouchableOpacity>
          </Link>
        </View> 
    )
}

const styles = StyleSheet.create({
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    createTodo: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#3FAD27',
      gap: 3,
      borderRadius: 8,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
    },
    buttonText: {
      fontSize: 16,
      color: '#FFFFFF',
      fontWeight: 'bold'
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#ffffff'
    },
  });

