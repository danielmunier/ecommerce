import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SettingsForm } from "./components/settings-form";
import { Store } from "@prisma/client";

interface SettingsPageProps {
        params: {
            storeId: string;
        }
}

const SettingsPage: React.FC<SettingsPageProps> = async ({
    params
}) => {

    const {userId} = auth()

    if(!userId) {
        redirect("/sign-in")
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId: userId
        }
    })

    if(!store) {
        redirect("/")
    }

    return (
        <div className="flex-col">
            <div className="flex-1 spacec-y-4 p-8 pt-6">
                <SettingsForm initialData={store}/>

            </div>
            
        </div>
    )
}

export default SettingsPage