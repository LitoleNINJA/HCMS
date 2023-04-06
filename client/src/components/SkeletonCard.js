import { HStack, Skeleton, VStack } from 'native-base';

const SkeletonCard = () => {
    return (
        <HStack w="100%" maxW="400" borderWidth="1" my={5} space={8} rounded="md" _dark={{
            borderColor: "coolGray.500"
        }} _light={{
            borderColor: "coolGray.200"
        }} p="4">
            <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
            <VStack flex="3" space="4">
                <Skeleton startColor="amber.200" />
                <Skeleton.Text />
                <HStack space="2" alignItems="center">
                    <Skeleton size="5" rounded="full" />
                    <Skeleton h="3" flex="2" rounded="full" />
                    <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                </HStack>
            </VStack>
        </HStack>
    )
}

export default SkeletonCard