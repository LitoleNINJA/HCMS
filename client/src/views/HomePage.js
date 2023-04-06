import { Box, Fab, FlatList, Text } from 'native-base';
import { useState, useEffect } from 'react';
import ComplaintCard from '../components/ComplaintCard';
import FooterNav from '../components/FooterNav';
import SkeletonCard from '../components/SkeletonCard';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';

const HomePage = ({ navigation }) => {
    const { user, token } = useSelector(state => state.user);

    const [Complaints, setComplaints] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const getComplaints = async () => {
        try {
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            };
            const { data } = await axios.get(`/api/complaint/${user._id}`, config);
            setComplaints(data);
        } catch (err) {
            alert(err.response.data.message);
            console.log(err.response.data.message);
        }
    };

    const onRefresh = () => {
        setRefreshing(true);
        getComplaints();
        setTimeout(() => {
            setRefreshing(false);
        }, 100);
    };

    useEffect(() => {
        onRefresh();
    }, []);

    return (
        <Box safeArea height="100%" bg="#1e293b">
            {/* Heading */}
            <Text p={4} color="white" fontSize="4xl" bold textAlign="center">My Complaints</Text>

            {/* Complaints */}
            {refreshing ? (
                <>
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </>
            ) : (
                <FlatList px={4} data={Complaints} showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    renderItem={({ item }) => <ComplaintCard navigation={navigation} reloadPage={onRefresh} complaint={item} userType={user.type} />} keyExtractor={(item) => item._id.toString()} />
            )}

            {/* Create Complaint Button */}
            <Fab renderInPortal={false} bg="darkBlue.600" _pressed={{ bg: "blue.900" }} onPress={() => {
                navigation.navigate('ComplaintType')
            }} bottom={70} mb={2} shadow={4} size="sm" icon={<MaterialIcons name="create" size={24} color="white" />} />

            {/* Footer */}
            <FooterNav navigation={navigation} sel={1} />
        </Box>
    )
}

export default HomePage