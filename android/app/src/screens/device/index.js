import {View, Alert, Dimensions, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getActiveDevice} from '../../storage';
import {http} from '../../services/http-request';
import {END_POINT} from '../../services/service-endpoints';
import {LineChart} from 'react-native-chart-kit';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import {useFocusEffect} from '@react-navigation/native';

const DeviceScreen = () => {
  const [temperatures, setTemperatures] = useState([]);
  const [times, setTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState(null);
  const [listDate, setListDate] = useState([]);

  const fetchData = async (id, date) => {
    const params = {
      device: id,
    };
    if (date) {
      params.date = date;
    }
    http
      .post(END_POINT.sensor.getSensorByDeviceId, {...params})
      .then(res => {
        const newTemperatures = [];
        const newTimes = [];
        const newListDate = [];
        if (selectedDate === null) {
          setSelectedDate(new Date(res[0].date.split('T')[0]));
        }
        if (res && res.length > 0) {
          const maxDate = moment(res[0].date).format('YYYY-MM-DD');
          res.forEach(item => {
            const d = moment(item.date).format('YYYY-MM-DD');
            if (maxDate === d) {
              newTemperatures.push(item.value);
              newTimes.push(moment(item.date).format('HH:mm:ss'));
              newListDate.push(item.date.split('T')[0]);
            }
          });
          setTemperatures(newTemperatures);
          setTimes(newTimes);
          setListDate(newListDate);
        } else {
          setTemperatures([]);
          setTimes([]);
        }
      })
      .catch(err => {
        Alert.alert('Error', err);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      const intervalId = setInterval(() => {
        fetchData(deviceInfo._id, selectedDate);
      }, 4000);
      return () => {
        clearInterval(intervalId);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deviceInfo?._id, selectedDate]),
  );

  useEffect(() => {
    const fetchUser = async () => {
      const {_id, namedevice, descdevice, date, sensors} =
        await getActiveDevice();
      setDeviceInfo({
        _id,
        namedevice,
        descdevice,
        date,
        count: sensors?.length || 0,
      });
      fetchData(_id, selectedDate);
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);
  const getMaxIndex = () => {
    if (temperatures.length === 0) {
      return -1;
    }
    let max = 0;
    for (let i = 0; i < temperatures.length; i++) {
      if (temperatures[i] > temperatures[max]) {
        max = i;
      }
    }
    return max;
  };

  const getMinIndex = () => {
    if (temperatures.length === 0) {
      return -1;
    }
    let min = 0;
    for (let i = 0; i < temperatures.length; i++) {
      if (temperatures[i] < temperatures[min]) {
        min = i;
      }
    }
    return min;
  };

  const avg = temperatures.reduce((a, b) => a + b, 0) / temperatures.length;

  return (
    <View
      style={{
        paddingVertical: 10,
      }}>
      <View style={{paddingHorizontal: 10, marginBottom: 12}}>
        <Text style={{fontWeight: 'bold'}}>Thông tin thiết bị</Text>
        <Text>Tên thiết bị: {deviceInfo?.namedevice}</Text>
        <Text>Mô tả: {deviceInfo?.descdevice}</Text>
        <Text>Số lượng: {deviceInfo?.count}</Text>
        <Text>
          Ngày bắt đầu:{' '}
          {moment(deviceInfo?.date).format('DD-MM-YYYY, HH:mm:ss')}
        </Text>
      </View>
      {temperatures.length > 0 ? (
        <LineChart
          data={{
            labels: times.slice(0, 10),
            datasets: [
              {
                data: temperatures.slice(0, 10),
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={300}
          verticalLabelRotation={45}
          yAxisSuffix="°C"
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(173, 173, 173, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            propsForDots: {
              r: '3',
              fill: '#ffa726',
            },
            propsForLabels: {
              fontSize: 9,
            },
          }}
          bezier
        />
      ) : (
        <Text style={{alignSelf: 'center'}}>Chưa có dữ liệu</Text>
      )}
      {getMaxIndex() !== -1 && getMinIndex() !== -1 && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 12,
          }}>
          <View style={{marginHorizontal: 12}}>
            <Text style={{marginBottom: 8, fontWeight: 'bold', color: '#000'}}>
              #
            </Text>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Max</Text>
            <Text
              style={{marginVertical: 8, color: 'blue', fontWeight: 'bold'}}>
              Min
            </Text>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Avg</Text>
          </View>
          <View style={{marginHorizontal: 12}}>
            <Text style={{marginBottom: 8, fontWeight: 'bold', color: '#000'}}>
              Value
            </Text>
            <Text>{temperatures[getMaxIndex()]}</Text>
            <Text style={{marginVertical: 8}}>
              {temperatures[getMinIndex()]}
            </Text>
            <Text>{avg.toFixed(2)}</Text>
          </View>
          <View style={{marginHorizontal: 12}}>
            <Text style={{marginBottom: 8, fontWeight: 'bold', color: '#000'}}>
              Date
            </Text>
            <Text>
              {moment(new Date(listDate[getMaxIndex()])).format('DD-MM-YYYY')}
            </Text>
            <Text style={{marginVertical: 8}}>
              {moment(new Date(listDate[getMinIndex()])).format('DD-MM-YYYY')}
            </Text>
          </View>
          <View style={{marginHorizontal: 12}}>
            <Text style={{marginBottom: 8, fontWeight: 'bold', color: '#000'}}>
              Time
            </Text>
            <Text>{times[getMaxIndex()]}</Text>
            <Text style={{marginVertical: 8}}>{times[getMinIndex()]}</Text>
          </View>
        </View>
      )}
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={{
          backgroundColor: '#85C1E9',
          padding: 10,
          borderRadius: 10,
          marginHorizontal: 100,
          marginVertical: 24,
          alignItems: 'center',
        }}>
        <Text>{moment(selectedDate).format('DD-MM-YYYY')}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={selectedDate || new Date()}
        onConfirm={d => {
          setOpen(false);
          setSelectedDate(d);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        locale="vi"
      />
    </View>
  );
};

export default DeviceScreen;
