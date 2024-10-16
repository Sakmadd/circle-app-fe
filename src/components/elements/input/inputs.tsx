import { Input } from '@chakra-ui/react';

export function Inputs({
  props,
}: {
  props: { name: string; placeholder: string }[];
}) {
  return (
    <>
      {props.map((single) => (
        <Input
          key={single.name}
          name={single.name}
          focusBorderColor="black"
          placeholder={single.placeholder}
          size="md"
        />
      ))}
    </>
  );
}
