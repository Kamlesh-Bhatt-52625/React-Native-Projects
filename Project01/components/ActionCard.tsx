import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/LW4rk3EoQqBl8q8einXeT-7dBXke6dBpDn-LcqYPSiE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qYXZhc2NyaXB0/LXByb2dyYW1taW5n/LXdlYi1sYW5ndWFn/ZS13b29kZW4tY3Vi/ZXMtd2l0aC1sZXR0/ZXJzLWphdmFzY3Jp/cHQtbHlpbmctbGFw/dG9wLWNvbmNlcHRf/MjY0NzQ5LTMxNzUu/anBnP3NpemU9NjI2/JmV4dD1qcGc',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={4}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text style={styles.socialLinks}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.linkedin.com/in/kamlesh-bhatt-5059a1273/',
              )
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 372,
    height: 370,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#e07c24',
    elevation: 25,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#ffffff',
    shadowOpacity: 0.3,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 14,
    color: '#000000',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 6,
  },
});
