import { auth, currentUser } from '@clerk/nextjs/server';
import  {useAuth}  from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET(){
    const { userId } = auth();
    const user = await currentUser();

    if(!userId){
        return NextResponse.json({message: "Not Authentication"}, {status: 401});
    }

    return NextResponse.json(
        {
            message:"Authentication",
            data : { userId: userId, username: user?.username},
        },
        { status: 200}
    );
}

