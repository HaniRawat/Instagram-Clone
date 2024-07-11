import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'

function HomePage() {
  return (
    <Container maxW={"container.lg"}>
      <Flex>
        <Box>
          FeedPosts
        </Box>

        <Box>
          Suggested Users
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage