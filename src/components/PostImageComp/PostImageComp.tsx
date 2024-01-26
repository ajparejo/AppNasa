import { FC } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import { PostImage, RoutesParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavProps = NativeStackNavigationProp<RoutesParams, 'Detalles'>;


export const PostImageComp: FC<PostImage> = ({title, date, url, explanation}) => {

  const { navigate } = useNavigation<PostImageNavProps>();

    const handleViewPress = () => {
        navigate('Detalles', {title, date, url, explanation});
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.button}>
          <Button title='Ver Imagen' onPress={handleViewPress}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(10,20,180,10)',
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 10,
  },
  date: {
    color:'#fff',
    marginBottom: 5,
  },
  button: {
    alignItems: 'flex-end',
  }
})
