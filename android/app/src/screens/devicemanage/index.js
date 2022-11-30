import {View, Text, FlatList, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {http} from '../../services/http-request';
import {END_POINT} from '../../services/service-endpoints';
import DeviceItem from './render-device-item';
import {getUserInfo, setActiveDevice} from '../../storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFocusEffect} from '@react-navigation/native';

const DeviceManageScreen = ({navigation}) => {
  const [devices, setDevices] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const {_id} = await getUserInfo();
        try {
          const res = await http.post(END_POINT.device.listDeviceByUserId, {
            user: _id,
          });
          setDevices(res);
          for (let i = 0; i < res.length; i++) {
            if (res[i].active) {
              setActiveDevice(res[i]);
              break;
            }
          }
        } catch (error) {
          Alert.alert('Error', error.message);
        }
      };
      fetchData();
    }, []),
  );

  const renderItem = ({item}) => {
    return <DeviceItem {...{item}} />;
  };
  return (
    <View
      style={{
        backgroundColor: '#85C1E9',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          margin: 10,
          flex: 1,
          borderRadius: 10,
        }}>
        <View>
          <Text> DeviceManageScreen</Text>
        </View>
        <FlatList
          renderItem={renderItem}
          data={devices}
          keyExtractor={item => item._id}
          ListEmptyComponent={() => <Text>Không có dữ liệu</Text>}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('AddDevice')}
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: '#85C1E9',
            padding: 10,
            borderRadius: 50,
          }}>
          <AntDesign name="plus" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeviceManageScreen;
