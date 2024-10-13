import { FormControl, Textarea, useColorModeValue } from '@chakra-ui/react';

interface FeedInputProps {
  placeholder: string;
  name: string;
}

export function FeedInput(props: FeedInputProps) {
  const { placeholder, name } = props;
  const fontColor = useColorModeValue('day.text', 'night.text');

  return (
    <FormControl color={'circle.font'} minHeight={0}>
      <Textarea
        px={0}
        border={0}
        bg={'transparent'}
        minHeight={'50px'}
        width={'100%'}
        resize={'none'}
        placeholder={placeholder}
        fontSize={{ base: 'sm', sm: 'md' }}
        _active={{ background: 'none', boxShadow: 'none' }}
        _focus={{ background: 'none', boxShadow: 'none' }}
        _placeholder={{ color: fontColor }}
        id={name}
        variant={'hollow'}
        overflow={'auto'}
        sx={{
          '&::-webkit-scrollbar': {
            width: '2px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '24px',
          },
        }}
      />
    </FormControl>
  );
}
