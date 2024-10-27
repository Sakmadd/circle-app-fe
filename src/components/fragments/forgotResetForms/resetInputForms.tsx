import { Box, Button, Input, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { ResetDataType } from '../../../validators/formType';
import { ResetSchema } from '../../../validators/validator';
import { Anchor } from '../../elements/links/anchor';
import { LogoText } from '../../elements/logoText';

interface resetInputFormsProps {
  onSubmit: SubmitHandler<ResetDataType>;
}

export function ResetInputForms({ onSubmit }: resetInputFormsProps) {
  const { baseColor, borderLineColor } = useCustomColorModeValues();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetDataType>({
    resolver: zodResolver(ResetSchema),
  });

  return (
    <>
      <Box
        width={{ base: 'full', md: '40%', '2xl': '30%' }}
        display={'flex'}
        flexDirection={'column'}
        gap={3}
      >
        <Box
          padding={'10%'}
          border={{ base: 'none', md: '1px solid  ' }}
          borderColor={borderLineColor}
          bg={baseColor}
          display={'flex'}
          flexDirection={'column'}
          gap={3}
        >
          <LogoText />
          <Text fontSize={'md'} textAlign={'center'}>
            Secure Your Account!
          </Text>
          <Box
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            display={'flex'}
            flexDir={'column'}
            gap={'10px'}
          >
            <Input
              focusBorderColor="black"
              placeholder="New Password"
              size="md"
              {...register('newPassword')}
            />
            {errors.newPassword && (
              <Text color="red.500">{errors.newPassword.message}</Text>
            )}
            <Input
              focusBorderColor="black"
              placeholder="Confirm Password"
              size="md"
              type="password"
              {...register('confirmedPassword')}
            />
            {errors.confirmedPassword && (
              <Text color="red.500">{errors.confirmedPassword.message}</Text>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              colorScheme="blackAlpha"
            >
              {isSubmitting ? 'Loading...' : 'Create New Password'}
            </Button>
          </Box>
        </Box>

        <Box
          justifyContent={'center'}
          padding={'5%'}
          border={{ base: 'none', md: '1px solid' }}
          borderColor={borderLineColor}
          bg={baseColor}
          display={'flex'}
          flexDirection={'row'}
          gap={1}
        >
          <Text fontSize={'sm'}>Already have an account?</Text>
          <Anchor href="/login">Log In</Anchor>
        </Box>
      </Box>
    </>
  );
}
