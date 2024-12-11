import { Box, Heading, Image, Link, Text } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ArticleSkeleton from 'src/components/articleSkeleton';
import BackBtn from 'src/components/backBtn';
import { ArticlePageProps } from 'src/types';

const Article = () => {
  const data = useLoaderData<ArticlePageProps | null>();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  if (!data) {
    return <ArticleSkeleton />
  }
  return (
    <Box>
      <BackBtn />
      <Heading py={3} size={{ base: '2xl', lg: '4xl' }} as={'h1'}>{data.title}</Heading>
      <Text textStyle={'sm'} pb={4}>
        By <Link variant={'underline'}>{data.author}</Link>, <Link variant={'underline'}>{data.category}</Link>
      </Text>

      <Box minH={200} bgColor={'GrayText'} objectFit={'cover'}>
        <Image src={data.thumbNail} w={'full'} objectFit={'cover'} aspectRatio={'wide'} />
      </Box>
      <Box py={4}>
        <Box spaceY={6} dangerouslySetInnerHTML={{ __html: data.body }} />
      </Box>
    </Box>
  )
}

export default Article
