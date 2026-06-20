import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { pets } from './pets';
import { animals } from './animals';
import PetCard from './components/PetCard';
import { colors, fonts } from './theme';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.userGreeting}>Welcome back,</Text>
                    <Text style={styles.userName}>Sara Smith</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://img.magnific.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid&w=740&q=80',
                    }}
                    style={styles.userImage}
                />
            </View>
            <View style={styles.searchBox}>
                <Text style={styles.search}>Search here</Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {animals.map(({ uid, title, imageUrl }) => (
                    <View key={uid}
                        style={styles.circularCardsView}>
                        <Image source={{ uri: imageUrl }} style={styles.circularCards} />
                        <Text style={styles.circularCardsText}>{title}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>For You</Text>
                <Text style={styles.sectionLink}>See all</Text>
            </View>
            <ScrollView contentContainerStyle={styles.petGrid}>
                {pets.map((pet) => (
                    <PetCard key={pet.uid} {...pet} />
                ))}
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: 12,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 8,
    },
    userGreeting: {
        fontSize: fonts.fontSizeMedium,
    },
    userName: {
        fontSize: fonts.fontSizeLarge,
        fontWeight: fonts.fontBold,
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight: 8,
    },
    searchBox: {
        backgroundColor: colors.backgroundGrey,
        borderRadius: 25,
        marginBottom: 20,
        marginHorizontal: 8,
    },
    search: {
        color: colors.textTertiary,
        fontSize: fonts.fontSizeMedium,
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    circularCardsView: {
        alignItems: 'center'
    },
    circularCards: {
        height: 140,
        width: 140,
        borderRadius: 140 / 2,
        marginHorizontal: 8,
    },
    circularCardsText: {
        fontSize: fonts.fontSizeMedium,
        fontWeight: fonts.fontNormal,
        color: colors.textPrimary,
    },
    sectionTitle: {
        fontSize: fonts.fontSizeLarge,
        fontWeight: fonts.fontBold
    },
    sectionLink: {
        fontSize: fonts.fontSizeMedium
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 8,
        marginVertical: 12
    },
    petGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    }
});
