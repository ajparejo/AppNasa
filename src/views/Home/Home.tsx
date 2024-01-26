import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from '../../components/Header';
import { TodaysImage } from '../../components/TodaysImage';
import { LastWeekImages } from '../../components/LastWeekImages';
import { format, sub } from 'date-fns';
import Fetch from '../../api/fetch';
import { PostImage } from '../../types';

export const Home = () => {
    const [todayImage, setTodayImage] = useState<PostImage>({});
    const [lastWeekImages, setLastWeekImages] = useState<PostImage[]>([]);

    useEffect(() => {
        const loadTodaysImage = async () => {
            try {
                const todayImageFetch = await Fetch();
                setTodayImage(todayImageFetch);
            } catch (error) {
                console.error(error);
                setTodayImage({});
            }
        };
        
        const loadLastWeekImages = async () => {
            try {
                const date = new Date();
                const todaysDate = format(sub(date, {days: 1}), 'yyyy-MM-dd');
                const weekAgoDate = format(sub(date, {days: 7}), 'yyyy-MM-dd');
                
                const lastWeekImagesFetch = await Fetch(`&start_date=${weekAgoDate}&end_date=${todaysDate}`,);

                setLastWeekImages(lastWeekImagesFetch);
            } catch (error) {
                console.error(error);
            }
        };
        
        loadTodaysImage().catch(null);
        loadLastWeekImages().catch(null);
    }, []);

    return (
        <View style={styles.container}>
            <Header/>
            <TodaysImage {...todayImage} />
            <LastWeekImages postImages={lastWeekImages}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#003FA1',
    },
})