import { Box, FlatList, Text } from 'native-base';
import { useState, useEffect } from 'react';
import ComplaintCard from '../components/ComplaintCard';
import FooterNav from '../components/FooterNav';
import SkeletonCard from '../components/SkeletonCard';
import axios from 'axios';
import { RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';

const AdminPage = ({ navigation }) => {
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
            const { data } = await axios.get('/api/complaint/', config);
            setComplaints(data);
        } catch (err) {
            alert(err);
            console.log(err.response.data);
        }
    };

    const onRefresh = () => {
        setRefreshing(true);
        getComplaints();
        setTimeout(() => {
            setRefreshing(false);
        }, 200);
    };

    useEffect(() => {
        onRefresh();
    }, []);

    return (
        <Box safeArea height="100%" bg="#1e293b">
            {/* Heading */}
            <Text mt={4} p={4} color="white" fontSize="4xl" bold textAlign="center">Complaints</Text>

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
                    renderItem={({ item }) => <ComplaintCard navigation={navigation} reloadPage={onRefresh} complaint={item} user={user.type} />} keyExtractor={(item) => item._id.toString()} />
            )}

            {/* Footer */}
            <FooterNav navigation={navigation} sel={1} />
        </Box>
    )
}

export default AdminPage