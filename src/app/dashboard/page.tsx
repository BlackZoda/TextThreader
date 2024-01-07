import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    
    if(!user || !user.id) redirect('/auth-callback?origin=dashboard')

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{user.email}</p>
        </div>
    )
}

export default Page;