interface Props {
    params: Promise<{
        id: String;
    }>;
}

export default async function ProdutoDetalhe({params}: Props) {

    const { id } = await params;

    return(
        <div className="p-10">
            <h1 className="text-2xl">Detalhes do produto: </h1>
            <p>id: <strong>{id}</strong></p>
        </div>
    );
}