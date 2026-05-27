import { cookies } from "next/headers";
import AuthProvider from "./AuthProvider";
import { getMyProfile } from "@/features/auth/api";

export default async function AuthServerProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    let user = null;

    try {

    const cookieStore = await cookies();

        user = await getMyProfile({
            Cookie: cookieStore.toString(),
        });


    } catch (error) {

        user = null;
    }

    return (
        <AuthProvider initialUser={user}>
            {children}
        </AuthProvider>
    );
}