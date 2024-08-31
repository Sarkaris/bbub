import { NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'
// import { useParams } from 'next/navigation'
// Create a single supabase client for interacting with your database
const supabase = createClient(`${process.env.NEXT_PUBLIC_SUPABASE_URL}`, `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY} `)

export async function GET(request) {

    try {
        
        let id = request.nextUrl.searchParams.get("id")
        // console.log("hi");
        // id = parseInt(id)
        // console.log(id);
        // console.log(typeof id);
        // console.log("hi");
        let { data: Product, error } = await supabase.from('Products').select("*").eq("id",id)
        // if(Products){
            // console.log(Product);
        // }
        if (error) {
            console.log(error);
        }


        // const database = client.db('stock');
        // const inventory = database.collection('inventory');
        // console.log("Hiiiiiiiiiiii");
        // const query = {};
        // const pro = await inventory.find(query)
        // console.log(pro);
        // const products = await inventory.find(query).toArray();
        return NextResponse.json({ success: true, Product })
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }

}
