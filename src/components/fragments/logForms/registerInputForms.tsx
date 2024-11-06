import { Box, Button, Input, Text } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { RegisterDataType } from '../../../validators/formType';
import { Anchor } from '../../elements/links/anchor';
import { LogoText } from '../../elements/logoText';
import { LogOptions } from '../logOptions/logOptions';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '../../../validators/validator';

interface RegisterInputFormsProps {
  onSubmit: SubmitHandler<RegisterDataType>;
}

export function RegisterInputForms({ onSubmit }: RegisterInputFormsProps) {
  const { baseColor, borderLineColor } = useCustomColorModeValues();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterDataType>({
    resolver: zodResolver(RegisterSchema),
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
        borderColor={borderLineColor}
        borderWidth={{ base: 'none', md: '2px' }}
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
            placeholder="Full Name"
            size="md"
            {...register('name')}
          />
          {errors.name && <Text color="red.500">{errors.name.message}</Text>}
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
            placeholder="Email"
            size="md"
            {...register('email')}
          />
          {errors.email && <Text color="red.500">{errors.email.message}</Text>}
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
            colorScheme="blackAlpha"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Loading...' : 'Register'}
          </Button>
        </Box>

        <LogOptions />
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
        <Text fontSize="sm">Already have an account?</Text>
        <Anchor href="/login">Login</Anchor>
      </Box>
    </Box>
  );
}
