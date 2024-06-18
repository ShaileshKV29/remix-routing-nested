import { Link } from "@remix-run/react";


export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <Link to="pricing">Pricing Page</Link>
        </li>
        <li>
          <Link to="auth">Auth Page</Link>
        </li>
        <li>
          <Link to="expenses">Expenses</Link>
        </li>
      </ul>
    </div>
  );
}
