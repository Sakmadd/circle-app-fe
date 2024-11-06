import { Box, Button, Input, Text } from '@chakra-ui/react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { Anchor } from '../../elements/links/anchor';
import { LogoText } from '../../elements/logoText';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ForgotDataType } from '../../../validators/formType';
import { zodResolver } from '@hookform/resolvers/zod';
import { ForgotSchema } from '../../../validators/validator';

interface forgotInputFormsProps {
  onSubmit: SubmitHandler<ForgotDataType>;
}

export function ForgotInputForms({ onSubmit }: forgotInputFormsProps) {
  const { baseColor, borderLineColor } = useCustomColorModeValues();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotDataType>({
    resolver: zodResolver(ForgotSchema),
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
          borderColor={borderLineColor}
          borderWidth={{ base: 'none', md: '2px' }}
          bg={baseColor}
          display={'flex'}
          flexDirection={'column'}
          gap={3}
        >
          <LogoText />
          <Text fontSize={'md'} textAlign={'center'}>
            Forgot Your Password?
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
              placeholder="Email"
              size="md"
              {...register('email')}
            />
            {errors.email && (
              <Text color="red.500">{errors.email.message}</Text>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              colorScheme="blackAlpha"
            >
              {isSubmitting ? 'Loading...' : 'Send Me Instructions'}
            </Button>
          </Box>
        </Box>

        <Box
          justifyContent={'center'}
          padding={'5%'}
          borderColor={borderLineColor}
          borderWidth={{ base: 'none', md: '2px' }}
          bg={baseColor}
          display={'flex'}
          flexDirection={'row'}
          gap={1}
        >
          <Text fontSize={'sm'}>Try another account?</Text>
          <Anchor href="/login">Login</Anchor>
        </Box>
      </Box>
    </>
  );
}
