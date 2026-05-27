"use client";
import { useParams } from "next/navigation";
import { BaseBreadcrumbs } from "@/components/base/BaseBreadcrumbs";
import BaseButton from "@/components/base/BaseButton";

export default function SharedPage() {
    const { driveId } = useParams();

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
    <div>
      <BaseBreadcrumbs />
      <main>
        <h1 className="font-bold text-3xl">Shared {driveId}</h1>
        <section className="flex justify-start flex-wrap gap-4 mt-8">
            {dummyDriveId.map((drive) => (
                <BaseButton
                    key={drive.id}
                    variant="outline"
                >
                    {drive.label}
                </BaseButton>
            ))}
        </section>
      </main>
    </div>
  );
}