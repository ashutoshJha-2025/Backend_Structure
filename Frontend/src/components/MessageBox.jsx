import { useEffect, useState } from "react";

const MessageBox = ({ msg }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (msg) {
            setVisible(true);

            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [msg]);

    return (
        <div
            className={`fixed right-5 bottom-5 w-60 h-10 z-100 bg-white shadow-2xl flex justify-center items-center rounded-xl border-3 border-white
            transform transition-all duration-500 ease-in-out
            ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
            <h1 className="text-lg text-red-500">{msg}</h1>
        </div>
    );
};

export default MessageBox