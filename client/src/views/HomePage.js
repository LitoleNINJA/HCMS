import { Box, Fab, FlatList, Icon, Text } from 'native-base';
import { useState } from 'react';
import ComplaintCard from '../components/ComplaintCard';
import FooterNav from '../components/FooterNav';
import { MaterialIcons } from '@expo/vector-icons';

const HomePage = ({ navigation }) => {
    const Complaints = [
        {
            id: 1,
            type: 'Electrical',
            desc: 'The light in the room is not working',
            status: 'Pending',
            userid: 1,
            createdAt: '2021-05-01',
        },
        {
            id: 2,
            type: 'Plumbing',
            desc: 'The water in the bathroom is not working lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            status: 'Resolved',
            userid: 2,
            createdAt: '2021-05-01',
        },
        {
            id: 3,
            type: 'Mess',
            desc: 'The food in the mess is not good',
            status: 'Resolved',
            userid: 3,
            createdAt: '2021-05-01',
        },
        {
            id: 4,
            type: 'Mess',
            desc: 'The food in the mess is not good',
            status: 'Resolved',
            userid: 1,
            createdAt: '2021-05-01',
        }
    ]

    return (
        <Box safeArea height="100%" bg="#1e293b">
            {/* Heading */}
            <Text mt={4} p={4} color="white" fontSize="4xl" bold textAlign="center">My Complaints</Text>

            {/* Complaints */}
            <FlatList px={4} data={Complaints} showsVerticalScrollIndicator={false} renderItem={({ item }) => <ComplaintCard complaint={item} />} keyExtractor={(item) => item.id.toString()} />

            {/* Create Complaint Button */}
            <Fab renderInPortal={false} bg="darkBlue.600" _pressed={{ bg: "blue.900" }} onPress={() => {
                navigation.navigate('ComplaintType')
            }} bottom={70} mb={2} shadow={4} size="sm" icon={<MaterialIcons name="create" size={24} color="white" />} />

            {/* Footer */}
            <FooterNav />
        </Box>   
    )
}

export default HomePage