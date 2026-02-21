"use client";

import React, { ElementType, forwardRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
    children: React.ReactNode;
    as?: ElementType;
    animationNum?: number;
    timelineRef?: React.RefObject<HTMLElement>;
    customVariants?: {
        visible: (i: number) => Variants;
        hidden: Variants;
    };
    className?: string;
    [key: string]: any;
}

export const TimelineContent = forwardRef<HTMLElement, TimelineContentProps>(
    (
        {
            children,
            as: Component = "div",
            animationNum = 0,
            timelineRef,
            customVariants,
            className,
            ...props
        },
        ref
    ) => {
        // If a timelineRef is passed, use it to determine in-view state.
        // Otherwise fallback to a ref on this element itself via useInView (not fully robust for timeline but functional)
        // For this specific use case, we rely on the parent container (timelineRef) triggering the view.
        const internalRef = React.useRef(null);
        const inViewRef = timelineRef || internalRef;

        // Note: useInView returns a boolean, we want to animate when it becomes true
        const isInView = useInView(inViewRef, { once: true, amount: 0.1 });

        const MotionComponent = motion(Component);

        // Default variants if none provided
        const defaultVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: (i: number) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                },
            }),
        };

        const variants = customVariants || defaultVariants;

        return (
            <MotionComponent
                ref={ref} // Forwarded ref
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={animationNum}
                variants={variants as any}
                className={cn(className)}
                {...props}
            >
                {children}
            </MotionComponent>
        );
    }
);

TimelineContent.displayName = "TimelineContent";
