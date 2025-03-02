import InputPasswordField from "../components/molecules/input_password";
import InputTextField from "../components/molecules/input_txt";

function TestPage() {
    return (
        <>
            <p>testPAge</p>
        <InputTextField id={"test"}  txtLabel={"form input "}/>
        <InputPasswordField txtLabel={"password insert"} id={"password"} />
    
        </>
    );
}

export default TestPage;