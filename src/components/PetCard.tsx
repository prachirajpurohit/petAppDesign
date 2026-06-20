import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pet } from '../pets'
import { colors, fonts } from '../theme'
import { useWindowDimensions } from 'react-native'

export default function PetCard({ imageUrl, title, location, price }: Pet) {

    const { width } = useWindowDimensions();

    return (
        <View style={[styles.sqaureCardsView, {
            width: (width - 32) / 2,
        }]}>
            <Image source={{ uri: imageUrl }}
                style={[
                    styles.squareCards,
                    {
                        width: '100%',
                        height: width / 2,
                    }
                ]}
                resizeMode='cover'
            />

            <Text style={styles.scTextTitle}>{title}</Text>
            <Text style={styles.scTextLocation}>{location}</Text>
            <Text style={styles.scTextAmt}>${price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sqaureCardsView: {
        marginBottom: 16,
        paddingHorizontal: 8,
        // alignItems: 'center',
    },
    squareCards: {
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