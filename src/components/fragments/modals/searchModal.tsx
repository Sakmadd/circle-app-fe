import {
  Box,
  Input,
  InputGroup,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ReactNode, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiSearch } from 'react-icons/fi';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

interface SearchModalProps {
  onValueChange: (value: string) => void;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({
  isOpen,
  onClose,
  children,
  onValueChange,
}: SearchModalProps) {
  const { baseColor, searchBarColor, searchBodyColor } =
    useCustomColorModeValues();
  const { register, watch } = useForm();
  const watchedValue = watch('username');

  useEffect(() => {
    const handler = setTimeout(() => {
      onValueChange(watchedValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [watchedValue, onValueChange]);

  return (
    <>
      <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent backgroundColor={searchBodyColor} marginX={'1rem'}>
          <ModalHeader>
            <InputGroup
              margin={'auto'}
              pos={'relative'}
              backgroundColor={searchBodyColor}
            >
              <Box pointerEvents="none" padding={'10px'} paddingLeft={0}>
                <FiSearch color={baseColor} fontSize={'30px'} />
              </Box>
              <Input
                {...register('username')}
                padding={'10px'}
                paddingLeft={'20px'}
                variant={'unstyled'}
                borderRadius={'full'}
                width={'100%'}
                height={'50px'}
                fontSize={{ base: '15px', md: '17px' }}
                type="tel"
                placeholder=" Search Something"
                focusBorderColor="grey"
                backgroundColor={searchBarColor}
              />
            </InputGroup>
          </ModalHeader>
          {children}
        </ModalContent>
      </Modal>
    </>
  );
}
