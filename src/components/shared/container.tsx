import React from "react";

const Container = ({
children,
className,
}: {
children: React.ReactNode;
className?: string;
}) => {
return (
    <div
     className={`h-full mx-auto w-[90%] lg:w-[85%] 2xl:w-[1150px] 3xl:w-[1400px] ${className}`}
    >
     {children}
    </div>
);
};

export default Container;