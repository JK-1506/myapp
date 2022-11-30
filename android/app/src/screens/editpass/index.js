import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {getUserInfo} from '../../storage';

import React from 'react';
import {END_POINT} from '../../services/service-endpoints';
import {http} from '../../services/http-request';

const EditpassScreen = ({navigation}) => {
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const onChangePassword = async () => {
    if (
      oldPassword.length === 0 ||
      newPassword.length === 0 ||
      confirmPassword.length === 0
    ) {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin');
    } else if (newPassword !== confirmPassword) {
      Alert.alert('Password not match');
    } else {
      const {_id} = await getUserInfo();
      const params = {
        oldPassword,
        password: newPassword,
      };
      http
        .post(END_POINT.user.changePassword(_id), params)
        .then(res => {
          navigation.goBack();
        })
        .catch(err => {
          Alert.alert('Error', err);
        });
    }
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
        <View
          style={{
            flex: 1,
            marginVertical: 20,
          }}>
          {/* header */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 50,
                fontWeight: 'bold',
                color: '#85C1E9',
                margin: 10,
              }}>
              Đổi mật khẩu
            </Text>
          </View>
          {/* body */}
          <View>
            <View
              style={{
                padding: 10,
              }}>
              <View>
                <TextInput
                  value={oldPassword}
                  onChangeText={setOldPassword}
                  secureTextEntry={true}
                  placeholder="Mật khẩu cũ"
                  style={{
                    fontSize: 20,
                    backgroundColor: '#CDD1D3',
                    borderRadius: 20,
                  }}></TextInput>
              </View>
            </View>

            <View
              style={{
                padding: 10,
              }}>
              <View>
                <TextInput
                  secureTextEntry
                  value={newPassword}
                  onChangeText={setNewPassword}
                  placeholder="Mật khẩu mới"
                  style={{
                    fontSize: 20,
                    backgroundColor: '#CDD1D3',
                    borderRadius: 20,
                  }}></TextInput>
              </View>
            </View>

            <View
              style={{
                padding: 10,
              }}>
              <View>
                <TextInput
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Xác nhận mật khẩu"
                  style={{
                    fontSize: 20,
                    backgroundColor: '#CDD1D3',
                    borderRadius: 20,
                  }}></TextInput>
              </View>
            </View>
            <View
              style={{
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={onChangePassword}
                activeOpacity={0.5}
                style={{
                  width: 200,
                  padding: 10,
                  borderRadius: 20,
                  backgroundColor: '#85C1E9',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 20,
                  }}>
                  Đổi mật khẩu
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditpassScreen;
