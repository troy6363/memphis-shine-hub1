"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const plans = [
    {
        name: "Standard Detail",
        description:
            "Perfect for maintaining your vehicle's shine and protection",
        price: 150,
        yearlyPrice: 120, // Discounted rate logic preserved from example
        buttonText: "Book Now",
        buttonVariant: "outline" as const,
        features: [
            { text: "Hand Wash & Dry", icon: <Briefcase size={20} /> },
            { text: "Interior Vacuum", icon: <Database size={20} /> },
            { text: "Tire Dressing", icon: <Server size={20} /> },
        ],
        includes: [
            "Includes:",
            "Exterior Foam Wash",
            "Wheel Cleaning",
            "Interior Wipe Down",
            "Window Cleaning",
            "Door Jambs Cleaning",
        ],
    },
    {
        name: "Premium Polish",
        description:
            "Our signature service for deep gloss and paint correction",
        price: 350,
        yearlyPrice: 300,
        buttonText: "Book Now",
        buttonVariant: "default" as const,
        popular: true,
        features: [
            { text: "Paint Correction", icon: <Briefcase size={20} /> },
            { text: "Ceramic Sealant", icon: <Database size={20} /> },
            { text: "Leather Conditioning", icon: <Server size={20} /> },
        ],
        includes: [
            "Everything in Standard, plus:",
            "Clay Bar Treatment",
            "1-Step Machine Polish",
            "Leather Cleaning & Conditioning",
            "Carpet Shampoo",
            "Engine Bay Detail",
        ],
    },
    {
        name: "Ceramic Coating",
        description:
            "Ultimate protection with multi-year durability warranty",
        price: 850,
        yearlyPrice: 800,
        buttonText: "Book Now",
        buttonVariant: "outline" as const,
        features: [
            { text: "5-Year Protection", icon: <Briefcase size={20} /> },
            { text: "9H Hardness", icon: <Database size={20} /> },
            { text: "Hydrophobic", icon: <Server size={20} /> },
        ],
        includes: [
            "Everything in Premium, plus:",
            "Multi-Stage Paint Correction",
            "5-Year Ceramic Coating",
            "Wheel Ceramic Coating",
            "Glass Coating",
            "Interior Fabric Guard",
        ],
    },
];

