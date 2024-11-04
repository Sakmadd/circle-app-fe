import { Container, Flex, Image, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../libs/supabase';
import api from '../../networks/api';
import { generateUsername } from '../../utils/generateUsername';

export function AuthCallbackPage() {
  const navigate = useNavigate();
  const animationStyle = {
    animation: 'pulse 2s infinite',
  };

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      }
      if (session?.user) {
        const userData = {
          id: session.user.id,
          email: session.user.email,
          name: session.user.user_metadata.full_name,
          username: generateUsername(session.user.user_metadata.full_name),
        };
        const result = await api.AUTH_CALLBACK_PROVIDER(userData);
        if (result) {
          navigate('/');
          navigate(0);
        }
      }
    };

    fetchSession();
  }, [navigate]);

  return (
    <Container height={'100vh'}>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        gap={'.5rem'}
        height={'100%'}
        flexDirection={'column'}
        marginBottom={'50px'}
      >
        <Image
          src={'/src/assets/preload-circle-logo.svg'}
          width={'85px'}
          paddingTop={'15px'}
          style={animationStyle}
        />
        <Spinner
          thickness="10px"
          width={'120px'}
          height={'120px'}
          color={'accent.base'}
          pos={'absolute'}
        />
      </Flex>
    </Container>
  );
}
