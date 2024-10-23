import { useToast } from '@chakra-ui/react';
import axios from 'axios';

interface ToastDetail {
  title: string;
  message: string;
}

function useCircleInfoToast() {
  const toast = useToast();

  function createToast(
    promise: Promise<unknown>,
    { title, message }: ToastDetail
  ) {
    toast.promise(promise, {
      success: { title: title, description: message },
      error: (error: Error) => {
        if (axios.isAxiosError(error)) {
          if (!error.response) {
            return {
              title: title,
              description: error.message,
            };
          }

          return {
            title: title,
            description: error.message,
          };
        }

        return {
          title: title,
          description: 'Something went wrong.',
        };
      },
      loading: {
        title: 'Loading',
        description: "Please wait we're working on it.",
      },
    });
  }

  return createToast;
}

export default useCircleInfoToast;
