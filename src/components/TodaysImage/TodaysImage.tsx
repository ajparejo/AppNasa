import { FC } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native"
import { useNavigation } from "@react-navigation/native";

import { PostImage, RoutesParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavProps = NativeStackNavigationProp<RoutesParams, 'Detalles'>;

export const TodaysImage: FC<PostImage> = ({title, date, url, explanation}) => {

    const { navigate } = useNavigation<PostImageNavProps>();

    const handleViewPress = () => {
        navigate('Detalles', {title, date, url, explanation});
    }

  return (
    <View style={styles.container}>
        <Image source={{uri: url}} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.button}>
            <Button title="Ver Imagen" onPress={handleViewPress}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3188AA',
        marginVertical: 16,
        borderRadius: 32,
        padding: 16,
    },
    image: {
        width:'100%',
        height:180,
        borderWidth: 2,
        borderColor: '#f0f0f9',
        borderRadius: 32,
    },
    title: {
        fontSize: 20,
        color: '#f0f0f9',
        fontWeight: '700',
    },
    date: {
        fontSize: 16,
        color: '#f0f0f9',
    },
    button: {
        alignItems: 'flex-end',
    }
})
