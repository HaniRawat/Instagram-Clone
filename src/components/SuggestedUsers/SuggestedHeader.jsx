import { Avatar, Text, Flex, Link } from "@chakra-ui/react"
import {Link as RouterLink} from 'react-router-dom'
function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>

    <Flex alignItems={"center"} gap={2}>
        <Avatar name="Hani Rawat" size={"lg"} src="/profilepic.png" />

        <Text fontSize={12} fontWeight={"bold"}>
            Hani Rawat
        </Text>

    </Flex>

    <Link as={RouterLink} to={"/auth"} fontSize={14} fontWeight={"medium"} color={"blue.400"} style={{textDecoration:"none"}} cursor={"pointer"}>
        Log Out
    </Link>

    </Flex>
  )
}

export default SuggestedHeader