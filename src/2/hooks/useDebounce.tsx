import { useEffect, useState } from "react";


type MainProps = {
  value: string,
  delay: number,
}

export const useDebounce = (props: MainProps) => {
  const { value, delay = 500 } = props;
  console.log('propssss', props)
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};