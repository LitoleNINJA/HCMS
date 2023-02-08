import { Box, Button, Image, Text, VStack } from 'native-base';
import Electrical from '../../assets/electrical.png';
import Food from '../../assets/food.png';
import Plumbing from '../../assets/plumbing.png';
import Furniture from '../../assets/furniture.png';
import Wifi from '../../assets/wifi.png';
import Leave from '../../assets/leave.png';
import Tick from '../../assets/tick.png';
import Pending from '../../assets/pending.png';

const ComplaintCard = ({ complaint }) => {
    return (
        <Box my={4} bg="blueGray.700" display="flex" flexDirection="column" alignItems="center" borderRadius="lg">
            {/* Status and Date */}
            <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" px={4} py={4}>
                <Text color={
                    complaint.status === 'Pending' ? 'blue.400' : 'green.400'
                } >
                    <Image source={
                        complaint.status === 'Pending' ? Pending : Tick
                    } alt={complaint.status} />
                    &nbsp; {complaint.status}
                </Text>
                <Text color="white" >{complaint.createdAt}</Text>
            </Box>

            {/* Complaint Type and Description */}
            <Box display="flex" flexDirection="row" mx={8} alignItems="center" justifyContent="space-between">
                <Image source={
                    complaint.type === 'Electrical' ? Electrical : complaint.type === 'Plumbing' ? Plumbing : complaint.type === 'Mess' ? Food : complaint.type === 'Furniture' ? Furniture : complaint.type === 'Wifi' ? Wifi : Leave
                } alt={complaint.type} />
                <VStack ml={4}>
                    <Text color="white" bold>{complaint.type}</Text>
                    <Text color="white" fontWeight="light" textAlign="justify" >{complaint.desc}</Text>
                </VStack>
            </Box>

            {/* Withdraw Button */}
            <Box my={5}>
                {
                    complaint.status === 'Pending' &&
                    <Button bg="red.500" _pressed={{
                        bg: 'red.600'
                    }} >
                        <Text bold>WITHDRAW</Text>
                    </Button>
                }   
            </Box>
        </Box>
    )
}

export default ComplaintCard