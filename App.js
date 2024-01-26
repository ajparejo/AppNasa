import { StyleSheet, View } from 'react-native';
import { Routes } from './src/routes/Routes';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003FA1',
    paddingTop: 45,
  },
});
