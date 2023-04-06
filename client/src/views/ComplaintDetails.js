import { Box, Button, Spinner, Text, VStack } from 'native-base';
import FooterNav from '../components/FooterNav';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const ComplaintDetails = ({ navigation, route }) => {
  const complaint = route.params.complaint;
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const { token } = useSelector(state => state.user);

  const getDetails = async () => {
    try {
      setLoading(true);
      const userid = complaint.userid;
      const config = {
        headers: {
          'Authorization': 'Bearer ' + token,
        }
      };
      const { data } = await axios.get(`/api/user/${userid}`, config);
      setUser(data.user);
      setLoading(false);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  const getDate = () => {
    const date = new Date(complaint.createdAt);
    const day = date.getDate();
    const time = date.toLocaleTimeString();
    return `${day}/${date.getMonth() + 1}/${date.getFullYear()} at ${time}`;
  }

  useEffect(() => {
    getDetails();
  }, []);


  return (
    <VStack safeArea height="100%" bg="#1e293b" justifyContent="space-between">
      {loading ? <Spinner color="white" /> : (
        <>
          <Box px={4} >
            <Text color="white" fontSize="4xl" textAlign="center" bold mt={6} >Complaint Details</Text>

            <Text color="white" fontSize="xl" bold mt={6} >Type</Text>
            <Text color="white" fontSize="md">{complaint.type}</Text>

            <Text color="white" fontSize="xl" bold mt={6} >Description</Text>
            <Text color="white" fontSize="md">{complaint.description}</Text>

            <Text color="white" fontSize="xl" bold mt={6} >Status</Text>
            <Text color={complaint.status === 'Pending' ? 'blue.400' : 'green.400'} fontSize="md">{complaint.status}</Text>

            <Text color="white" fontSize="xl" bold mt={6} >Date</Text>
            <Text color="white" fontSize="md">{getDate()}</Text>

            <Text color="white" fontSize="xl" bold mt={6} >By</Text>
            <Text color="white" fontSize="md">Name : {user.name}</Text>
            <Text color="white" fontSize="md">Regno : {user.regno}</Text>
            <Text color="white" fontSize="md">Email : {user.email}</Text>
            <Text color="white" fontSize="md">Phone : {user.phone}</Text>
            <Text color="white" fontSize="md">Room : {user.room}</Text>

            {/* TODO: set resolved date */}
          </Box>
          <FooterNav navigation={navigation} />
        </>
      )}
    </VStack>
  )
}

export default ComplaintDetails