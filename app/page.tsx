'use client';

import * as React from 'react';
import { MorphingDialogDemo } from '@/components/ui/morphing-dialog-demo';

export default function Page() {
    return (
        <main className="flex flex-col items-center p-8 md:p-12 lg:p-24 min-h-screen">
            <div className="flex flex-col gap-8 max-w-3xl w-full">
                {/* Hero Section */}
                <section className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-medium tracking-tight">
                        Welcome To Flexlore Inc
                    </h1>
                    <p className="text-2xl text-[#EC6726]">
                        The New Way to Build and Grow with Flexlore Inc.
                    </p>
                    <div className="space-y-4">
                        <h2 className="text-xl">Smart Learning Journey Starts Here</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Step-by-step business creation and tracking is now easier, smarter, and more flexible. Flexlore Inc. is an intelligent learning and productivity network that transforms every skill, idea, and venture into a meaningful journey.
                        </p>
                    </div>
                </section>

                {/* Library Section */}
                <section className="space-y-8">
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-200">
                        Our offer optimizes your training times by turning work instructions into a digital library.
                    </h2>

                    <div className="bg-white rounded-2xl p-8 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-[#EC6726] text-2xl font-medium">Flexlore:</span>
                            <span className="text-2xl text-black">About our interface</span>
                            <span className="text-[#EC6726] text-2xl">_</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white transition-colors rounded-full bg-[#EC6726] hover:bg-[#EC6726]/90"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                    Download app
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Demo Section */}
                <section className="w-full">
                    <MorphingDialogDemo />
                </section>
            </div>
        </main>
    );
} 