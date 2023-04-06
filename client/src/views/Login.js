import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Flex, Spinner, Alert, Collapse, IconButton, CloseIcon } from "native-base";
import { Keyboard } from "react-native";
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

const Login = ({ navigation }) => {

    const dispatch = useDispatch();

    const [regno, setRegno] = useState('20BCE1053');
    const [password, setPassword] = useState('admin123');
    const [loading, setLoading] = useState(false);
    const [showErr, setShowErr] = useState(false);
    const [err, setErr] = useState('No Error');

    const handleLogin = async () => {
        if (regno === '' || password === '') {
            alert('Please fill all the fields');
            return;
        }
        setLoading(true);
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const { data } = await axios.post('/api/login', {
                regno: regno.trim(),
                password: password.trim()
            }, config);

            dispatch(setUser({ user: data.user, token: data.token }));
            setTimeout(() => {
                setLoading(false);
            }, 100);
            if (data.user.type === 'student') {
                navigation.replace('HomePage');
            } else {
                navigation.replace('AdminPage');
            }
        } catch (err) {
            Keyboard.dismiss();
            console.log(err);
            setErr(err.response.data.message);
            setLoading(false);
            setShowErr(true);
            setTimeout(() => {
                setShowErr(false);
            }, 6000);
            return;
        }
    }

    return (
        <Flex w="100%" bg="#1e293b" h="100%" alignItems="center" >
            <Box safeArea p="2" py="10" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="warmGray.50">
                    Welcome
                </Heading>
                <Heading mt="1" color="warmGray.200" fontWeight="medium" size="xs">
                    Sign in to continue!
                </Heading>

                <VStack space={3} mt="5">
                    {/* INPUTS */}
                    <FormControl>
                        <FormControl.Label>Registration No</FormControl.Label>
                        <Input color="white" value={regno}
                            onChangeText={e => setRegno(e)} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" color="white" value={password}
                            onChangeText={e => setPassword(e)} />
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "indigo.500"
                        }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link>
                    </FormControl>

                    {/* Sign In Button */}
                    <Button mt="2" colorScheme="indigo" onPress={() => handleLogin()} >
                        {loading ? <Spinner color="white" size="sm" /> : "Sign In"}
                    </Button>

                    {/* New User */}
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="warmGray.200" >
                            I'm a new user.{" "}
                        </Text>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} onPress={() => navigation.navigate('SignIn')} >
                            Sign Up
                        </Link>
                    </HStack>

                    {/* Alert */}
                    <Collapse isOpen={showErr} mt={40} >
                        <Alert variant="left-accent" maxW="400" status="error">
                            <HStack px={4} width="100%" flexShrink={1} alignItems="center" justifyContent="space-between">
                                <HStack flexShrink={1} space={2} alignItems="center">
                                    <Alert.Icon />
                                    <Text fontSize="md" fontWeight="medium" _dark={{
                                        color: "coolGray.800"
                                    }}>
                                        {err}
                                    </Text>
                                </HStack>
                                <IconButton variant="unstyled" _focus={{
                                    borderWidth: 0
                                }} icon={<CloseIcon size="4" />} _icon={{
                                    color: "coolGray.600"
                                }} onPress={() => setShowErr(false)} />
                            </HStack>
                        </Alert>
                    </Collapse>
                </VStack>
            </Box>
        </Flex>
    )
}

export default Login