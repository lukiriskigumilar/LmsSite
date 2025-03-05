import InputPasswordField from "../components/molecules/InputPasswordField";
import PhoneField from "../components/molecules/PhoneField";
import InputTextField from "../components/molecules/InputTextField";


function TestPage() {
    return (
        <>
            <p>testPAge</p>
        <InputTextField id={"test"}  txtLabel={"form input "}/>
        <InputPasswordField txtLabel={"password insert"} id={"password"} />
      
     <PhoneField />
      
    
        </>
    );
}

export default TestPage;