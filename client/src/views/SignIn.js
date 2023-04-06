import { Box, Button, Flex, FormControl, Heading, Input, VStack, HStack, Text, Link, ScrollView } from 'native-base';
import axios from 'axios';
import { useState } from 'react';
import { z } from 'zod';

const SignIn = ({ navigation }) => {

    const [name, setName] = useState('');
    const [regno, setRegno] = useState('');
    const [email, setEmail] = useState('');
    const [room, setRoom] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [type, setType] = useState('student');

    const schema = z.object({
        name: z.string().trim().min(3, { message: 'Name must be atleast 3 characters long' }),
        regno: z.string().trim().length(9, { message: 'Registration Number must be 9 characters long' }),
        email: z.string().trim().email({ message: 'Email must be valid' }),
        room: z.string().trim().length(3, { message: 'Room Number must be 3 characters long' }),
        phone: z.string().trim().length(10, { message: 'Phone Number must be 10 characters long' }),
        password: z.string().trim().min(6).max(15, { message: 'Password must be atleast 6 characters long' }),
        confirmPassword: z.string().trim().min(1)
    })
        .refine(data => data.password === data.confirmPassword, { message: 'Passwords do not match' });

    const Validate = () => {
        try {
            schema.parse({
                name,
                regno,
                email,
                room,
                phone,
                password,
                confirmPassword
            });
        } catch (err) {
            alert(err.message);
            return;
        }
    }

    const handleSignUp = async () => {
        // TODO: Better Alerts
        Validate();

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const { data } = await axios.post('/api/register', {
                name: name,
                regno: regno,
                email: email,
                room: room,
                type: type,
                phone: phone,
                password: password
            }, config);
            alert(data.message);
            navigation.navigate('Login');
        } catch (err) {
            console.log(err.response.data);
            alert(err.message);
        }
    }

    return (
        <Flex w="100%" bg="#1e293b" h="100%" alignItems="center" >
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" color="warmGray.50" fontWeight="semibold">
                    Welcome
                </Heading>
                <Heading mt="1" color="warmGray.200" fontWeight="medium" size="xs">
                    Sign up to continue!
                </Heading>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <VStack space={3} mt="5">
                        {/* Name */}
                        <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input cursorColor="white" color="white" value={name}
                                onChangeText={e => setName(e)} />
                        </FormControl>

                        {/* Registration No */}
                        <FormControl>
                            <FormControl.Label>Registration No</FormControl.Label>
                            <Input color="white" selectionColor="white" placeholder="E.g 20bce1000" value={regno}
                                onChangeText={(text) => setRegno(text)} />
                        </FormControl>

                        {/* Email */}
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input color="white" selectionColor="white" placeholder="E.g admin@vitstudent.ac.in"
                                value={email} onChangeText={(text) => setEmail(text)} />
                        </FormControl>

                        {/* Room No */}
                        <FormControl>
                            <FormControl.Label>Room No</FormControl.Label>
                            <Input color="white" selectionColor="white" placeholder="Eg 500" value={room}
                                onChangeText={(text) => setRoom(text)} />
                        </FormControl>

                        {/* Phone */}
                        <FormControl>
                            <FormControl.Label>Phone</FormControl.Label>
                            <Input color="white" selectionColor="white" value={phone}
                                onChangeText={(text) => setPhone(text)} />
                        </FormControl>

                        {/* Password */}
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input color="white" selectionColor="white" type="password" value={password} onChangeText={(text) => setPassword(text)} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <Input color="white" selectionColor="white" type="password" value={confirmPassword}
                                onChangeText={e => setConfirmPassword(e)} />
                        </FormControl>

                        <Button mt="2" colorScheme="indigo" onPress={() => handleSignUp()}>
                            Sign up
                        </Button>

                        <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="warmGray.200" >
                                Already Registered ?{" "}
                            </Text>
                            <Link _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }} onPress={() => navigation.navigate('Login')} >
                                Sign Up
                            </Link>
                        </HStack>
                    </VStack>
                </ScrollView>
            </Box>
        </Flex>
    )
}

export default SignIn