
import LoginLayout from "../../components/templates/login_layout";
import NavAuth from "../../layouts/navbar_auth";
function LoginPage() {
    return (
        <>
            <NavAuth />
            <section>
                <div className="bg-background-primary w-screen h-screen flex justify-center items-start">
                    <LoginLayout  />
                </div>
            </section>
        </>
    );
}

export default LoginPage;