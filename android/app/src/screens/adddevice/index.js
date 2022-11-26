import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import SysModal from '../../components/sys_modal';

const SignupScreen = () => {

  const navigation = useNavigation();

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const onHideModal = () => {
//     setShowModal(false);
//   };

//   const onChangeUsername = value => {
//     setUsername(value);
//   };

//   const onChangePassword = value => {
//     setPassword(value);
//   };

//   const onChangeName = value => {
//     setName(value);
//   };

//   const onChangeAddress = value => {
//     setAddress(value);
//   };

//   const onClickSignup = () => {
//     if (username.length == 0 || password.length == 0 || name == 0 || address == 0) {
//       setErrorMessage('Vui lòng nhập đầy đủ thông tin đăng ký.');
//       setShowModal(true);
//       return;
//     }
//     // console.log(username);
//     // console.log(password);
//     // console.log(name);
//     // console.log(address);
//     // call api
//     fetch(URL.localhost + "/auth/register", {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         'username': username,
//         'password': password,
//         'name': name,
//         'address': address
//       })
//     })
//       .then((response) => response.json())
//       .then((res) => {
//         const currentUser = res;
//         console.log(currentUser._id);
//         // Chuyen man hinh den đăng nhập
//         navigation.navigate('Login');
//       })
//       .catch((error) => {
//         setErrorMessage(error);
//         setShowModal(true);
//       })

//   };

  return (
    <View
      style={{
        backgroundColor: '#85C1E9',
        flex: 1,
      }}>
      <SysModal visible={showModal} message={errorMessage} onHide={onHideModal} />
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
              }}>Đăng ký
            </Text>
          </View>
          {/* body */}
          <View>

            <View
              style={{
                padding: 10,
              }}>
              <View>
                <TextInput placeholder='Số điện thoại' value={username} onChangeText={onChangeUsername}
                  style={{
                    fontSize: 20,
                    backgroundColor: "#CDD1D3",
                    borderRadius: 20,
                  }}></TextInput>
              </View>
            </View>

            <View
              style={{
                padding: 10,
              }}>
              <View>
                <TextInput secureTextEntry={true} value={password} onChangeText={onChangePassword} placeholder='Mật khẩu'
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
                <TextInput placeholder='Họ và tên' value={name} onChangeText={onChangeName}
                  style={{
                    fontSize: 20,
                    backgroundColor: "#CDD1D3",
                    borderRadius: 20,
                  }}></TextInput>
              </View>
            </View>

            <View
              style={{
                padding: 10,
              }}>
              <View>
                <TextInput placeholder='Địa chỉ' value={address} onChangeText={onChangeAddress}
                  style={{
                    fontSize: 20,
                    backgroundColor: "#CDD1D3",
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
              <TouchableOpacity activeOpacity={0.5} onPress={onClickSignup}
                style={{
                  width: 200,
                  padding: 10,
                  borderRadius: 20,
                  backgroundColor: "#85C1E9",
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: "600",
                    fontSize: 20,

                  }}>ĐĂNG KÝ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SignupScreen;