import { Box, IconButton, VStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import ComplaintTypes from '../components/ComplaintTypes';

const ComplaintType = ({ navigation }) => {
  return (
    <VStack safeArea p="6" height="100%" bg="#1e293b">
      {/* Back Button */}
      <Box flexDirection="row" justifyContent="space-between" alignItems="center" >
        <IconButton
          icon={<Ionicons name="chevron-back" size={24} color="white" />}
          borderRadius="15px"
          borderWidth="1"
          borderColor="gray.400"
          _pressed={{ bg: "gray.400" }}
          _hover={{ bg: "gray.400" }}
          onPress={() => navigation.goBack()} />
      </Box>

      <ComplaintTypes navigation={navigation} />
    </VStack>
  )
}

export default ComplaintType