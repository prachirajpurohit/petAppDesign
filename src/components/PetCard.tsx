import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pet } from '../pets'
import { colors, fonts } from '../theme'

export default function PetCard({ imageUrl, title, location, price }: Pet) {
    return (
        <View style={styles.sqaureCardsView}>
            <Image source={{ uri: imageUrl }} style={styles.squareCards} />
            <Text style={styles.scTextTitle}>{title}</Text>
            <Text style={styles.scTextLocation}>{location}</Text>
            <Text style={styles.scTextAmt}>${price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sqaureCardsView: {
        // margin: 8
        marginRight: 8,
    },
    squareCards: {
        height: 150,
        width: 150,
        borderRadius: 12,
    },
    scTextTitle: {
        fontSize: fonts.fontSizeSmall,
        fontWeight: fonts.fontBold,
        color: colors.textPrimary
    },
    scTextLocation: {
        fontSize: fonts.fontSizeSmall,
        color: colors.textSecondary
    },
    scTextAmt: {
        fontSize: fonts.fontSizeSmall,
        color: colors.textPrimary,
    },
})