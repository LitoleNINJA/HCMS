import { Box, Center, Image, Text, VStack } from 'native-base';
import Confetti from '../../assets/confetti.png';
import Lottie from 'lottie-react-native';

const Confirmation = () => {
  return (
    <VStack safeArea height="100%" bg="#1e293b" px={4}>
      <Text color="#38bdf8" mt={6} fontSize="3xl" bold textAlign='center'>Confirmation</Text>

      <Center mt={8}>
        <Lottie source={require('../../assets/confetti.json')} autoPlay loop />
      </Center>

      <Text color="green.400" fontSize="xl" bold mt={16} textAlign="center">
        Complaint successfully raised
      </Text>

      <Text color="white" fontSize="lg" mt={4} textAlign="center">
        We want you to sit back and relax. Resolving your complaint will be our top priority.
      </Text>
    </VStack>
  )
}

export default Confirmation