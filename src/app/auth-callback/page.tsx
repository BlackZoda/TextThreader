import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = async () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');
    
    const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
        onSuccess: ({ success }) => {
            // check if user is synced to db
            if (success) router.push(origin ? `/${origin}` : '/dashboard')
        }
    });
}

export default Page;
