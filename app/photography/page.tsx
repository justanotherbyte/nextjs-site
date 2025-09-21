"use client";

import Image from "next/image";
import Section from "@/components/section";
import { LoaderCircle, X } from "lucide-react";
import { useState } from "react";

export default function Photography() {
    const numPhotos = 48;
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(false);

    const openModal = (imageIndex: number) => {
        setSelectedImage(imageIndex);
        setIsModalOpen(true);
        setIsImageLoading(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        setIsImageLoading(false);
    };

    const handleImageLoad = () => {
        setIsImageLoading(false);
    };

    return (
        <Section id="photography" name="My Photography" description="All Photos are taken on an iPhone 14 Pro Max.">
            <div className="grid lg:grid-cols-4 gap-3 sm:grid-cols-2">
                {Array(numPhotos).fill(null).map((_, i) => (
                    <div key={i} className="group rounded-md overflow-hidden cursor-pointer" onClick={() => openModal(i)}>
                        <Image
                            src={`/data/photos/img_${i}.jpg`}
                            alt={`Photo ${i + 1}`}
                            className="rounded-sm h-full transition-transform duration-200 ease-in-out group-hover:scale-110 object-cover"
                            width={600}
                            height={600}
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-zinc-900 bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        <button
                            onClick={closeModal}
                            className="absolute hover:cursor-pointer top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
                        >
                            <X />
                        </button>

                        {/* Loading Spinner */}
                        {isImageLoading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <LoaderCircle className="h-16 w-16 text-white animate-spin" />
                                <p className="text-white mt-4 text-lg">Loading image...</p>
                            </div>
                        )}

                        <Image
                            src={`/data/photos/img_${selectedImage}.jpg`}
                            alt={`Photo ${selectedImage + 1}`}
                            className={`max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-lg transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'
                                }`}
                            width={1200}
                            height={1200}
                            onClick={(e) => e.stopPropagation()}
                            onLoad={handleImageLoad}
                        />
                    </div>
                </div>
            )}
        </Section>
    )
}