import { Button, HStack, Text, TextArea, VStack } from 'native-base'

const Complaint = ({ navigation, route }) => {
  return (
    <VStack safeArea height="100%" bg="#1e293b" px={4}>
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
            <TextArea color="white" mt={5} placeholder="Add Detailed Description" width="100%" borderRadius="4" py="3" px="2" fontSize="16" />
        </VStack>

        <Button mt={10} colorScheme="blue" mx={12} onPress={() => navigation.navigate('Confirmation')} >Submit</Button>

        {/* Incharge Name */}
        <Text color="white" fontSize="lg" mt={12}>
          Complaint will be handled by :
        </Text>
        <Text color="white" fontSize="lg" mt={4}>
          Mr. ABC - 9876543210
        </Text>
    </VStack>
  )
}

export default Complaint