import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://nainitaltourism.org.in/images/places-to-visit/headers/naina-devi-temple-nainital-tourism-entry-fee-timings-holidays-reviews-header.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Naina Devi Temple</Text>
            <Text style={styles.cardLabel}>Nainital, Uttarakhand</Text>
            <Text style={styles.cardDescription}>
              Naini Devi Temple is sacred place of great devotion in Nainital.
              Goddess Naini Devi is the diety of Naini Devi Temple and located
              at northern end of famous Nainital Lake.
            </Text>
            <Text style={styles.cardFooter}>20 mins away</Text>
          </View>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://t4.ftcdn.net/jpg/05/84/76/73/360_F_584767353_EXYOkE8NcX37UwV4WfBw7AjBaEtU6mMy.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
            <Text style={styles.cardDescription}>
              The Hawa Mahal is a palace in the city of Jaipur, India. Built
              from red and pink sandstone , It is on the edge of the City
              Palace.
            </Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    width: 362,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 25,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
    alignSelf: 'flex-end',
  },
});
