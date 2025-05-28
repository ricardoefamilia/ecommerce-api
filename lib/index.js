"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Bem-vindo ao curso de Node.js! - Curso em Vídeo");
});
let users = [
    { id: 1, name: "João", age: 25 },
    { id: 2, name: "João", age: 35 }
];
app.get("/users", (req, res) => {
    // Simulando uma consulta ao banco de dados
    res.send(users);
});
app.post("/users", (req, res) => {
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
//# sourceMappingURL=index.js.map