import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { UseFormRegister } from 'react-hook-form';
import { EditUserDataType } from '../../../../types/types';
import HollowButton from '../../../elements/buttons/hollowButton';
import { useCustomColorModeValues } from '../../../../hooks/useCustomColorModeValues';

interface ChangeBannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  register: UseFormRegister<EditUserDataType>;
  setBannerPreview: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function ChangeBannerModal({
  setBannerPreview,
  isOpen,
  onClose,
  register,
}: ChangeBannerModalProps) {
  const { baseColor } = useCustomColorModeValues();
  const editorRef = useRef<AvatarEditor>(null);
  const [scale, setScale] = useState(1.0);
  const [image, setImage] = useState<File | null>(null);
  const onAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };
  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImage();
      const croppedImageBase64 = canvas.toDataURL();
      setBannerPreview(croppedImageBase64);
      onClose();
    }
  };
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={'2xl'}
      >
        <ModalOverlay />
        <ModalContent backgroundColor={baseColor}>
          <ModalHeader>Change Banner</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              {...register('avatar')}
              accept={'image/*'}
              display={'none'}
              type={'file'}
              id={'avatarInput'}
              variant={'hollow'}
              onChange={(e) => onAvatarChange(e)}
            />
            {image && (
              <Flex justifyContent={'center'} padding={'10px'}>
                <Box>
                  <AvatarEditor
                    ref={editorRef}
                    image={image}
                    width={500}
                    height={130}
                    border={50}
                    scale={scale}
                  />
                  <Box mt={4}>
                    <Text>Zoom:</Text>
                    <Slider
                      aria-label="slider-ex-1"
                      defaultValue={1}
                      min={1}
                      max={3}
                      step={0.1}
                      value={scale}
                      onChange={(val) => setScale(val)}
                    >
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb />
                    </Slider>
                  </Box>
                </Box>
              </Flex>
            )}
            <Flex justifyContent={'center'}>
              <HollowButton>
                <Text
                  cursor={'pointer'}
                  as={'label'}
                  htmlFor={'avatarInput'}
                  paddingY={'20px'}
                >
                  Select Image
                </Text>
              </HollowButton>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => handleSave()}>Change</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
