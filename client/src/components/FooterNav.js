import { Box, Center, HStack, Icon, Pressable, Text } from 'native-base';
import { useState } from 'react';
import { MaterialCommunityIcons, MaterialIcons, Ionicons} from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const FooterNav = ({ navigation, sel }) => {
    const { user } = useSelector(state => state.user);
    const [selected, setSelected] = useState(sel);

    const handleLogout = () => {
        navigation.replace('Login');
    };

    const handleHome = () => {
        if (user.type === 'Admin') {
            navigation.navigate('AdminPage');
        } else {
            navigation.navigate('HomePage');    
        }
    };

    return (
        <Box width="100%" alignSelf="center" >
            <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
                <Pressable opacity={selected === 1 ? 1 : 0.5} py="3" flex={1} onPress={() => {
                    setSelected(1);
                    handleHome();
                }}>
                    <Center>
                        <Icon mb="1" as={<MaterialCommunityIcons name={selected === 1 ? 'home' : 'home-outline'} />} color="white" size="sm" />
                        <Text color="white" fontSize="12">
                            Home
                        </Text>
                    </Center>
                </Pressable>

                <Pressable opacity={selected === 2 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(2)}>
                    <Center>
                        <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
                        <Text color="white" fontSize="12">
                            Search
                        </Text>
                    </Center>
                </Pressable>

                <Pressable opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => {
                    setSelected(3)
                    navigation.navigate('Leave');
                }}>
                    <Center>
                        <Icon mb="1" as={<Ionicons name={selected === 3 ? 'document-text' : 'document-text-outline'} />} color="white" size="sm" />
                        <Text color="white" fontSize="12">
                            Leave
                        </Text>
                    </Center>
                </Pressable>
                
                {/* TODO: Profile Page with Logout Option */}
                <Pressable opacity={0.5} py="2" flex={1} onPress={() => {
                    handleLogout();
                }}>
                    <Center>
                        <Icon mb="1" as={<MaterialIcons name='logout' />} color="white" size="sm" />
                        <Text color="white" fontSize="12">
                            Logout
                        </Text>
                    </Center>
                </Pressable>
            </HStack>
        </Box>
    )
}

export default FooterNav