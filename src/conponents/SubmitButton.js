import { useState } from "react";

function SubmitButton() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitHandler() {
        setIsSubmitted(true);
    }

    return (
        <buttor onClick={submitHandler}>
            {isSubmitted? 'Loading...':'Submit'}
        </buttor>

    );
};

export default SubmitButton;