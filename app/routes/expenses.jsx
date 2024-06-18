import { Link } from "@remix-run/react";

export default function Expenses()
{
    return(
        <main className="p-6">
            <h1 className="text-3xl">Here is the Expenses Page</h1>
            <ul className="list-disc mt-4 pl-6 space-y-2">
                <li><Link to='add'>Add Expense</Link></li>
                <li><Link to='raw'>Download Data</Link></li>
            </ul>
        </main>
    );
};

export function meta()
{
    return [
        { title: 'Expenses Page' },
         {
            name: "description",
            content: "This Page Contains Information about Expenses",
        },
    ];
}