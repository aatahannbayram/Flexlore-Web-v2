"use client"

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export function MorphingDialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                    Demoyu Aç
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Flexlore Demo</DialogTitle>
                    <DialogDescription>
                        Flexlore'un güçlü özelliklerini keşfedin. Yapay zeka destekli öğrenme deneyimi için hemen başlayın.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-4">
                        <h4 className="font-medium leading-none">Özellikler</h4>
                        <p className="text-sm text-muted-foreground">
                            • Kişiselleştirilmiş öğrenme yolları
                            • Gerçek zamanlı geri bildirim
                            • İlerleme takibi
                            • Akıllı öneriler
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
} 