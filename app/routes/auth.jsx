export default function AuthPage()
{
    return(
        <main>
            Here is the Auth Page
        </main>
    );
};

export function meta()
{
    return [
        { title: 'Auth Page' },
         {
            name: "description",
            content: "This Page Contains Information about User Auth",
        },
    ];
}