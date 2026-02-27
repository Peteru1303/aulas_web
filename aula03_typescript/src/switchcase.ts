let perfil: string ="admin";

switch (perfil){
    case "admin":
        console.log ("acesso total ao sistema");
        break;
        case "usuário":
        console.log("acesso limitado");
        break;
        case "visitante":
            console.log("Apenas leitura");
        break;
        default:
            console.log("perfil não reconhecido");
}