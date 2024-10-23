import { Box, Button, Input, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { LoginDataType } from '../../../validators/formType';
import { LoginSchema } from '../../../validators/validator';
import { Anchor } from '../../elements/links/anchor';
import { LogoText } from '../../elements/logoText';
import { LogOptions } from '../logOptions/logOptions';

interface LoginInputFormsProps {
  onSubmit: SubmitHandler<LoginDataType>;
}

export function LoginInputForms({ onSubmit }: LoginInputFormsProps) {
  const { baseColor, borderLineColor } = useCustomColorModeValues();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginDataType>({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <Box
      width={{ base: 'full', md: '40%', '2xl': '30%' }}
      display={'flex'}
      flexDirection={'column'}
      gap={3}
    >
      <Box
        padding={'10%'}
        border={{ base: 'none', md: '1px solid grey' }}
        borderColor={borderLineColor}
        bg={baseColor}
        display={'flex'}
        flexDirection={'column'}
        gap={3}
      >
        <LogoText />

        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          display={'flex'}
          flexDir={'column'}
          gap={'10px'}
        >
          <Input
            focusBorderColor="black"
            placeholder="Username"
            size="md"
            {...register('username')}
          />
          {errors.username && (
            <Text color="red.500">{errors.username.message}</Text>
          )}
          <Input
            focusBorderColor="black"
            placeholder="Password"
            size="md"
            type="password"
            {...register('password')}
          />
          {errors.password && (
            <Text color="red.500">{errors.password.message}</Text>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            colorScheme="blackAlpha"
          >
            {isSubmitting ? 'Loading...' : 'Login'}
          </Button>
        </Box>

        <LogOptions />
      </Box>

      <Box
        justifyContent={'center'}
        padding={'5%'}
        border={{ base: 'none', md: '1px solid grey' }}
        borderColor={borderLineColor}
        bg={baseColor}
        display={'flex'}
        flexDirection={'row'}
        gap={1}
      >
        <Text fontSize="sm">Dont have an account?</Text>
        <Anchor href="/register">Register</Anchor>
      </Box>
    </Box>
  );
}
