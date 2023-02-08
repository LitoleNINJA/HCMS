import { Box, Image, Text, VStack, Pressable } from 'native-base';
import Electrical from '../../assets/electrical.png';
import Food from '../../assets/food.png';
import Plumbing from '../../assets/plumbing.png';
import Furniture from '../../assets/furniture.png';
import Wifi from '../../assets/wifi.png';
import Leave from '../../assets/leave.png';

const ComplaintTypes = ({ navigation }) => {
    return (
        <VStack mt={6}>
            <Text fontSize='3xl' fontWeight='bold' textAlign='center' color="#38bdf8" >Choose the Category</Text>

            <Box mt={8} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between" >
                <Pressable width="45%" borderRadius="10px" borderColor='black' borderWidth={1} alignItems="center" p={4} bg="green.200" _pressed={{
                    bg: "green.400"
                }} onPress={() => navigation.navigate('Complaint', { type: 'Electrical' })} >
                    <Image source={Electrical} alt="Electrical" width="50px" height="50px" />
                    <Text fontSize="md" fontWeight="bold" pt={2} >Electrical</Text>
                </Pressable>
                <Pressable width="45%" borderRadius="10px" borderColor='black' borderWidth={1} alignItems="center" p={4} bg="yellow.300" _pressed={{
                    bg: "yellow.400"
                }} onPress={() => navigation.navigate('Complaint', { type: 'Mess' })} >
                    <Image source={Food} alt="Food" width="50px" height="50px" />
                    <Text fontSize="md" fontWeight="bold" pt={2} >Mess</Text>
                </Pressable>

                <Pressable  width="45%" borderRadius="10px" borderColor='black' borderWidth={1} alignItems="center" mt={10} p={4} bg="blue.200" _pressed={{
                    bg: "blue.400"
                }} onPress={() => navigation.navigate('Complaint', { type: 'Plumbing' })} >
                    <Image source={Plumbing} alt="Plumbing" width="50px" height="50px" />
                    <Text fontSize="md" fontWeight="bold" pt={2} >Plumbing</Text>
                </Pressable>
                <Pressable  width="45%" mt={10} borderRadius="10px" borderColor='black' borderWidth={1} alignItems="center" p={4} bg="red.200" _pressed={{
                    bg: "red.400"
                }} onPress={() => navigation.navigate('Complaint', { type: 'Wifi' })} >
                    <Image source={Wifi} alt="Wifi" width="50px" height="50px" />
                    <Text fontSize="md" fontWeight="bold" pt={2} >Wifi</Text>
                </Pressable>

                <Pressable width="45%" mt={10} borderRadius="10px" borderColor='black' borderWidth={1} alignItems="center" p={4} bg="orange.200" _pressed={{
                    bg: "orange.400"
                }} onPress={() => navigation.navigate('Complaint', { type: 'Furniture' })} >
                    <Image source={Furniture} alt="Furniture" width="50px" height="50px" />
                    <Text fontSize="md" fontWeight="bold" pt={2} >Furniture</Text>
                </Pressable>
                <Pressable width="45%" mt={10} borderRadius="10px" borderColor='black' borderWidth={1} alignItems="center" p={4} bg="purple.200" _pressed={{
                    bg: "purple.400"
                }} onPress={() => navigation.navigate('Complaint', { type: 'Leave' })} >
                    <Image source={Leave} alt="Leave" width="50px" height="50px" />
                    <Text fontSize="md" fontWeight="bold" pt={2} >Leave</Text>
                </Pressable>
                
            </Box>
        </VStack>
    )
}

export default ComplaintTypes