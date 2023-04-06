import { Box, VStack, Heading, FormControl, Input, Button, Flex, Select, HStack, Icon, IconButton, ScrollView, Spinner } from 'native-base';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector } from 'react-redux';
import axios from 'axios';

const LeaveRequest = ({ navigation }) => {
  const { user, token } = useSelector(state => state.user);

  const [leaveType, setLeaveType] = useState('outing');
  const [vistingPlace, setVistingPlace] = useState('Marina Mall');
  const [reason, setReason] = useState('Shopping');
  const [fromDate, setFromDate] = useState(new Date());
  const [fromTime, setFromTime] = useState('9:00 AM');
  const [toDate, setToDate] = useState(new Date());
  const [toTime, setToTime] = useState('4:00 PM');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleSubmit = async () => {
    if (leaveType === '' || vistingPlace === '' || reason === '' || fromTime === '' || toTime === '') {
      alert('Please fill all the fields');
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      };
      await axios.post('/api/leave', {
        type: leaveType,
        visitingPlace: vistingPlace,
        reason: reason,
        fromDate: fromDate,
        fromTime: fromTime,
        toDate: toDate,
        toTime: toTime,
        userid: user._id,
        username: user.name,
      }, config);
      setLoading(false);
      alert('Leave Request sent to Proctor !');
      navigation.navigate('Leave');
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
      setLoading(false);
    }
  };

  const handleDate = (date) => {
    setFromDate(date);
    setShow(false);
  };
  const handleDate2 = (date) => {
    setToDate(date);
    setShow2(false);
  };
  const getDate = (date) => {
    var d = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    return d;
  };

  return (
    <Flex w="100%" bg="#1e293b" h="100%" alignItems="center" >
      <Box safeArea p="2" py="10" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="warmGray.50">
          Leave Request
        </Heading>

        <ScrollView mt={5} showsVerticalScrollIndicator={false}>
          <VStack mb={8} space={3} mt="5">
            {/* INPUTS */}
            <FormControl>
              <Select color="white" selectedValue={leaveType} minWidth="200" accessibilityLabel="Leave Type" placeholder="Leave Type" _selectedItem={{ bg: "cyan.500" }} onValueChange={(itemValue, itemIndex) => setLeaveType(itemValue)}>
                <Select.Item label="With Parent" value="parent" />
                <Select.Item label="OFFICIAL LEAVE" value="official" />
                <Select.Item label="Summer Vacation" value="sumVac" />
                <Select.Item label="Winter Vacation" value="winVac" />
                <Select.Item label="Home Town" value="home" />
                <Select.Item label="EMERGENCY" value="emergency" />
                <Select.Item label="Loacl Guardian" value="guardian" />
                <Select.Item label="OUTING" value="outing" />
              </Select>
            </FormControl>

            <FormControl>
              <FormControl.Label>Visiting Place</FormControl.Label>
              <Input color="white" value={vistingPlace} onChangeText={e => setVistingPlace(e)} />
            </FormControl>

            <FormControl>
              <FormControl.Label>Reason</FormControl.Label>
              <Input color="white" value={reason} onChangeText={e => setReason(e)} />
            </FormControl>

            <FormControl>
              <FormControl.Label>From Date</FormControl.Label>
              <HStack space={4} justifyContent="space-between" >
                <Input width="80%" color="white" value={getDate(fromDate)} isReadOnly={true} />
                <IconButton bg="indigo.700" icon={<Icon as={<Ionicons name="calendar" />} color="white" size="sm" />} onPress={() => setShow(true)} />
              </HStack>
              <DateTimePickerModal
                date={fromDate}
                isVisible={show}
                mode="date"
                onConfirm={handleDate}
                onCancel={() => setShow(false)}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>From Time</FormControl.Label>
              <Input color="white" value={fromTime} placeholder="Eg 10:00 AM" onChangeText={e => setFromTime(e)} />
            </FormControl>

            <FormControl>
              <FormControl.Label>To Date</FormControl.Label>
              <HStack space={4} justifyContent="space-between" >
                <Input width="80%" color="white" value={getDate(toDate)} isReadOnly={true} />
                <IconButton bg="indigo.700" icon={<Icon as={<Ionicons name="calendar" />} color="white" size="sm" />} onPress={() => setShow2(true)} />
              </HStack>
              <DateTimePickerModal
                date={toDate}
                isVisible={show2}
                mode="date"
                onConfirm={handleDate2}
                onCancel={() => setShow2(false)}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>To Time</FormControl.Label>
              <Input color="white" value={toTime} placeholder="Eg 5:00 PM" onChangeText={e => setToTime(e)} />
            </FormControl>

            <Button mt="8" colorScheme="indigo" onPress={() => handleSubmit()} >
              {loading ? <Spinner color="white" size="sm" /> : "SUBMIT"}
            </Button>

          </VStack>
        </ScrollView>
      </Box>
    </Flex>
  )
}

export default LeaveRequest