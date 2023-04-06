import { Box, Button, Image, Text, VStack } from 'native-base';
import Tick from '../../assets/tick.png';
import Pending from '../../assets/pending.png';
import Form from '../../assets/form.png';

const LeaveCard = ({ leave }) => {

    const getDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const day = d.getDate();
        return `${day}/${month}/${year}`;
    }

    return (
        <Box my={3} bg="blueGray.700" display="flex" flexDirection="column" alignItems="center" borderRadius="lg">
            {/* Status and Date */}
            <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" px={4} py={4}>
                <Text color={
                    leave.status === 'Pending' ? 'blue.400' : 'green.400'
                } >
                    <Image source={
                        leave.status === 'Pending' ? Pending : Tick
                    } alt={leave.status} />
                    &nbsp; {leave.status}
                </Text>
            </Box>

            {/* Leave Type and Description */}
            <Box display="flex" flexDirection="row" w="85%" alignItems="center" mb={4}>
                <Image source={Form} alt={leave.type} width="60px" height="60px" ml={4} />
                <VStack ml={10}>
                    <Text color="white" bold textTransform="capitalize" >{leave.type}</Text>
                    <Text color="white" fontWeight="light">{leave.reason}</Text>
                    <Text color="white" fontWeight="light" mt={2}><Text bold>From :</Text> {getDate(leave.fromDate)}</Text>
                    <Text color="white" fontWeight="light"><Text bold>To :</Text> {getDate(leave.toDate)}</Text>
                </VStack>
            </Box>
        </Box>
    )
}

export default LeaveCard