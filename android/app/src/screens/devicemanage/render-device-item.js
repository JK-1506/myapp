import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const DeviceItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
      }}
      onPress={() => navigation.navigate('DeviceDetail', {id: item._id})}>
      <Text>{item.namedevice}</Text>
      {/* <Text>{item.descdevice}</Text>
      <Text>{item.phone}</Text> */}
      {/* <Text>Ngày tạo: {moment(item.createAt).format('DD-MM-YYYY hh:ss')}</Text> */}
      {item.warning && <Text style={{color: 'orange'}}>Cảnh báo</Text>}
      {item.active ? (
        <Text style={{color: 'green'}}>Active</Text>
      ) : (
        <Text style={{color: 'red'}}>Inactive</Text>
      )}
    </TouchableOpacity>
  );
};

export default DeviceItem;
