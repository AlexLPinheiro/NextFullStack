async function getUsers() {
    const res = await fetch("http://localhost:3000/api/users", {
        cache: "no-store",

    });
    return res.json();
}

export default async function UsuariosPage() {
    const users = await getUsers();

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id} className="mb-2 p-2 border rounded hover:bg-gray-100">
                        {user.name} , Vulgo {user.vulgo}
                    </li>
                ))}
            </ul>
        </div>
    )
}