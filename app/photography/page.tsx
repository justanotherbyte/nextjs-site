"use client";

import Image from "next/image";
import Section from "@/components/section";

export default function Photography() {
    const numPhotos = 48;

    return (
        <Section id="photography" name="My Photography" description="All Photos are taken on an iPhone 14 Pro Max.">
            <div className="grid lg:grid-cols-4 gap-3 sm:grid-cols-2">
                {Array(numPhotos).fill(null).map((_, i) => (
                    <div key={i} className="group rounded-md overflow-hidden">
                        <Image
                        src={`/data/photos/img_${i}.jpg`}
                        alt={`Photo ${i + 1}`}
                        className="rounded-sm h-full transition-transform duration-200 ease-in-out group-hover:scale-110 object-cover grayscale hover:grayscale-0"
                        width={600}
                        height={600}
                    />
                    </div>
                ))}
            </div>
        </Section>
    )
}