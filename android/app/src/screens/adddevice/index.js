import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {getUserInfo} from '../../storage';
import {http} from '../../services/http-request';
import {END_POINT} from '../../services/service-endpoints';

const AddDeviceScreen = ({navigation, route}) => {
  const {device} = route.params || {};
  const [namedevice, setNamedevice] = useState(device?.namedevice || '');
  const [descdevice, setDescdevice] = useState(device?.descdevice || '');
  const onSubmit = async () => {
    if (namedevice == '' || descdevice == '') {
      Alert.alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      const {_id, username} = await getUserInfo();
      const params = {
        user: _id,
        namedevice,
        descdevice,
        phone: username,
        active: device?.active || false,
        warning: device?.warning || true,
        sensors: device?.sensors || [],
      };
      if (device) {
        http
          .put(END_POINT.device.updateDevice(device?._id), params)
          .then(res => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            });
          })
          .catch(err => {
            Alert.alert('Error', err.message);
          });
      } else {
        http
          .post(END_POINT.device.devices, params)
          .then(res => {
            navigation.goBack();
          })
          .catch(err => {
            Alert.alert('Error', err.message);
          });
      }
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
      <TextInput
        placeholder="Name device"
        onChangeText={text => setNamedevice(text)}
        value={namedevice}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 5,
          marginBottom: 12,
        }}
      />
      <TextInput
        placeholder="Description device"
        onChangeText={text => setDescdevice(text)}
        value={descdevice}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 5,
          marginBottom: 12,
        }}
      />

      <TouchableOpacity
        onPress={onSubmit}
        style={{
          backgroundColor: '#85C1E9',
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddDeviceScreen;
