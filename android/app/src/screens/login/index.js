import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import SysModal from '../../components/sys_modal';
import {URL} from '../../../../../ip';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {http} from '../../services/http-request';
import {END_POINT} from '../../services/service-endpoints';
import {setUserInfo} from '../../storage';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onHideModal = () => {
    setShowModal(false);
  };

  const onChangeUsername = value => {
    setUsername(value);
  };

  const onChangePassword = value => {
    setPassword(value);
  };

  const onClickLogin = () => {
    if (username.length == 0 || password.length == 0) {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin đăng nhập.');
      setShowModal(true);
      return;
    }
    http
      .post(END_POINT.auth.login, {username, password})
      .then(response => {
        setUserInfo(JSON.stringify(response));
        navigation.navigate('Home');
      })
      .catch(error => {
        setErrorMessage(error);
        setShowModal(true);
      });
  };

  const onClickSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View
      style={{
        backgroundColor: '#85C1E9',
        flex: 1,
      }}>
      <SysModal
        visible={showModal}
        message={errorMessage}
        onHide={onHideModal}
      />
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
              marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 50,
                fontWeight: 'bold',
                color: '#85C1E9',
                margin: 20,
              }}>
              Đăng nhập
            </Text>
          </View>
          {/* body */}
          <View>
            <View
              style={{
                padding: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 25,
                  padding: 5,
                }}>
                Số điện thoại
              </Text>
              <View>
                <TextInput
                  value={username}
                  onChangeText={onChangeUsername}
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
              <Text
                style={{
                  color: 'black',
                  fontSize: 25,
                  padding: 5,
                }}>
                Mật khẩu
              </Text>
              <View>
                <TextInput
                  secureTextEntry={true}
                  value={password}
                  onChangeText={onChangePassword}
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
                activeOpacity={0.5}
                onPress={onClickLogin}
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
                  ĐĂNG NHẬP
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* footer */}
          <View
            style={{
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
              }}>
              Nếu bạn chưa có tài khoản?
            </Text>
            {/* Button dang ky */}

            <TouchableOpacity
              onPress={onClickSignup}
              style={{
                padding: 10,
              }}>
              <Text
                style={{
                  color: 'red',
                  fontWeight: '500',
                  fontSize: 20,
                }}>
                ĐĂNG KÝ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
