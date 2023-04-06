import { Box, Button, HStack, Spinner, Text, TextArea, VStack } from 'native-base';
import FooterNav from '../components/FooterNav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Complaint = ({ navigation, route }) => {

  const { user, token } = useSelector(state => state.user);
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);

  const handleComplaint = async () => {
    setLoading(true);
    if (!desc) {
      alert('Please add a description');
      return;
    }
    const complaint = {
      type: route.params.type,
      desc: desc.trim(),
      status: 'Pending',
      userid: user._id,
      createdAt: new Date(),
    }

    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      await axios.post('/api/complaint', complaint, config);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Confirmation', { token: token });
      }, 1000);
    } catch (error) {
      alert(error.response.data);
      console.log(error.response.data);
    }
  }

  return (
    <VStack safeArea bg="#1e293b" height="100%" justifyContent="space-between">
      <VStack px={4}>
        {/* Heading */}
        <Text mt={6} fontSize="3xl" bold textAlign='center' color="#38bdf8">Raise a Complaint</Text>

        {/* Complaint Type */}
        <HStack mt={8} borderRadius="10px" alignItems="center" p={4} bg="blueGray.700" justifyContent="space-between">
          <Text fontSize="2xl" bold color="white">Complaint Type </Text>
          <Button size="sm" colorScheme="red" variant="outline" onPress={() => navigation.navigate('ComplaintType')} >
            <Text bold color="red.600">{route.params.type}</Text>
          </Button>
        </HStack>

        {/* Complaint Description */}
        <VStack mt={10} borderRadius="10px" p={4} bg="blueGray.700" justifyContent="space-between">
          <Text fontSize="2xl" bold color="white">Complaint Description </Text>
          <TextArea color="white" mt={5} placeholder="Add Detailed Description" width="100%" borderRadius="4" py="3" px="2" fontSize="16" value={desc} onChangeText={e => setDesc(e)} />
        </VStack>

        <Button mt={10} colorScheme="blue" mx={12} onPress={() => handleComplaint()} >
          {loading ? <Spinner color="white" size="sm" /> : "Submit"}
        </Button>

        {/* Incharge Name */}
        <Box>
          <Text color="white" fontSize="lg" mt={12}>
            Complaint will be handled by :
          </Text>
          <Text color="white" fontSize="lg" mt={4}>
            Mr. ABC - 9876543210
          </Text>

        </Box>

      </VStack>
      <FooterNav navigation={navigation} />
    </VStack>
  )
}

export default Complaint