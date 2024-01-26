import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RoutesParams } from '../../types';
import { Header } from '../../components/Header';

export const Detalles = () => {

    const { params: { title, url, date, explanation } } = useRoute<NativeStackScreenProps<RoutesParams, 'Detalles'>['route']>();

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <Image source={{ uri: url }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#003FA1',
    },
    content: {
        backgroundColor: '#3188AA',
        borderRadius: 32,
        padding: 16,
        marginVertical: 16,
        flex: 1,
    },
    image: {
        width: '100%',
        height: '50%',
        borderColor: '#f0f0f9',
        borderRadius: 32,
        borderWidth: 2,
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f0f0f9',
        marginBottom: 16,
    },
    date: {
        fontSize: 16,
        color: '#f0f0f9',
        marginBottom: 16,
    },
    explanation: {
        color: '#f0f0f9',
        fontSize: 16,
    }
})