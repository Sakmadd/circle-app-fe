import { Collapse, FormControl, Text, Textarea } from '@chakra-ui/react';
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import { useCustomColorModeValues } from '../../../../hooks/useCustomColorModeValues';

interface FeedInputProps<T extends FieldValues> {
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
}

export function FeedInput<T extends FieldValues>({
  error,
  name,
  placeholder,
  register,
}: FeedInputProps<T>) {
  const isCollapsed = error ? true : false;
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
        {...register(name)}
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
      <Collapse in={isCollapsed} transition={{ enter: { duration: 0.5 } }}>
        <Text mt={'.5rem'} color={'circle.error'}>
          {error && error.message}
        </Text>
      </Collapse>
    </FormControl>
  );
}
