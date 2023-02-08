import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Flex } from "native-base";

const Login = ({navigation}) => {

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
                    <FormControl>
                        <FormControl.Label>Registration No</FormControl.Label>
                        <Input color="white" selectionColor="white" />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" color="white" selectionColor="white"  />
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "indigo.500"
                        }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate('HomePage')} >
                        Sign in
                    </Button>
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
                </VStack>
            </Box>
        </Flex>
  )
}

export default Login