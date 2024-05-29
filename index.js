import axios from "axios";

const cep = "01153000";

const postFake = async () => {
    const result = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
            title: "Titulo",
            body: "Texto",
            userId: 1,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer <JWT>",
            },
        }
    );

    if (result.status != 201) {
        console.log("OCORREU UM ERRO!");
        return;
    }

    console.log(result.status);
    console.log(result.data);
};

await postFake();
