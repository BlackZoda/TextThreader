import { db } from "@/app/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { notFound, redirect } from "next/navigation"

interface PageProps {
    params: {
        fileid: string
    }
}

const Page = async ({params} : PageProps) => {
    // retrieve the file id
    const { fileid } = params

    // make database call
    const { getUser } =  getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`)

    const file = db.file.findFirst({
        where: {
            id: fileid,
            userId: user.id,
        },
    });

    if (!file) notFound();

    return (
        <div>{fileid}</div>
    )
}

export default Page;
