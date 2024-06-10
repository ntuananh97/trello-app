import { useState } from "react";

interface UseInputReturn {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// Create the custom hook
const useInput = (initialValue: string): UseInputReturn => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange: handleChange,
    };
};

export default useInput;