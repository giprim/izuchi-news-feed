
import { DialogActionTrigger, DialogBackdrop, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger } from './ui/dialog'
import { Box, Button, Input, Stack, Text } from '@chakra-ui/react'
import { useFilter } from 'src/hooks/useFilter'
import { LuFilter } from 'react-icons/lu'

import { SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText } from './ui/select'
import { Controller } from 'react-hook-form'

const FilterModal = () => {
  const {
    clearPreferences,
    register,
    submit,
    isDirty,
    control,
    contentRef,
    authors_,
    newsApiSources_,
    guardianSources_,
    categories_,
    nytSources_
  } = useFilter()

  return (
    <DialogRoot>
      <DialogBackdrop />
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <LuFilter />
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent as={'form'} onSubmit={submit} ref={contentRef}>
        <DialogHeader>
          <DialogTitle>Filter</DialogTitle>
        </DialogHeader>
        <DialogBody >
          <Box spaceY={4}>
            {/* Authors */}
            <Controller
              control={control}
              name="author"
              render={({ field }) => (
                <SelectRoot
                  name={field.name}
                  value={field.value}
                  onValueChange={({ value }) => field.onChange(value)}
                  onInteractOutside={() => field.onBlur()}
                  collection={authors_}
                  size="md" >
                  <SelectLabel> Authors</SelectLabel>
                  <SelectTrigger clearable>
                    <SelectValueText placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent portalRef={contentRef} textTransform={'capitalize'}>
                    {authors_.items.map((item) => (
                      <SelectItem item={item} key={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              )}
            />

            {/* Sources */}
            <Box>
              <Text py={1} fontWeight={'medium'}>Source</Text>
              <Stack direction={{ base: 'column', lg: 'row' }} gapY={3} gapX={1}>
                <Controller
                  control={control}
                  name="newsApi"
                  render={({ field }) => (

                    <SelectRoot
                      name={field.name}
                      value={field.value}
                      onValueChange={({ value }) => field.onChange(value)}
                      onInteractOutside={() => field.onBlur()}
                      collection={newsApiSources_}
                      size="md" >
                      <SelectTrigger clearable>
                        <SelectValueText placeholder="NewsApi" />
                      </SelectTrigger>
                      <SelectContent portalRef={contentRef} textTransform={'capitalize'}>
                        {newsApiSources_.items.map((item) => (
                          <SelectItem item={item} key={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectRoot>)}
                />
                <Controller
                  control={control}
                  name="guardian"
                  render={({ field }) => (
                    <SelectRoot
                      name={field.name}
                      value={field.value}
                      onValueChange={({ value }) => field.onChange(value)}
                      onInteractOutside={() => field.onBlur()}

                      collection={guardianSources_}
                      size="md" >
                      <SelectTrigger clearable>
                        <SelectValueText placeholder="Guardian" />
                      </SelectTrigger>
                      <SelectContent portalRef={contentRef} textTransform={'capitalize'}>
                        {guardianSources_.items.map((item) => (
                          <SelectItem item={item} key={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectRoot>)}
                />
                <Controller
                  control={control}
                  name="nyt"
                  render={({ field }) => (
                    <SelectRoot
                      name={field.name}
                      value={field.value}
                      onValueChange={({ value }) => field.onChange(value)}
                      onInteractOutside={() => field.onBlur()}

                      collection={nytSources_}
                      size="md" >
                      <SelectTrigger clearable>
                        <SelectValueText placeholder="New York Times" />
                      </SelectTrigger>
                      <SelectContent portalRef={contentRef} textTransform={'capitalize'}>
                        {nytSources_.items.map((item) => (
                          <SelectItem item={item} key={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectRoot>)}
                />
              </Stack>
            </Box>


            {/* Categories */}
            <Controller
              control={control}
              name="category"
              render={({ field }) => (
                <SelectRoot
                  name={field.name}
                  value={field.value}
                  onValueChange={({ value }) => field.onChange(value)}
                  onInteractOutside={() => field.onBlur()}
                  collection={categories_} size="md" >
                  <SelectLabel> Category</SelectLabel>
                  <SelectTrigger clearable>
                    <SelectValueText placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent portalRef={contentRef} textTransform={'capitalize'}>
                    {categories_.items.map((item) => (
                      <SelectItem item={item} key={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              )}
            />
            <Stack gapY={4} direction={{ base: 'column', lg: 'row' }}>
              <Text as={'label'} w={'full'}>
                Date from
                <Input type='date' mt={2} {...register('from')} />
              </Text>
              <Text as={'label'} w={'full'}>
                Date to
                <Input type='date' mt={2} {...register('to')} />
              </Text>
            </Stack>
          </Box>
        </DialogBody>
        <DialogFooter>
          <Button disabled={!isDirty} variant="outline" onClick={clearPreferences}>Clear</Button>
          <DialogActionTrigger asChild>
            <Button type='submit' disabled={!isDirty}>Save</Button>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}

export default FilterModal



