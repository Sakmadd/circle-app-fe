import { FormControl, Textarea } from '@chakra-ui/react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

interface FeedInputProps extends React.ComponentProps<'textarea'> {
  placeholder: string;
  name: string;
}

export function FeedInput(props: FeedInputProps) {
  const { placeholder, name } = props;
  const { textColor } = useCustomColorModeValues();

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
        fontSize={{ base: 'sm', md: 'lg' }}
        _active={{ background: 'none', boxShadow: 'none' }}
        _focus={{ background: 'none', boxShadow: 'none' }}
        _placeholder={{ color: textColor }}
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