const PricingSwitch = ({
    onSwitch,
    value,
    className,
}: {
    onSwitch: (value: string) => void;
    value: string;
    className?: string;
}) => {
    const handleSwitch = (newValue: string) => {
        if (value !== newValue) {
            onSwitch(newValue);
        }
    };

    return (
        <div className={cn("flex justify-center", className)}>
            <div className="relative z-10 mx-auto flex w-fit rounded-xl bg-card border border-border p-1">
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSwitch("0")
                    }}
                    className={cn(
                        "relative z-10 w-fit cursor-pointer h-12 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
                        value === "0"
                            ? "text-black" // Text becomes dark on gold background
                            : "text-muted-foreground hover:text-foreground",
                    )}
                >
                    {value === "0" && (
                        <motion.span
                            layoutId={"switch"}
                            className="absolute top-0 left-0 h-12 w-full rounded-xl border-4 shadow-sm shadow-primary/50 border-primary bg-gradient-to-t from-primary via-primary/80 to-primary"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative">Coupe / Sedan</span>
                </button>

                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSwitch("1")
                    }}
                    className={cn(
                        "relative z-10 w-fit cursor-pointer h-12 flex-shrink-0 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
                        value === "1"
                            ? "text-black"
                            : "text-muted-foreground hover:text-foreground",
                    )}
                >
                    {value === "1" && (
                        <motion.span
                            layoutId={"switch"}
                            className="absolute top-0 left-0  h-12 w-full rounded-xl border-4 shadow-sm shadow-primary/50 border-primary bg-gradient-to-t from-primary via-primary/80 to-primary"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative flex items-center gap-2">
                        SUV / Truck
                        <span className="rounded-full bg-background/20 px-2 py-0.5 text-xs font-medium text-foreground">
                            Larger
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default function PricingSection5() {
    const [isYearly, setIsYearly] = useState(false); // Using 'isYearly' to represent 'isSUV' for minimal logic change
    const pricingRef = useRef<HTMLDivElement>(null);

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.2, // Faster staggered animation
                duration: 0.5,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            y: -20,
            opacity: 0,
        },
    };

    const togglePricingPeriod = (value: string) =>
        setIsYearly(Number.parseInt(value) === 1);

    return (
        <div
            className="px-4 py-12 md:py-24 min-h-screen max-w-7xl mx-auto relative"
            ref={pricingRef}
            id="pricing"
        >
            <article className="text-left mb-6 space-y-4 max-w-2xl mx-auto text-center">
                <h2 className="md:text-6xl text-3xl capitalize font-medium text-foreground mb-4">
                    <VerticalCutReveal
                        splitBy="words"
                        staggerDuration={0.15}
                        staggerFrom="first"
                        reverse={true}
                        containerClassName="justify-center text-gold-gradient"
                        autoStart={false}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 40,
                            delay: 0,
                        }}
                    >
                        Choose the Perfect Shine
                    </VerticalCutReveal>
                </h2>

                <TimelineContent
                    as="p"
                    animationNum={0}
                    timelineRef={pricingRef}
                    customVariants={revealVariants}
                    className="md:text-base text-sm text-muted-foreground w-full mx-auto"
                >
                    Professional detailing packages tailored to your vehicle's needs. From maintenance washes to ceramic coatings.
                </TimelineContent>

                <TimelineContent
                    as="div"
                    animationNum={1}
                    timelineRef={pricingRef}
                    customVariants={revealVariants}
                >
                    <PricingSwitch
                        onSwitch={togglePricingPeriod}
                        value={isYearly ? "1" : "0"}
                        className="w-fit mx-auto mt-6"
                    />
                </TimelineContent>
            </article>

            <div className="grid md:grid-cols-3 gap-6 py-6">
                {plans.map((plan, index) => (
                    <TimelineContent
                        key={plan.name}
                        as="div"
                        animationNum={2 + index}
                        timelineRef={pricingRef}
                        customVariants={revealVariants}
                        className="flex"
                    >
                        <Card
                            className={`relative border h-full flex flex-col justify-between w-full ${plan.popular
                                ? "ring-2 ring-primary bg-primary/5 hover:bg-primary/10 border-primary/50"
                                : "bg-card hover:bg-card/80 border-border"
                                } transition-colors duration-300`}
                        >
                            <CardHeader className="text-left">
                                <div className="flex justify-between items-start">
                                    <h3 className="xl:text-2xl md:text-xl text-2xl font-semibold text-foreground mb-2">
                                        {plan.name}
                                    </h3>
                                    {plan.popular && (
                                        <div className="">
                                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                                                Popular
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <p className="min-h-[40px] xl:text-sm md:text-xs text-sm text-muted-foreground mb-4">
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-semibold text-black">
                                        $
                                        <NumberFlow
                                            format={{
                                                currency: "USD",
                                            }}
                                            value={isYearly ? plan.yearlyPrice : plan.price}
                                            className="text-4xl font-semibold text-black"
                                        />
                                    </span>
                                    <span className="text-muted-foreground ml-1">
                                        /start
                                    </span>
                                </div>
                            </CardHeader>

                            <CardContent className="pt-0 flex-grow flex flex-col justify-end">
                                <a href="tel:901-650-8824" className="w-full">
                                    <button
                                        className={`w-full mb-6 p-4 text-lg rounded-xl transition-all duration-300 ${plan.popular
                                            ? "bg-gradient-to-t from-primary to-primary/80 shadow-lg shadow-primary/20 border border-primary text-primary-foreground hover:brightness-110"
                                            : "bg-card border border-border text-foreground hover:bg-accent hover:text-accent-foreground"
                                            }`}
                                    >
                                        {plan.buttonText}
                                    </button>
                                </a>

                                <div className="space-y-3 pt-4 border-t border-border">
                                    <h4 className="font-medium text-base text-foreground mb-3">
                                        {plan.includes[0]}
                                    </h4>
                                    <ul className="space-y-2 font-medium">
                                        {plan.includes.slice(1).map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <span className="h-5 w-5 bg-card border border-primary rounded-full flex items-center justify-center mt-0.5 mr-3 shrink-0">
                                                    <CheckCheck className="h-3 w-3 text-primary" />
                                                </span>
                                                <span className="text-sm text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                ))}
            </div>
        </div>
    );
}
