import { Box, FlatList, Text } from 'native-base';
import LeaveCard from '../components/LeaveCard';
import FooterNav from '../components/FooterNav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Leave = ({ navigation }) => {
  const { user, token } = useSelector(state => state.user);
  const [leaves, setLeaves] = useState([]);

  const getLeaves = async () => {
    try {
      const config = {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      };
      const userid = user._id;
      const res = await axios.get(`/api/leave/${userid}`, config);
      setLeaves(res.data);
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  } 

  useEffect(() => {
    getLeaves();
  }, []);

  return (
    <Box safeArea bg="#1e293b" height="100%">
      <Text p={4} color="white" fontSize="3xl" bold textAlign="center">Leave History</Text>
      <FlatList px={4} data={leaves} showsVerticalScrollIndicator={false} renderItem={
        ({ item }) => {
          return <LeaveCard leave={item} />
        }
      } keyExtractor={(item) => item._id.toString()} />
      <FooterNav navigation={navigation} sel={3} />
    </Box>
  )
}

export default Leave;