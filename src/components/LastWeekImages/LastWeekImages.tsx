import { FC } from "react"
import { View, Text, ScrollView, StyleSheet} from "react-native"
import { PostImage } from "../../types"
import { PostImageComp } from "../PostImageComp/PostImageComp"

export const LastWeekImages: FC<{postImages?: PostImage[]}> = ({postImages}) => {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Imagenes de la semana que pasó</Text>
        <ScrollView>
            {postImages.map(Images => (
                <PostImageComp key={`post-images-${Images.date}`}{...Images}/>
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        borderRadius: 32,
    },
    image: {
        width:'100%',
        height:180,
        borderWidth: 2,
        borderColor: '#f0f0f9',
        borderRadius: 32,
    },
    title: {
        fontSize: 16,
        color: '#f0f0f9',
        marginBottom: 10,
    },
})
