import * as React from "react";
import { cn } from "./utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, className, ...other }: ButtonProps): JSX.Element {
    return (
        <button
            className={cn(
                "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",
                className
            )}
            {...other}
        >
            {children}
        </button>
    );
}

Button.displayName = "Button";
