import { Input } from '@chakra-ui/react';

export function Inputs({ placeholder }: { placeholder: string[] }) {
  return (
    <>
      {placeholder.map((single) => (
        <Input
          key={single}
          name={single}
          focusBorderColor="black"
          placeholder={single}
          size={'md'}
        />
      ))}
    </>
  );
}
