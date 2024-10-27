import { Box, Input, InputProps, Text } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { EditUserProfileType } from '../../../types/types';

interface EditProfileInputProps extends InputProps {
  register: UseFormRegister<EditUserProfileType>;
  name: keyof EditUserProfileType;
}

export function EditProfileInput({
  register,
  name,
  ...rest
}: EditProfileInputProps): JSX.Element {
  const { textColor, borderLineColor } = useCustomColorModeValues();
  return (
    <>
      <Box
        width={'full'}
        border={'black 1px solid'}
        padding={'2'}
        borderRadius={'10px'}
        borderColor={borderLineColor}
      >
        <Text fontSize={'xs'}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>
        <Input
          fontWeight={'500'}
          variant={'unstyled'}
          maxWidth={'85%'}
          fontSize={'sm'}
          {...register(name)}
          focusBorderColor={textColor}
          {...rest}
        />
      </Box>
    </>
  );
}
