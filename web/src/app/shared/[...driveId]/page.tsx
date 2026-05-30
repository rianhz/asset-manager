"use client";
import { BaseBreadcrumbs } from "@/components/base/BaseBreadcrumbs";
import { FolderFileButton } from "@/components/buttons/FolderFileButton";

export default function SharedPage() {

    const dummyDriveId = [{
        label: "Dummy Drive 1",
        id: "1234567890",
        href: `/shared/${1234567890}`,
    }, {
        label: "Dummy Drive 2",
        id: "1234567891",
        href: `/shared/${1234567891}`,
    }, {
        label: "Dummy Drive 3",
        id: "1234567892",
        href: `/shared/${1234567892}`,
    }, {
        label: "Dummy Drive 4",
        id: "1234567893",
        href: `/shared/${1234567893}`,
    }, {
        label: "Dummy Drive 5",
        id: "1234567894",
        href: `/shared/${1234567894}`,
    }];
  return (
    <div>
      <BaseBreadcrumbs breadcrumbs={dummyDriveId} />
      <main>
        <section className="flex justify-start flex-wrap gap-4 mt-8">
            {dummyDriveId.map((drive) => (
                <FolderFileButton
                    key={drive.id}
                    itemId={drive.id}
                    value={drive.label}
                >
                    {drive.label}
                </FolderFileButton>
            ))}
        </section>
      </main>
    </div>
  );
}