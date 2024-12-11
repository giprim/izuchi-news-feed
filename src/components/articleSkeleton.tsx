import { Box, Stack, Skeleton } from '@chakra-ui/react'

const ArticleSkeleton = () => {
  return (
    <Box spaceY={8} py={6}>
      <Stack flex="1" justifyContent={'start'} placeSelf={'stretch'} >
        <Skeleton height="11" width="80%" />
        <Skeleton height="320px" />
        <Skeleton height="3" width="80%" />
      </Stack>
      <Stack flex="1" justifyContent={'start'} placeSelf={'stretch'} >
        <Skeleton height="3" />
        <Skeleton height="3" width="80%" />
      </Stack>
      <Stack flex="1" justifyContent={'start'} placeSelf={'stretch'} >
        <Skeleton height="4" />
        <Skeleton height="3" width="80%" />
      </Stack>
    </Box>
  )
}

export default ArticleSkeleton