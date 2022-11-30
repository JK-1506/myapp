import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {END_POINT} from '../../services/service-endpoints';
import {http} from '../../services/http-request';
import moment from 'moment';

const DeviceDetailScreen = ({route, navigation}) => {
  const {id} = route.params;
  const [device, setDevice] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await http.get(END_POINT.device.getDeviceById(id));
      setDevice(res);
    };
    fetchData();
  }, [id]);

  const deleteDevice = () => {
    http
      .delete(END_POINT.device.deleteDevice(id))
      .then(() => navigation.goBack())
      .catch(err => Alert.alert('Error', err.message));
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
      <Text>Name Device: {device?.namedevice}</Text>
      <Text>Desc Device: {device?.descdevice}</Text>
      <Text>Phone: {device?.phone}</Text>
      <Text>Active: {device?.active ? 'Active' : 'Inactive'}</Text>
      <Text>Warning: {device?.warning ? 'Warning' : 'No Warning'}</Text>
      <Text>Author: {device?.user?.name}</Text>
      <Text>Date: {moment(device?.date).format('DD-MM-YYYY hh:ss')}</Text>
      <Text>
        Create at: {moment(device?.createAt).format('DD-MM-YYYY hh:ss')}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 24,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddDevice', {device})}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'green',
            paddingVertical: 5,
          }}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={deleteDevice}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            paddingVertical: 5,
            backgroundColor: 'red',
          }}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeviceDetailScreen;
