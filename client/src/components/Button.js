import React, { memo} from "react";

const Button = ({text, textColor, bgColor, IconBefore, onClick, fullWidth}) => {
    return (
        <button
            type="button"
            className={`px-4 py-2 ${textColor} ${bgColor} ${fullWidth && 'w-full'} outline-none rounded-md hover:underline flex items-center justify-center gap-2`}
            onClick={onClick}
        >
            {IconBefore && <IconBefore />}
            {text}
        </button>
    );
}

export default memo(Button);