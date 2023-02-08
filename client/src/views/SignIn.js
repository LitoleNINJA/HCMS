import { Box, Button, Flex, FormControl, Heading, Input, VStack, HStack, Text, Link } from 'native-base';

const SignIn = ({ navigation }) => {
    return (
        <Flex w="100%" bg="#1e293b" h="100%" alignItems="center" >
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" color="warmGray.50" fontWeight="semibold">
                    Welcome
                </Heading>
                <Heading mt="1" color="warmGray.200" fontWeight="medium" size="xs">
                    Sign up to continue!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input color="white" selectionColor="white" />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Registration No</FormControl.Label>
                        <Input color="white" selectionColor="white" placeholder="20bce1000" />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input color="white" selectionColor="white" placeholder="admin@vitstudent.ac.in" />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Room No</FormControl.Label>
                        <Input color="white" selectionColor="white" placeholder="Eg 500" />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input color="white" selectionColor="white" type="password" />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input color="white" selectionColor="white" type="password" />
                    </FormControl>
                    <Button mt="2" colorScheme="indigo">
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
            </Box>
        </Flex>
    )
}

export default SignIn