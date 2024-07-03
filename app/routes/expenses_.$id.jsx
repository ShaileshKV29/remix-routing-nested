export default function ShowExpenses()
{
    return(
        <main>
            This Page Shows an Expense with Specific Id
        </main>
    );
};

export function meta({params})
{
    // console.log(params);
    return [
        { title: params.id },
         {
            name: "description",
            content: "This Page Adds an Expense",
        },
    ];
}