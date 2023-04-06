import { Box, Button, Center, Text, VStack } from 'native-base';
import LottieView from 'lottie-react-native';
import FooterNav from '../components/FooterNav';

const Confirmation = ({ navigation, route }) => { 

  const token = route.params.token;

  return (
    <VStack safeArea height="100%" bg="#1e293b" justifyContent="space-between" >
      <VStack px={4}>
        <Text color="#38bdf8" mt={6} fontSize="3xl" bold textAlign='center'>Confirmation</Text>
  
        <Center mt={4} >
          <LottieView source={require('../../assets/confetti.json')} autoPlay style={{
            width: 100,
            height: 100
          }} />
        </Center>
  
        <Text color="green.400" fontSize="xl" bold mt={8} textAlign="center">
          Complaint successfully raised
        </Text>
  
        <Text color="white" fontSize="lg" mt={4} textAlign="center">
          We want you to sit back and relax. Resolving your complaint will be our top priority.
        </Text>
  
        <Box mt={12}>
          <Button bg="#38bdf8" _pressed={{ bg: "blue.900" }} onPress={() => {
            navigation.navigate('HomePage', { token: token })
          }} shadow={4} size="lg" _text={{ color: "white" }}>
            Go to Home
          </Button>
        </Box>
      </VStack>

      <FooterNav navigation={navigation} sel={0} />
    </VStack>
  )
}

export default Confirmation