import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Kamlesh Bhatt',
      age: '21',
      status: 'Just an extra ordinary programmer',
      avatar: 'https://avatars.githubusercontent.com/u/89186816?v=4',
    },
    {
      uid: 2,
      name: 'Kamlesh Bhatt',
      age: '21',
      status: 'Just an extra ordinary programmer',
      avatar: 'https://avatars.githubusercontent.com/u/89186816?v=4',
    },
    {
      uid: 3,
      name: 'Kamlesh Bhatt',
      age: '21',
      status: 'Just an extra ordinary programmer',
      avatar: 'https://avatars.githubusercontent.com/u/89186816?v=4',
    },
    {
      uid: 4,
      name: 'Kamlesh Bhatt',
      age: '21',
      status: 'Just an extra ordinary programmer',
      avatar: 'https://avatars.githubusercontent.com/u/89186816?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(item => (
          <View key={item.uid} style={styles.userCard}>
            <Image
              source={{
                uri: item.avatar,
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userAge}>{item.age}</Text>
              <Text style={styles.userStatus}>{item.status}</Text>
            </View>
          </View>
        ))}
        <View style={styles.userContact}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${6398481446}`)}>
            <Text style={styles.Contact}>Contact me</Text>
          </TouchableOpacity>
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
    marginBottom: 10,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 7,
    backgroundColor: '#8B78E6',
    padding: 4,
    borderRadius: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  userAge: {
    fontSize: 15,
    fontWeight: '400',
  },
  userStatus: {
    fontSize: 13,
    fontWeight: '400',
  },
  userContact: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#01CBC6',
    padding: 15,
    width: '40%',
    marginLeft: '30%',
    borderRadius: 16,
    marginTop: 4,
  },
  Contact: {
    color: '#000',
  },
});
