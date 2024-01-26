import { View, Text, Image, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
          <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image style={styles.images} source={require('../../assets/nasa_logo.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F0F0F3',
  },
  images: {
    width: 60,
    height: 60,
  },
});