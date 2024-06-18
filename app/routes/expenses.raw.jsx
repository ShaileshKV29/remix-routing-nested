export default function ExpensesRaw()
{
    return(
        <main>
            This Page Downloads Raw Expense Data
        </main>
    );
};

export function meta()
{
    return [
        { title: 'Download Expense Data' },
         {
            name: "description",
            content: "This Page Downloads Raw Expense Data",
        },
    ];
}