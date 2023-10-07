import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { ReactNode } from 'react';

interface AppWrapperDTO {
    children: ReactNode
}

export const AppWrapper = ({children}: AppWrapperDTO) => {
    return (
        // <ApolloProvider client={client}>
            <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
            </View>
            <View style={styles.bodyView}>
            </View>
            {children}
            <StatusBar style={'auto'}/>
            </SafeAreaView>
        // </ApolloProvider>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#4C1D95',
      width: '100%',
      position: 'relative',
      maxHeight: '100%'
    },
    headerView: {
      height: '10%',
      width: '100%',
      backgroundColor: '#4C1D95'
    },
    bodyView: {
      height: '100%',
      width: '100%',
      backgroundColor: '#18181B'
    },
    todoList: {
      position: 'absolute',
      width: '95%',
      height: 100,
      backgroundColor: '#27272A',
      borderRadius: 16,
      top: 90,
      padding: 30,
    },
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
      paddingTop: 2,
      paddingBottom: 4,
      paddingLeft: 8,
      paddingRight: 8,
    },
    buttonText: {
      fontSize: 16,
      color: '#FFFFFF',
      fontWeight: 'bold'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ffffff'
    },
    link: {
      marginTop: 15,
      paddingVertical: 15,
    },
    linkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
});
