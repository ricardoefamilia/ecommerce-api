import express, {Request, Response} from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo ao curso de Node.js! - Curso em Vídeo");    
});


let users = [
    {id: 1, name: "João", age: 25},
    {id: 2, name: "João", age: 35}
  ];
  
app.get("/users", (req: Request, res: Response) => {
  
  // Simulando uma consulta ao banco de dados
  res.send(users);
});

app.post("/users", (req: Request, res: Response) => {
  // Simulando a criação de um usuário  
  let user = req.body;
  users.push(user);
  res.send({
    message: "Usuário criado com sucesso!",
    user: user
  });
});

app.listen(3000, () => {
  console.log("Server ativo na porta 3000 - http://localhost:3000");
});