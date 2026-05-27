"use client";
import BaseButton from "@/components/base/BaseButton";
import { Folder } from "lucide-react";
import Link from "next/link";

export default function SharedPage() {
    const dummyDriveId = [{
        label: "Dummy Drive 1",
        id: "1234567890",
    }, {
        label: "Dummy Drive 2",
        id: "1234567891",
    }, {
        label: "Dummy Drive 3",
        id: "1234567892",
    }, {
        label: "Dummy Drive 4",
        id: "1234567893",
    }, {
        label: "Dummy Drive 5",
        id: "1234567894",
    }];

    return (
        <main>
            <h1 className="font-bold text-3xl">Shared Drives</h1>
            <section className="flex justify-start flex-wrap gap-4 mt-8">
                {dummyDriveId.map((drive) => (
                    <BaseButton
                        key={drive.id}
                        variant="outline"
                    >
                        <Link href={`/shared/${drive.id}`} className="flex items-center gap-2">
                            <Folder className="w-4 h-4" />
                            {drive.label}
                        </Link>
                    </BaseButton>
                ))}
            </section>
        </main>
    );
}