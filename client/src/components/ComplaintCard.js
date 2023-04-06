import { Box, Button, Image, Text, VStack, Popover } from 'native-base';
import Electrical from '../../assets/electrical.png';
import Food from '../../assets/food.png';
import Plumbing from '../../assets/plumbing.png';
import Furniture from '../../assets/furniture.png';
import Wifi from '../../assets/wifi.png';
import Leave from '../../assets/leave.png';
import Tick from '../../assets/tick.png';
import Pending from '../../assets/pending.png';
import { useState } from 'react';

import axios from 'axios';

const ComplaintCard = ({ navigation, reloadPage, complaint, userType }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const getDate = () => {
        const date = new Date(complaint.createdAt);
        const day = date.getDate();
        return `${day}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    const handleWithdraw = async () => {
        try {
            await axios.put(`/api/complaint/${complaint._id}`, {
                status: 'Withdrawn'
            });
            reloadPage();
        } catch (err) {
            alert(err.message);
            console.log(err.response.data);
        }
    }

    const handleResolve = async () => {
        try {
            await axios.put(`/api/complaint/${complaint._id}`, {
                status: 'Resolved'
            });
            reloadPage();
        } catch (err) {
            alert(err.message);
            console.log(err.response.data);
        }
    }


    return (
        <Box my={3} bg="blueGray.700" display="flex" flexDirection="column" alignItems="center" borderRadius="lg">
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
                <Text color="white" >{getDate()}</Text>
            </Box>

            {/* Complaint Type and Description */}
            <Box display="flex" flexDirection="row" w="85%" alignItems="center">
                <Image source={
                    complaint.type === 'Electrical' ? Electrical : complaint.type === 'Plumbing' ? Plumbing : complaint.type === 'Mess' ? Food : complaint.type === 'Furniture' ? Furniture : complaint.type === 'Wifi' ? Wifi : Leave
                } alt={complaint.type} width="60px" height="60px" />
                <VStack ml={6} pr={8}>
                    <Text color="white" bold>{complaint.type}</Text>
                    <Text color="white" fontWeight="light">{complaint.description}</Text>
                </VStack>
            </Box>

            {/* Withdraw Button with Popup */}
            <Box my={5}>
                {
                    (userType === 'student' ? (
                        complaint.status === 'Pending' && (
                        <Box display="flex" width="100%" flexDirection="row" justifyContent="space-evenly" >
                            {/* Withdraw Button */}
                            <Popover trigger={triggerProps => {
                                return <Button {...triggerProps} bg="red.400" onPress={() => setIsOpen(true)} _pressed={{
                                    bg: 'red.600'
                                }} >
                                    <Text bold>WITHDRAW</Text>
                                </Button>
                            }} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
                                <Popover.Content accessibilityLabel="Delete Customerd" w="56">
                                    <Popover.Arrow />
                                    <Popover.Header >Withdraw Complaint</Popover.Header>
                                    <Popover.Body>
                                        Are you sure you want to withdraw this complaint?
                                    </Popover.Body>
                                    <Popover.Footer justifyContent="flex-end">
                                        <Button.Group space={2}>
                                            <Button onPress={() => {
                                                setIsOpen(false);
                                            }} colorScheme="coolGray" variant="ghost">
                                                Cancel
                                            </Button>
                                            <Button onPress={() => {
                                                setIsOpen(false);
                                                handleWithdraw();
                                            }} colorScheme="danger">Withdraw</Button>
                                        </Button.Group>
                                    </Popover.Footer>
                                </Popover.Content>
                            </Popover>

                            {/* Resolve Button */}
                            <Popover trigger={triggerProps => {
                                return <Button {...triggerProps} bg="green.400" onPress={() => setIsOpen2(true)} _pressed={{
                                    bg: 'green.600'
                                }} >
                                    <Text bold>RESOLVE</Text>
                                </Button>
                            }} isOpen={isOpen2} onClose={() => setIsOpen2(!isOpen2)}>
                                <Popover.Content w="56">
                                    <Popover.Arrow />
                                    <Popover.Header >Resolve Complaint</Popover.Header>
                                    <Popover.Body>
                                        Are you sure you want to resolve this complaint?
                                    </Popover.Body>
                                    <Popover.Footer justifyContent="flex-end">
                                        <Button.Group space={2}>
                                            <Button onPress={() => {
                                                setIsOpen2(false);
                                            }} colorScheme="coolGray" variant="ghost">
                                                Cancel
                                            </Button>
                                            <Button onPress={() => {
                                                setIsOpen2(false);
                                                handleResolve();
                                            }} colorScheme="success">Resolve</Button>
                                        </Button.Group>
                                    </Popover.Footer>
                                </Popover.Content>
                            </Popover>
                        </Box>
                    )) : (
                        <Button bg="blue.500" _pressed={{ bg: 'blue.600' }} onPress={
                            () => navigation.navigate('ComplaintDetails', { complaint: complaint })
                        } >
                            <Text bold>DETAILS</Text>
                        </Button>
                    ))
                }
            </Box>
        </Box>
    )
}

export default ComplaintCard