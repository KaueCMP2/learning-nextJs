//?-----------------------------------------------------
//? Estrutura padrao
//?-----------------------------------------------------
const Login = () => {
    return (
        <>
            <main>
                <img src="" alt="" />
                <aside>
                    <h1>Login</h1>
                    <form action="">
                        <label htmlFor="email">E-mail</label>
                        <input type="mail" placeholder="email@exemplo.com" name="email" required />

                        <label htmlFor="password">Senha</label>
                        <input type="password" placeholder="********" name="password" required />
                        <a href="">Esqueceu sua senha?</a>

                        <button type="submit" name="entrar" className="btn-entrar">Entrar</button>
                    </form>
                </aside>
            </main>
        </>
    );
}

export default Login;