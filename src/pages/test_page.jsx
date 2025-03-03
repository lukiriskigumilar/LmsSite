import InputPasswordField from "../components/molecules/input_password";
import PhoneField from "../components/molecules/input_phone_number";
import InputTextField from "../components/molecules/input_txt";


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