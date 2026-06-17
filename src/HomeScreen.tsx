import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HomeScreen() {

    const animals = [
        {
            uid: 1,
            title: 'Dogs',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4Vi3ji0PkDAmLiBG8BWkCgbycRaoUjXhVHqZE_mD6VY-nS2tTRnGszM&s=10',
        },
        {
            uid: 2,
            title: 'Cats',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4Vi3ji0PkDAmLiBG8BWkCgbycRaoUjXhVHqZE_mD6VY-nS2tTRnGszM&s=10',
        },
        {
            uid: 3,
            title: 'Rabbits',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4Vi3ji0PkDAmLiBG8BWkCgbycRaoUjXhVHqZE_mD6VY-nS2tTRnGszM&s=10',
        },
        {
            uid: 4,
            title: 'Ponies',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlb0SA_aR3OBL_kpDFR6A6RqFTffFeg0c94Qf_VSIXis5MbEf9jV07DY&s=10',
        },
        {
            uid: 5,
            title: 'Calves',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4Vi3ji0PkDAmLiBG8BWkCgbycRaoUjXhVHqZE_mD6VY-nS2tTRnGszM&s=10'
        }
    ]

    return (
        <View style={styles.bodyBg}>
            <View style={[styles.container, styles.header]}>
                <View>
                    <Text style={styles.userGreeting}>Welcome back,</Text>
                    <Text style={styles.userName}>Sara Smith</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluEPXA7Bd2lNT-PNk2OzvOYTUDFYweJ6Fm6CBmDLD6g&s',
                    }}
                    style={styles.userImage}
                />
            </View>
            <View style={[styles.container, styles.searchBox]}>
                <Text style={styles.search}>Search here</Text>
            </View>
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {animals.map(({ uid, title, imageUrl }) => (
                        <View key={uid}>
                            <Image source={{ uri: imageUrl }} style={styles.circularCards} />
                            <Text style={styles.ccText}>{title}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.container}>
                <View style={styles.forYouSeeAll}>
                    {/* <Text>For You</Text> */}
                    {/* <Text>See all</Text> */}
                </View>
                <ScrollView >
                    {/* style={styles.squareCards} */}
                    // list/array with image cards here
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: 'white',
        // padding: 8,
    },
    container: {
        padding: 8,
        // marginTop: 8,
        // backgroundColor: 'blue',
    },
    header: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'flex-start',
        // backgroundColor: 'red',
        marginTop: 20,
    },
    userGreeting: {
        fontSize: 24,
    },
    userName: {
        fontSize: 24,
        fontWeight: '800',
    },
    userImage: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
    },
    searchBox: {
        backgroundColor: 'grey',
        borderRadius: 25,
        margin: 12
    },
    search: {
        color: 'white',
        fontSize: 20,
        paddingHorizontal: 24,
        paddingVertical: 4,
    },
    circularCards: {
        height: 150,
        width: 150,
        borderRadius: 150 / 2,
        backgroundColor: 'pink',
        marginLeft: 8,
    },
    ccText: {
        fontSize: 24,
        fontWeight: '300',
        color: '#000',
    },
    squareCards: {
        height: 150,
        width: 150,
        borderRadius: 12,
        backgroundColor: 'pink',
    },
    scTextTitle: {
        fontSize: 12,
        fontWeight: '800',
        color: '#000',
    },
    scTextLocation: {
        fontSize: 12,
        color: 'grey'
    },
    scTextAmt: {
        fontSize: 12,
        color: '#000',
    },
    forYouSeeAll: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

});
