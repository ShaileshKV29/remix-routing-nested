import { Meta } from "@remix-run/react";

export default function Pricing()
{
    return(
        <main>
            Here is the Pricing Page
        </main>
    );
};


export function meta()
{
    return [
        { title: 'Pricing Info' },
         {
            name: "description",
            content: "This Page Contains Information about Pricing",
        },
    ];
}

// export function meta() {
//   return {
//     title: "Pricing Info",
//     description: 'Manage your notes with ease.',
//   };
// }